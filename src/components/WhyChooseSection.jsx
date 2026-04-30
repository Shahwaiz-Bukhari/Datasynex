"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const reasons = [
  {
    title: "UK-headquartered global operations",
    text: "London-based leadership with delivery hubs across Europe, North America and APAC keep your timezones covered around the clock.",
  },
  {
    title: "Hands-on cloud & data expertise",
    text: "Engineers with 10+ years across AWS, GCP and Azure who write production code, not just diagrams.",
  },
  {
    title: "Scalable, cost-efficient architecture",
    text: "Right-sized systems with FinOps guardrails baked in from day one — typical clients save 30–50% on cloud spend.",
  },
  {
    title: "Transparent communication",
    text: "Weekly demos, shared dashboards, and async-friendly written updates. No status black-boxes, ever.",
  },
  {
    title: "Reliable delivery cadence",
    text: "Two-week iterations with measurable outcomes. We commit to dates, share risks early, and ship.",
  },
  {
    title: "Flexible engagement models",
    text: "Embed, build-operate-transfer, or pure architecture review — we adapt to your team's stage and budget.",
  },
];

export default function WhyChooseSection() {
  return (
    <Box component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          width: 460,
          height: 460,
          right: -120,
          top: -140,
          borderRadius: "50%",
          backgroundColor: "custom.glow",
          filter: "blur(30px)",
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
          Why Choose Datasynex?
        </Typography>

        <Grid container spacing={2.4} sx={{ mt: 2 }}>
          {reasons.map((reason, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={reason.title}>
              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                sx={{
                  p: 2.7,
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: 1,
                  minHeight: 168,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    borderColor: "primary.main",
                    boxShadow: "0 14px 30px rgba(26,111,255,0.16)",
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
                    color: "primary.main",
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "custom.surface",
                    fontWeight: 700,
                    fontFamily: "var(--font-jetbrains), monospace",
                  }}
                >
                  {`0${index + 1}`}
                </Box>
                <Typography sx={{ mt: 2, color: "text.primary", fontWeight: 600, fontSize: "1.05rem" }}>{reason.title}</Typography>
                <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.55 }}>{reason.text}</Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
