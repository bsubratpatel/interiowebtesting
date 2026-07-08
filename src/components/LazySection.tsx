"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
}

export default function LazySection({ children, height = "400px", className = "" }: LazySectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, render immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px", // Trigger loading 300px before section enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`content-visibility-auto ${className}`}
      style={{
        minHeight: isIntersecting ? "auto" : height,
        containIntrinsicSize: `auto ${height}`,
      }}
    >
      {isIntersecting ? children : <div style={{ height }} />}
    </div>
  );
}
