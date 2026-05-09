"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Position pill indicator under hover/active
  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const nav = navRef.current;
    if (!indicator || !nav) return;

    const activeIndex = navItems.findIndex((i) => i.href === pathname);
    const idx = hoverIndex !== null ? hoverIndex : activeIndex;
    const target = idx >= 0 ? itemRefs.current[idx] : null;

    if (!target) {
      indicator.style.opacity = "0";
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const r = target.getBoundingClientRect();
    indicator.style.transform = `translateX(${r.left - navRect.left}px)`;
    indicator.style.width = `${r.width}px`;
    indicator.style.opacity = "1";
  }, [hoverIndex, pathname]);

  return (
    <>
      <header
        className={`${styles.shell} ${scrolled ? styles.scrolled : ""}`}
        data-cursor="hover"
      >
        <Link href="/" className={styles.brand} data-cursor="hover" data-cursor-label="Home">
          <span className={styles.brandMark}>Dx</span>
          Data<span>synex</span>
        </Link>

        <nav
          className={styles.nav}
          ref={navRef}
          onMouseLeave={() => setHoverIndex(null)}
          aria-label="Primary"
        >
          <span ref={indicatorRef} className={styles.navIndicator} aria-hidden />
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => (itemRefs.current[i] = el)}
                onMouseEnter={() => setHoverIndex(i)}
                className={`${styles.navItem} ${active ? styles.active : ""}`}
                data-cursor="hover"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          className={styles.cta}
          data-cursor="hover"
          data-cursor-label="Let's talk"
        >
          Get Started
          <span className={styles.ctaArrow}>→</span>
        </Link>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.open : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          data-cursor="hover"
        >
          <span className={styles.burgerInner}>
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </span>
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawerBackdrop} ${open ? styles.open : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <span className={styles.brandMark}>Dx</span>
            Data<span>synex</span>
          </Link>
          <button
            type="button"
            className={styles.drawerClose}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className={styles.drawerNav} aria-label="Mobile">
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${styles.drawerLink} ${active ? styles.active : ""}`}
                style={{
                  transitionDelay: open ? `${0.15 + i * 0.05}s` : "0s",
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "transform, opacity, color, padding-left",
                  transitionDuration: "0.55s",
                  transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
                }}
              >
                <span>{item.label}</span>
                <span className={styles.drawerLinkArrow}>→</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          onClick={() => setOpen(false)}
          className={styles.drawerCta}
          style={{
            transition: "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease, box-shadow 0.3s ease",
            transitionDelay: open ? "0.45s" : "0s",
            transform: open ? "translateY(0)" : "translateY(20px)",
            opacity: open ? 1 : 0,
          }}
        >
          Book a Strategy Call
        </Link>

        <div className={styles.drawerFooter}>
          <span>England, UK · Global Delivery</span>
          <a href="mailto:hello@datasynex.com">hello@datasynex.com</a>
        </div>
      </aside>
    </>
  );
}
