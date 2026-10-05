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
  const hasInitialized = useRef(false);

  // Fast, responsive spring physics so the follower stays locked to the pointer
  const defaultSpring = {
    damping: 28,
    stiffness: 450,
    mass: 0.08,
    ...springConfig,
  };

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorX = useSpring(mouseX, defaultSpring);
  const cursorY = useSpring(mouseY, defaultSpring);

  useEffect(() => {
    // Only activate cursor tracking on devices with a precision pointer (mouse/trackpad)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const targetElement = attachToParent ? cursorRef.current?.parentElement : window;
    if (!targetElement) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const x = mouseEvent.clientX;
      const y = mouseEvent.clientY;

      if (!hasInitialized.current) {
        // Snap immediately to mouse position without animating from offscreen
        cursorX.jump(x);
        cursorY.jump(y);
        mouseX.set(x);
        mouseY.set(y);
        hasInitialized.current = true;
      } else {
        mouseX.set(x);
        mouseY.set(y);
      }

      setIsVisible(true);
      onPositionChange?.(x, y);
    };

    const handleMouseEnter = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (mouseEvent.clientX && mouseEvent.clientY) {
        cursorX.jump(mouseEvent.clientX);
        cursorY.jump(mouseEvent.clientY);
        mouseX.set(mouseEvent.clientX);
        mouseY.set(mouseEvent.clientY);
        hasInitialized.current = true;
      }
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      hasInitialized.current = false;
    };

    targetElement.addEventListener("mousemove", handleMouseMove, { passive: true });
    targetElement.addEventListener("mouseenter", handleMouseEnter);
    targetElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      targetElement.removeEventListener("mousemove", handleMouseMove);
      targetElement.removeEventListener("mouseenter", handleMouseEnter);
      targetElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [attachToParent, mouseX, mouseY, cursorX, cursorY, onPositionChange]);

  return (
    <div ref={cursorRef} className="pointer-events-none hidden md:block" aria-hidden="true">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
            style={{
              x: cursorX,
              y: cursorY,
            }}
          >
            <motion.div
              className={cn("-translate-x-1/2 -translate-y-1/2 pointer-events-none", className)}
              initial={variants?.initial || { scale: 0.5, opacity: 0 }}
              animate={variants?.animate || { scale: 1, opacity: 1 }}
              exit={variants?.exit || { scale: 0.5, opacity: 0 }}
              transition={transition || { duration: 0.15, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
