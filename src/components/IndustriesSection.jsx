"use client";

import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const industries = [
  "SaaS Platforms",
  "AI & Machine Learning Companies",
  "FinTech Startups",
  "E-commerce Businesses",
  "Data-Driven Technology Companies",
];

export default function IndustriesSection() {
  return (
    <Box id="industries" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surfaceElevated" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
          Industries We Serve
        </Typography>

        <Box
          sx={{
            mt: 3,
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 1,
          }}
        >
          <Image
            src="/images/about-cloud.svg"
            alt="Industries and cloud solutions"
            width={1200}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>

        <Grid container spacing={2.4} sx={{ mt: 2 }}>
          {industries.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item}>
              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                sx={{
                  p: 2.7,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  boxShadow: 1,
                  minHeight: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 220ms ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(255,255,255,0))",
                    opacity: 0,
                    transition: "opacity 220ms ease",
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                  },
                  "&:hover::before": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    color: "primary.main",
                    fontFamily: "var(--font-jetbrains), monospace",
                    mb: 1.8,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="h6" sx={{ color: "text.primary", position: "relative", zIndex: 1 }}>
                  {item}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
