"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Box, type BoxProps } from "@mantine/core";
import type { ReactNode } from "react";

interface AnimatedSectionProps extends BoxProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-right" | "slide-left";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimatedSectionProps) {
  const [isVisible, ref] = useIntersectionObserver({ threshold });

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all 0.8s ease-out ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateY(30px)",
          };
        case "fade-in":
          return {
            ...baseStyles,
            opacity: 0,
          };
        case "scale-in":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "scale(0.9)",
          };
        case "slide-right":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateX(-30px)",
          };
        case "slide-left":
          return {
            ...baseStyles,
            opacity: 0,
            transform: "translateX(30px)",
          };
        default:
          return {
            ...baseStyles,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "translateY(0) scale(1) translateX(0)",
    };
  };

  return (
    <Box ref={ref} style={getAnimationStyles()} {...props}>
      {children}
    </Box>
  );
}
