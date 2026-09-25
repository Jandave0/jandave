"use client";

import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 70;
const DEFAULT_DISTANCE = 140;
const DEFAULT_PANEL_HEIGHT = 56;

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  "aria-label"?: string;
};

export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
  isMobile: boolean;
};

const DockContext = createContext<DockContextType | undefined>(undefined);

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("useDock must be used within a Dock");
  }
  return context;
}

export function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 160, damping: 14 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const effectiveMagnification = isMobile ? Math.min(magnification, 48) : magnification;
  const effectiveDistance = isMobile ? 80 : distance;

  const maxHeight = useMemo(() => {
    return Math.max(80, effectiveMagnification + 20);
  }, [effectiveMagnification]);

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{
        height: isMobile ? panelHeight : height,
        scrollbarWidth: "none",
      }}
      className="flex max-w-full items-end overflow-visible select-none"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          if (!isMobile) {
            isHovered.set(1);
            mouseX.set(pageX);
          }
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        onTouchStart={() => {
          mouseX.set(Infinity);
          isHovered.set(0);
        }}
        className={cn(
          "mx-auto flex w-fit items-end gap-1.5 sm:gap-2.5 md:gap-3 rounded-full bg-white/90 dark:bg-[#18181B]/90 backdrop-blur-xl border border-neutral-300/80 dark:border-neutral-800 px-2 sm:px-3 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-x-auto sm:overflow-visible max-w-[calc(100vw-1.5rem)] sm:max-w-fit no-scrollbar",
          className
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockContext.Provider
          value={{
            mouseX,
            spring,
            distance: effectiveDistance,
            magnification: effectiveMagnification,
            isMobile,
          }}
        >
          {children}
        </DockContext.Provider>
      </motion.div>
    </motion.div>
  );
}

export function DockItem({
  children,
  className,
  onClick,
  href,
  external,
  "aria-label": ariaLabel,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring, isMobile } = useDock();
  const isHovered = useMotionValue(0);

  const baseWidth = isMobile ? 34 : 40;
  const rectRef = useRef<{ x: number; width: number } | null>(null);

  useEffect(() => {
    const handleReset = () => {
      rectRef.current = null;
    };
    window.addEventListener("resize", handleReset);
    window.addEventListener("scroll", handleReset, { passive: true });
    return () => {
      window.removeEventListener("resize", handleReset);
      window.removeEventListener("scroll", handleReset);
    };
  }, []);

  const mouseDistance = useTransform(mouseX, (val) => {
    if (val === Infinity) {
      rectRef.current = null;
      return Infinity;
    }
    if (!rectRef.current && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      rectRef.current = { x: rect.x, width: rect.width };
    }
    const domRect = rectRef.current ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseWidth, magnification, baseWidth]
  );

  const width = useSpring(widthTransform, spring);

  const content = (
    <motion.div
      ref={ref}
      style={{
        width: isMobile ? baseWidth : width,
        height: isMobile ? baseWidth : width,
      }}
      onHoverStart={() => {
        if (!isMobile) isHovered.set(1);
      }}
      onHoverEnd={() => {
        isHovered.set(0);
      }}
      onFocus={() => {
        if (!isMobile) isHovered.set(1);
      }}
      onBlur={() => {
        isHovered.set(0);
      }}
      className={cn(
        "relative inline-flex items-center justify-center aspect-square rounded-full transition-colors cursor-pointer",
        className
      )}
      tabIndex={0}
      role={href ? "link" : "button"}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
            width: isMobile ? baseWidth : width,
            isHovered,
          });
        }
        return child;
      })}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-end focus:outline-none"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return content;
}

export function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>;
  const isHovered = restProps["isHovered"] as MotionValue<number> | undefined;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.92 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={cn(
            "absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-fit whitespace-nowrap rounded-md border border-neutral-200/80 bg-neutral-900 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white shadow-xl dark:border-neutral-700/80 dark:bg-neutral-100 dark:text-neutral-900 pointer-events-none z-50",
            className
          )}
          role="tooltip"
        >
          {children}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>;
  const widthProp = restProps["width"];

  const widthMotion =
    widthProp && typeof widthProp === "object" && "get" in widthProp
      ? (widthProp as MotionValue<number>)
      : null;

  const sizeTransform = useTransform(
    widthMotion ?? new MotionValue(36),
    (val) => Math.max(16, Math.round(val * 0.45))
  );

  return (
    <motion.div
      style={{
        width: widthMotion ? sizeTransform : "18px",
        height: widthMotion ? sizeTransform : "18px",
      }}
      className={cn("flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full", className)}
    >
      {children}
    </motion.div>
  );
}
