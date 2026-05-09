"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Box, Button, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "./HeroBackground";
import styles from "./HeroSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const headlineWords = [
  { text: "Big Data" },
  { text: "&" },
  { text: "Cloud" },
  { text: "Engineering" },
  { text: "for", muted: true },
  { text: "Scalable", gradient: true },
  { text: "Growth.", gradient: true },
];

const stats = [
  { value: "120+", label: "Pipelines Shipped" },
  { value: "99.95%", label: "Uptime Delivered" },
  { value: "24/7", label: "Cloud Operations" },
];

const trustItems = [
  "Cloud Data Experts",
  "Scalable Architecture",
  "Startup Friendly",
];

export default function HeroSection() {
  const isUltraSmall = useMediaQuery("(max-width:360px)", { noSsr: true });
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const kickerRef = useRef(null);
  const trustRef = useRef(null);
  const statsRef = useRef(null);
  const parallaxRef = useRef(null);

  const visibleTrust = useMemo(
    () => (isUltraSmall ? trustItems.slice(0, 2) : trustItems),
    [isUltraSmall]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(kickerRef.current, { y: 18, opacity: 0, duration: 0.6 }, 0.1);

      const chars = headlineRef.current?.querySelectorAll("[data-char]");
      if (chars && chars.length) {
        tl.from(
          chars,
          {
            yPercent: 110,
            opacity: 0,
            rotateX: -40,
            stagger: 0.018,
            duration: 0.85,
            ease: "power4.out",
          },
          0.2
        );
      }

      tl.from(subRef.current, { y: 22, opacity: 0, duration: 0.7 }, 0.55);
      tl.from(ctaRef.current?.children, { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.7);
      tl.from(trustRef.current?.children, { y: 14, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.85);
      tl.from(statsRef.current?.children, { y: 22, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.95);

      // Parallax effect on scroll
      gsap.to(parallaxRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out scroll indicator
      gsap.to(`.${styles.scrollIndicator}`, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mousemove glow on stat cards
  useEffect(() => {
    const cards = statsRef.current?.querySelectorAll(`.${styles.statCard}`);
    if (!cards) return;
    const handlers = [];
    cards.forEach((card) => {
      const handler = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };
      card.addEventListener("mousemove", handler);
      handlers.push([card, handler]);
    });
    return () => handlers.forEach(([c, h]) => c.removeEventListener("mousemove", h));
  }, []);

  return (
    <Box
      id="home"
      component="section"
      ref={sectionRef}
      className={styles.section}
      sx={{
        minHeight: { xs: "100vh", lg: "100vh" },
        display: "grid",
        alignItems: "center",
      }}
    >
      <div className={styles.canvas}>
        <HeroBackground />
      </div>
      <span className={styles.gridOverlay} aria-hidden />
      <span className={styles.veil} aria-hidden />

      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 12, sm: 14, md: 16, lg: 18 },
          px: { xs: 2, sm: 3, md: 4 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          ref={parallaxRef}
          sx={{
            maxWidth: { xs: "100%", lg: 880 },
            position: "relative",
          }}
        >
          <Box ref={kickerRef} className={styles.kicker} sx={{ mb: 3 }} data-cursor="text">
            <span className={styles.kickerDot} />
            Data Engineering · Cloud · AI Infrastructure
          </Box>

          <Typography
            ref={headlineRef}
            variant="h1"
            className={styles.headline}
            sx={{
              fontSize: {
                xs: isUltraSmall ? "2.1rem" : "2.5rem",
                sm: "3.4rem",
                md: "4.4rem",
                lg: "5.4rem",
              },
              maxWidth: 900,
            }}
          >
            {headlineWords.map((word, wi) => (
              <span key={wi} className={styles.headlineWord}>
                {word.text.split("").map((c, ci) => (
                  <span
                    key={ci}
                    data-char
                    className={`${styles.headlineChar} ${word.gradient ? styles.gradientText : ""}`}
                    style={word.muted ? { color: "#5a7090" } : undefined}
                  >
                    {c}
                  </span>
                ))}
              </span>
            ))}
          </Typography>

          <Typography
            ref={subRef}
            sx={{
              mt: 3,
              maxWidth: 620,
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.08rem", md: "1.15rem" },
              lineHeight: 1.65,
            }}
            data-cursor="text"
          >
            Datasynex partners with startups, SaaS teams and AI builders to ship
            production-grade data systems &mdash; secure cloud architecture, automation-first
            pipelines and observability from day one.
          </Typography>

          <Stack
            ref={ctaRef}
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ mt: 4.5 }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/contact-us"
              data-cursor="hover"
              data-cursor-label="Let's talk"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 3.5,
                py: 1.4,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 999,
                color: "common.white",
                background: "linear-gradient(135deg, #1a6fff, #38bdf8)",
                boxShadow: "0 12px 32px rgba(26, 111, 255, 0.35), inset 0 0 0 1px rgba(255,255,255,0.18)",
                transition: "transform 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 280ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 40px rgba(26, 111, 255, 0.45), inset 0 0 0 1px rgba(255,255,255,0.22)",
                },
              }}
            >
              {isUltraSmall ? "Let's Talk" : "Book a free Stratigic call"}
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/services"
              data-cursor="hover"
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 3.5,
                py: 1.4,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 999,
                color: "primary.main",
                borderColor: "rgba(26, 111, 255, 0.32)",
                borderWidth: 1.5,
                backgroundColor: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
                transition: "all 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "primary.main",
                  backgroundColor: "rgba(26, 111, 255, 0.06)",
                },
              }}
            >
              Explore Services
            </Button>
          </Stack>

          <Stack
            ref={trustRef}
            direction="row"
            gap={1}
            sx={{
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            {visibleTrust.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.6,
                  py: 0.7,
                  borderRadius: 999,
                  border: "1px solid rgba(26, 111, 255, 0.16)",
                  backgroundColor: "rgba(255,255,255,0.62)",
                  backdropFilter: "blur(8px)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "text.secondary",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  fontFamily: "var(--font-jetbrains), monospace",
                  letterSpacing: "0.04em",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a6fff, #38bdf8)",
                  }}
                />
                {item}
              </Box>
            ))}
          </Stack>

          {/* <Box
            ref={statsRef}
            sx={{
              mt: 6,
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
              gap: { xs: 1.5, sm: 2 },
              maxWidth: 620,
            }}
          >
            {stats.map((s) => (
              <Box key={s.label} className={styles.statCard} data-cursor="hover">
                <Typography component="div" className={styles.statValue}>
                  {s.value}
                </Typography>
                <Typography component="div" className={styles.statLabel}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box> */}
        </Box>
      </Container>

      <div className={styles.scrollIndicator} aria-hidden>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </Box>
  );
}
