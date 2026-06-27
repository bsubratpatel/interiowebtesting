"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
}

export default function AnimationWrapper({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  xOffset = 0,
  scale = 1,
  className,
  ...props
}: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // elegant luxury ease-out
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
