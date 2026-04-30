"use client";

import Image from "next/image";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const groups = [
  {
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Data Engineering",
    items: ["PySpark", "Apache Airflow", "AWS Glue", "Snowflake"],
  },
  {
    title: "Programming",
    items: ["Python", "SQL", "Spark"],
  },
  {
    title: "Infrastructure",
    items: ["Terraform", "Docker", "CI/CD Pipelines"],
  },
];

export default function TechStackSection() {
  return (
    <Box id="technology" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(26,111,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
          Modern Cloud & Data Technologies
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
            src="/images/technology-network.svg"
            alt="Cloud and data technology network"
            width={1200}
            height={900}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>

        <Grid container spacing={2.4} sx={{ mt: 2 }}>
          {groups.map((group, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={group.title}>
              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                sx={{
                  p: 2.7,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(8px)",
                  boxShadow: 1,
                  minHeight: "100%",
                }}
              >
                <Typography variant="h6" sx={{ color: "primary.main", mb: 1.8 }}>
                  {group.title}
                </Typography>
                <Stack direction="row" gap={1} sx={{ flexWrap: "wrap" }}>
                  {group.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        color: "primary.main",
                        backgroundColor: "background.paper",
                        transition: "all 200ms ease",
                        "&:hover": {
                          boxShadow: "0 8px 20px rgba(56,189,248,0.2)",
                          borderColor: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Stack>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
