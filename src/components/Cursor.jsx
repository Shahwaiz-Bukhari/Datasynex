"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isCoarse) return;
    setEnabled(true);

    const dot = dotRef.current;
    const follower = followerRef.current;
    const labelEl = labelRef.current;
    if (!dot || !follower) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.45, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.45, ease: "power3" });
    const xToLabel = gsap.quickTo(labelEl, "x", { duration: 0.45, ease: "power3" });
    const yToLabel = gsap.quickTo(labelEl, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      xToDot(target.x);
      yToDot(target.y);
      xToFollower(target.x);
      yToFollower(target.y);
      xToLabel(target.x);
      yToLabel(target.y);
    };

    const onLeave = () => {
      gsap.to([dot, follower, labelEl], { opacity: 0, duration: 0.2 });
    };
    const onEnter = () => {
      gsap.to([dot, follower], { opacity: 1, duration: 0.2 });
    };

    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) {
        const v = t.getAttribute("data-cursor") || "hover";
        const l = t.getAttribute("data-cursor-label") || "";
        setVariant(v);
        setLabel(l);
      } else if (e.target.closest("a, button, [role='button'], input, textarea, [data-clickable]")) {
        setVariant("hover");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const onDown = () => {
      gsap.to(follower, { scale: 0.8, duration: 0.15 });
    };
    const onUp = () => {
      gsap.to(follower, { scale: 1, duration: 0.25, ease: "back.out(2)" });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled) return null;

  const variantClass = variant === "text" ? styles.text : variant === "hover" ? styles.hovering : "";

  return (
    <>
      <div ref={dotRef} className={`${styles.cursor} ${variantClass}`} aria-hidden />
      <div ref={followerRef} className={`${styles.follower} ${variantClass}`} aria-hidden />
      <div ref={labelRef} className={`${styles.label} ${label ? styles.show : ""}`} aria-hidden>
        {label}
      </div>
    </>
  );
}
