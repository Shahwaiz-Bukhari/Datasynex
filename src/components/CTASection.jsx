"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

export default function CTASection() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 9, md: 11 },
        background: "var(--gradient)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(120deg, rgba(255,255,255,0.15) 0%, transparent 70%)",
          backgroundSize: "24px 24px, 100% 100%",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "anticipate" }}
          sx={{ textAlign: "center", color: "common.white" }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "common.white" }}>
            Let&apos;s Build Your Data Infrastructure Together
          </Typography>
          <Typography sx={{ mt: 2, mx: "auto", maxWidth: 760, color: "rgba(255,255,255,0.85)" }}>
            Whether you are modernizing an existing stack or launching from scratch, Datasynex partners with your team to design and deliver secure, scalable cloud and data systems.
          </Typography>
          <Button
            component={Link}
            href="/contact-us"
            sx={{
              mt: 3,
              color: "primary.main",
              backgroundColor: "common.white",
              boxShadow: "0 10px 28px rgba(10,22,40,0.2)",
              px: 3.6,
              py: 1.2,
              "&:hover": {
                backgroundColor: "custom.surface",
              },
            }}
          >
            Book Consultation
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
}
