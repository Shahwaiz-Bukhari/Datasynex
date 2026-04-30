"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LogoMarqueeSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const rowA = [
  "Lendora", "Northwind", "Klarisma", "FieldKit", "Plotwise",
  "Brightlane", "Nimbus", "Quanta", "Helix", "Voltaq", "Stratos",
];

const rowB = [
  "Orbital", "Pulse", "Mosaic", "Lumen", "Vectra",
  "Cobalt", "Aether", "Polaris", "Ascend", "Foundry", "Synapse",
];

function LogoChip({ name }) {
  const initial = name.slice(0, 2).toUpperCase();
  return (
    <div className={styles.logo} data-cursor="hover" data-cursor-label={name}>
      <span className={styles.logoIcon}>{initial}</span>
      {name}
    </div>
  );
}

export default function LogoMarqueeSection() {
  const sectionRef = useRef(null);
  const rowARef = useRef(null);
  const rowBRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const a = rowARef.current;
    const b = rowBRef.current;
    if (!section || !a || !b) return;

    const ctx = gsap.context(() => {
      // Continuous base drift (forward for row A, back for row B)
      const widthA = a.scrollWidth / 2;
      const widthB = b.scrollWidth / 2;

      const driftA = gsap.to(a, {
        x: -widthA,
        duration: 38,
        ease: "none",
        repeat: -1,
      });
      const driftB = gsap.fromTo(
        b,
        { x: -widthB },
        { x: 0, duration: 42, ease: "none", repeat: -1 }
      );

      // Scroll velocity boost: rows accelerate based on scroll velocity & direction
      const rowATween = gsap.quickTo(a, "x", { duration: 0.6, ease: "power3.out" });
      const rowBTween = gsap.quickTo(b, "x", { duration: 0.6, ease: "power3.out" });

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          // Adjust speed based on scroll velocity
          const v = self.getVelocity(); // positive = scrolling down
          const speed = gsap.utils.clamp(-3, 3, v / 600);
          driftA.timeScale(1 + speed);
          driftB.timeScale(1 - speed);
        },
      });

      return () => {
        driftA.kill();
        driftB.kill();
        st.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <div className={styles.kicker}>Trusted Partners</div>
        <h2 className={styles.title}>
          Companies <span>building the future</span> with Datasynex
        </h2>
      </div>

      <div ref={rowARef} className={styles.row}>
        {[...rowA, ...rowA].map((name, i) => (
          <LogoChip key={`a-${i}`} name={name} />
        ))}
      </div>

      <div ref={rowBRef} className={styles.row}>
        {[...rowB, ...rowB].map((name, i) => (
          <LogoChip key={`b-${i}`} name={name} />
        ))}
      </div>

      <p className={styles.note}>
        From Series A to enterprise · 60+ production deployments shipped
      </p>
    </section>
  );
}
