"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Footer.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { label: "ETL Pipelines", href: "/services" },
  { label: "Data Warehousing", href: "/services" },
  { label: "Cloud Migration", href: "/services" },
  { label: "Workflow Automation", href: "/services" },
  { label: "Infrastructure as Code", href: "/services" },
  { label: "Cloud Security", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  // { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact-us" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.27 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V22H7.49V8z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.16c-3.34.72-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .3" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerRef = useRef(null);
  const bigTypeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bigTypeRef.current) {
        gsap.to(bigTypeRef.current, {
          xPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <span className={styles.gridLines} aria-hidden />
      <span className={`${styles.glowOrb} ${styles.glowOrb1}`} aria-hidden />
      <span className={`${styles.glowOrb} ${styles.glowOrb2}`} aria-hidden />

      <Container maxWidth="xl">
        {/* <div className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>
              Ready to scale your <span>data infrastructure</span>?
            </h2>
            <p className={styles.ctaSub}>
              Book a free 15-minute strategy call. We&apos;ll map your data ambitions to a
              clear, secure, and cost-aware cloud roadmap.
            </p>
          </div>
          <Link
            href="/contact-us"
            className={styles.ctaButton}
            data-cursor="hover"
            data-cursor-label="Let's talk"
          >
            Book a Call
            <span>→</span>
          </Link>
        </div> */}

        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLogo}>
              <span className={styles.brandMark}>Dx</span>
              Data<span>synex</span>
            </Link>
            <p className={styles.brandText}>
              Enterprise-grade data engineering and cloud solutions for teams that demand reliability,
              scale, and performance. Production-grade systems, built to last.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialBtn}
                  aria-label={s.label}
                  data-cursor="hover"
                  data-cursor-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.colList}>
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} data-cursor="hover">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Contact</div>
            <ul className={styles.colList}>
              <li>
                <span className={styles.contactLine}>
                  <strong>England, United Kingdom</strong>
                </span>
              </li>
              <li>
                <a href="mailto:hello@datasynex.com" data-cursor="hover">
                  hello@datasynex.com
                </a>
              </li>
              <li>
                <a href="tel:+442000000000" data-cursor="hover">
                  +44 20 0000 0000
                </a>
              </li>
              <li>
                <span className={styles.contactLine}>Available worldwide · Remote</span>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.colList}>
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} data-cursor="hover">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Datasynex. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link href="#" data-cursor="hover">Privacy</Link>
            <Link href="#" data-cursor="hover">Terms</Link>
            <Link href="#" data-cursor="hover">Cookies</Link>
          </div>
        </div>
      </Container>

      <div ref={bigTypeRef} className={styles.bigType} aria-hidden>
        Datasynex
      </div>
    </footer>
  );
}
