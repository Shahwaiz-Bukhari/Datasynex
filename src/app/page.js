"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CTASection from "../components/CTASection";
import HeroSection from "../components/HeroSection";
import IndustriesSection from "../components/IndustriesSection";
import IntroSection from "../components/IntroSection";
import LogoMarqueeSection from "../components/LogoMarqueeSection";
import PageShell from "../components/PageShell";
import Preloader from "../components/Preloader";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import TechStackSection from "../components/TechStackSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseSection from "../components/WhyChooseSection";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPreloader(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isVisible={showPreloader} />

      <PageShell>
        <Box>
          <HeroSection />
          <LogoMarqueeSection />
          <IntroSection />
          <WhyChooseSection />
          <ServicesSection />
          {/* <TechStackSection /> */}
          {/* <IndustriesSection /> */}
          <ProcessSection />
          {/* <TestimonialsSection /> */}
          <CTASection />
        </Box>
      </PageShell>
    </>
  );
}
