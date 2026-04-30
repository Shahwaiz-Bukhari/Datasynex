"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TestimonialsSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "Datasynex rebuilt our analytics platform end-to-end. Pipeline runtimes dropped 73% and our finance team finally trusts the numbers.",
    name: "Priya Raman",
    role: "VP Engineering · Lendora",
    initials: "PR",
  },
  {
    quote:
      "They migrated 2.4 PB to a modern lakehouse without a single hour of customer-facing downtime. The runbook discipline is unreal.",
    name: "Marcus Hale",
    role: "CTO · Northwind Logistics",
    initials: "MH",
  },
  {
    quote:
      "Our ML team ships features twice as fast. Datasynex laid down the Airflow + dbt foundation that everyone else now builds on.",
    name: "Sofia Becker",
    role: "Head of Data · Klarisma AI",
    initials: "SB",
  },
  {
    quote:
      "From SOC 2 to GDPR, they handled the heavy lifting. We passed audit on the first attempt with zero high findings.",
    name: "James O'Connor",
    role: "Director of Security · FieldKit",
    initials: "JO",
  },
  {
    quote:
      "Real engineers, not slide-decks. They architected, coded, observed, and trained our team to own it long-term.",
    name: "Aiko Tanaka",
    role: "Founder · Plotwise",
    initials: "AT",
  },
  {
    quote:
      "We saved $480K annually after their Snowflake optimisation. Pricing, performance and governance — all dialled in.",
    name: "Daniel Voss",
    role: "Head of Analytics · Brightlane",
    initials: "DV",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  // Carousel state (mobile)
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const track = trackRef.current;
      const pin = pinRef.current;
      if (!track || !pin) return;

      const totalWidth = track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${totalWidth}`,
            scrub: true,
          },
        });
      }

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.kicker}>Client Voices</div>
          <h2 className={styles.title}>
            Trusted by teams who <span>ship serious data</span>.
          </h2>
        </div>
        <p className={styles.lead}>
          Founders, CTOs and data leaders who have shipped production systems with us — in their
          own words.
        </p>
      </div>

      <div ref={pinRef} className={styles.pinWrap}>
        <div ref={trackRef} className={styles.track}>
          {testimonials.map((t, i) => (
            <article key={t.name} className={styles.card} data-cursor="hover">
              <span className={styles.quoteMark}>&ldquo;</span>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.meta}>
                <span className={styles.avatar}>{t.initials}</span>
                <div className={styles.who}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
                <span className={styles.rating} aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
              <span
                className={styles.indicator}
                style={{ position: "absolute", top: 24, right: 28, bottom: "auto", left: "auto", transform: "none" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <div className={styles.indicator}>Scroll to navigate →</div>
        <div className={styles.progress}>
          <div ref={progressRef} className={styles.progressBar} />
        </div>
      </div>

      {/* Mobile carousel */}
      <div className={styles.carouselSection}>
        <div
          className={styles.carouselViewport}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <article key={t.name} className={`${styles.card} ${styles.carouselCard}`} data-cursor="hover">
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.meta}>
                  <span className={styles.avatar}>{t.initials}</span>
                  <div className={styles.who}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                  <span className={styles.rating} aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                </div>
                <span className={styles.cardIndex}>
                  {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.carouselControls}>
          <button className={styles.carouselBtn} onClick={prev} aria-label="Previous testimonial">
            ←
          </button>
          <div className={styles.carouselDots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.carouselBtn} onClick={next} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
