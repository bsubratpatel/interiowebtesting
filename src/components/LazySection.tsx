"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
  ids?: string[];
}

export default function LazySection({ children, height = "400px", className = "", ids }: LazySectionProps) {
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

    // Immediately render children if URL hash matches any target ID within this section
    const checkHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ids?.includes(hash)) {
        setIsIntersecting(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", checkHash);
    };
  }, [ids]);

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
