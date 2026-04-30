"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal wrapper. Animates children when scrolled into view.
 * Variants: fade, up, scale, words, chars, lines
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 0.9,
  stagger = 0.06,
  start = "top 85%",
  once = true,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      let targets = [el];
      if (variant === "stagger" || variant === "children") {
        targets = el.children;
      }

      const baseFrom = (() => {
        switch (variant) {
          case "fade":
            return { opacity: 0 };
          case "scale":
            return { opacity: 0, scale: 0.92 };
          case "left":
            return { opacity: 0, x: -40 };
          case "right":
            return { opacity: 0, x: 40 };
          case "stagger":
          case "children":
            return { opacity: 0, y: 28 };
          case "up":
          default:
            return { opacity: 0, y: 32 };
        }
      })();

      gsap.from(targets, {
        ...baseFrom,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, duration, stagger, start, once]);

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
