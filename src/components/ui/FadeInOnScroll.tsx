"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimationType =
  | "fadeInUp"
  | "popIn"
  | "fadeIn"
  | "slideInLeft"
  | "slideInRight";

type Props = {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  className?: string;
};

export default function FadeInOnScroll({
  children,
  animation = "popIn",
  duration = 100,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible
          ? `${animation} ${duration}ms ease-out ${delay}ms both`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
