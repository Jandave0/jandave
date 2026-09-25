"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  TargetAndTransition,
} from "motion/react";
import { cn } from "@/lib/utils";

export type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: {
    bounce?: number;
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    exit?: TargetAndTransition;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent = false,
  transition,
  variants,
  onPositionChange,
}: CursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const defaultSpring =
    springConfig?.bounce !== undefined
      ? { bounce: 0.001, ...springConfig }
      : {
          damping: 30,
          stiffness: 350,
          mass: 0.5,
          ...springConfig,
        };

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, defaultSpring);
  const cursorY = useSpring(mouseY, defaultSpring);

  useEffect(() => {
    // Only activate cursor tracking on devices with a precision pointer (mouse/trackpad)
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const parent = attachToParent ? cursorRef.current?.parentElement : window;
    if (!parent) return;

    let parentRect: DOMRect | null = null;
    const updateRect = () => {
      if (attachToParent && cursorRef.current?.parentElement) {
        parentRect = cursorRef.current.parentElement.getBoundingClientRect();
      }
    };
    updateRect();

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      let x = mouseEvent.clientX;
      let y = mouseEvent.clientY;

      if (attachToParent) {
        if (!parentRect) updateRect();
        if (parentRect) {
          x = mouseEvent.clientX - parentRect.left;
          y = mouseEvent.clientY - parentRect.top;
        }
      }

      mouseX.set(x);
      mouseY.set(y);
      onPositionChange?.(mouseEvent.clientX, mouseEvent.clientY);
    };

    const handleMouseEnter = () => {
      updateRect();
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    parent.addEventListener("mousemove", handleMouseMove, { passive: true });
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", updateRect, { passive: true });

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateRect);
    };
  }, [attachToParent, mouseX, mouseY, onPositionChange]);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none hidden md:block",
        attachToParent ? "absolute inset-0 z-50 overflow-visible" : "fixed inset-0 z-50 pointer-events-none"
      )}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={variants?.initial || { scale: 0.5, opacity: 0 }}
            animate={variants?.animate || { scale: 1, opacity: 1 }}
            exit={variants?.exit || { scale: 0.5, opacity: 0 }}
            transition={transition || { duration: 0.15, ease: "easeOut" }}
            style={{
              position: attachToParent ? "absolute" : "fixed",
              left: cursorX,
              top: cursorY,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
