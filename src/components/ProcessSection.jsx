"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const steps = [
  "Discovery & Consultation",
  "Architecture & Planning",
  "Development & Implementation",
  "Testing & Optimization",
  "Deployment & Support",
];

export default function ProcessSection() {
  return (
    <Box id="process" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
          Our Delivery Process
        </Typography>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, lg: 0 }}
          sx={{
            mt: 4,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: { xs: 0, lg: 24 },
              left: { xs: 19, lg: "4%" },
              right: { xs: "auto", lg: "4%" },
              width: { xs: 2, lg: "auto" },
              bottom: { xs: 0, lg: "auto" },
              height: { xs: "100%", lg: 2 },
              background: "linear-gradient(135deg, rgba(26,111,255,0.18), rgba(56,189,248,0.4))",
            },
          }}
        >
          {steps.map((step, index) => (
            <MotionBox
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              sx={{
                flex: 1,
                position: "relative",
                pl: { xs: 6, lg: 0 },
                pr: { xs: 0, lg: 1.5 },
                py: { xs: 0.8, lg: 0 },
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  color: "common.white",
                  fontWeight: 700,
                  fontFamily: "var(--font-jetbrains), monospace",
                  background: "var(--gradient)",
                  boxShadow: "0 8px 20px rgba(26,111,255,0.28)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {index + 1}
              </Box>
              <Typography sx={{ mt: 1.5, color: "text.primary", fontWeight: 600, maxWidth: 210 }}>{step}</Typography>
            </MotionBox>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
