"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

const brand = "Datasynex";
const orbitParticles = [0, 60, 120, 180, 240, 300];

export default function Preloader({ isVisible }) {
  const overlayRef = useRef(null);
  const progressRef = useRef(null);
  const orbitRef = useRef(null);
  const brandRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const ctx = gsap.context(() => {
      gsap.set(progressRef.current, { scaleX: 0 });
      gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate() {
          const value = Math.round(this.progress() * 100);
          setProgress(value);
        },
      });

      const letters = brandRef.current?.querySelectorAll("[data-letter]");
      if (letters) {
        gsap.from(letters, {
          y: 40,
          opacity: 0,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.7,
          ease: "back.out(1.4)",
          delay: 0.15,
        });
      }

      const particles = orbitRef.current?.querySelectorAll(`.${styles.particle}`);
      particles?.forEach((p, i) => {
        const angle = orbitParticles[i] * (Math.PI / 180);
        const radius = 100;
        gsap.set(p, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
        gsap.to(p, {
          rotation: 360,
          transformOrigin: `${-Math.cos(angle) * radius}px ${-Math.sin(angle) * radius}px`,
          duration: 4 + i * 0.2,
          repeat: -1,
          ease: "none",
        });
      });
    }, overlayRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          ref={overlayRef}
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <span className={styles.bgGradient} aria-hidden />
          <span className={styles.gridPattern} aria-hidden />
          <span className={styles.noise} aria-hidden />

          <div className={styles.wrap}>
            <div className={styles.orbit} ref={orbitRef}>
              <span className={styles.ring} />
              <span className={`${styles.ring} ${styles.ringInner}`} />
              <span className={`${styles.ring} ${styles.ringDashed}`} />
              <span className={styles.arcOuter} />
              <span className={styles.arcInner} />
              {orbitParticles.map((deg) => (
                <span key={deg} className={styles.particle} />
              ))}
              <div className={styles.core}>
                <span className={styles.coreGlyph}>Dx</span>
              </div>
            </div>

            <div ref={brandRef} className={styles.brand} aria-label={brand}>
              {brand.split("").map((char, i) => (
                <span
                  key={`${char}-${i}`}
                  data-letter
                  className={styles.brandLetter}
                  style={i >= 4 ? { color: "transparent" } : undefined}
                >
                  {i < 4 ? (
                    char
                  ) : (
                    <span style={{
                      background: "linear-gradient(135deg, #38bdf8, #1a6fff)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}>{char}</span>
                  )}
                </span>
              ))}
            </div>

            <div className={styles.tagline}>Building the data fabric</div>

            <div className={styles.progressWrap}>
              <div className={styles.progressBar}>
                <span ref={progressRef} className={styles.progressFill} />
              </div>
              <div className={styles.progressMeta}>
                <span>Initialising</span>
                <span className={styles.percent}>{String(progress).padStart(3, "0")}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
