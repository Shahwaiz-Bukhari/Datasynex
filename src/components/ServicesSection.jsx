"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

/* --------------------------------- Icons --------------------------------- */

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PipelineIcon = (p) => (
  <svg {...iconProps} {...p}>
    <rect x="2" y="4" width="6" height="6" rx="1.2" />
    <rect x="2" y="14" width="6" height="6" rx="1.2" />
    <rect x="16" y="9" width="6" height="6" rx="1.2" />
    <path d="M8 7h4a2 2 0 0 1 2 2v3" />
    <path d="M8 17h4a2 2 0 0 0 2-2v-3" />
  </svg>
);

const WarehouseIcon = (p) => (
  <svg {...iconProps} {...p}>
    <ellipse cx="12" cy="5" rx="8" ry="2.6" />
    <path d="M4 5v6c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6V5" />
    <path d="M4 11v6c0 1.4 3.6 2.6 8 2.6s8-1.2 8-2.6v-6" />
  </svg>
);

const CloudMigrateIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M7 18a4 4 0 0 1-.6-7.95 6 6 0 0 1 11.6.95A4 4 0 0 1 17 18" />
    <path d="M12 11v6" />
    <path d="m9.5 13.5 2.5-2.5 2.5 2.5" />
  </svg>
);

const AutomationIcon = (p) => (
  <svg {...iconProps} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="M4.93 4.93l2.12 2.12" />
    <path d="M16.95 16.95l2.12 2.12" />
    <path d="M2 12h3" />
    <path d="M19 12h3" />
    <path d="M4.93 19.07l2.12-2.12" />
    <path d="M16.95 7.05l2.12-2.12" />
  </svg>
);

const IaCIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
    <path d="m14 4-4 16" />
  </svg>
);

const SecurityIcon = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/* --------------------------------- Data --------------------------------- */

const services = [
  {
    title: "ETL Pipeline Development",
    text: "Scalable, fault-tolerant ETL/ELT workflows engineered for high-throughput production environments — built on Airflow, dbt and Spark.",
    Icon: PipelineIcon,
    tag: "Data Engineering",
  },
  {
    title: "Data Lake & Warehouse Architecture",
    text: "Lakehouse and warehouse foundations on Snowflake, Databricks and BigQuery — designed for governance, speed and analytical flexibility.",
    Icon: WarehouseIcon,
    tag: "Platform",
  },
  {
    title: "Cloud Migration & Optimization",
    text: "Secure transitions to AWS, Azure and GCP with right-sized architecture and FinOps guardrails — typical savings of 30–50% on cloud spend.",
    Icon: CloudMigrateIcon,
    tag: "Cloud",
  },
  {
    title: "Workflow Automation & Orchestration",
    text: "Automated pipelines and orchestrated jobs with SLAs, retries and observability — so data operations stay consistent and on-time.",
    Icon: AutomationIcon,
    tag: "Automation",
  },
  {
    title: "Infrastructure as Code",
    text: "Versioned, reproducible cloud environments using Terraform and Kubernetes — dependable scale with zero snowflake servers.",
    Icon: IaCIcon,
    tag: "DevOps",
  },
  {
    title: "Cloud Security & Compliance",
    text: "Security-first controls across identity, networking, monitoring and audit — aligned with SOC 2, ISO 27001 and GDPR from day one.",
    Icon: SecurityIcon,
    tag: "Security",
  },
];

/* ------------------------------- Component ------------------------------- */

export default function ServicesSection() {
  return (
    <Box
      id="services"
      component="section"
      sx={{
        py: { xs: 10, md: 13 },
        backgroundColor: "custom.surface",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background accents */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 520,
          height: 520,
          top: -180,
          left: -160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(26,111,255,0.10) 0%, rgba(26,111,255,0) 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 460,
          height: 460,
          bottom: -160,
          right: -140,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.10) 0%, rgba(56,189,248,0) 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "primary.main",
              mb: 2,
              px: 1.5,
              py: 0.6,
              borderRadius: 999,
              border: "1px solid",
              borderColor: "rgba(26,111,255,0.2)",
              backgroundColor: "rgba(26,111,255,0.06)",
            }}
          >
            What we do
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "text.primary",
            }}
          >
            Engineering the{" "}
            <Box
              component="span"
              sx={{
                background: "var(--gradient)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              data backbone
            </Box>{" "}
            of modern businesses
          </Typography>
          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.05rem" },
              lineHeight: 1.7,
              maxWidth: 620,
              mx: "auto",
            }}
          >
            From ingestion to insight — production-grade data platforms,
            cloud architecture and automation, delivered by senior engineers.
          </Typography>
        </Box>

        {/* Cards grid */}
        <Grid container spacing={3} alignItems="stretch">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <Grid
                size={{ xs: 12, sm: 6, lg: 4 }}
                key={service.title}
                sx={{ display: "flex" }}
              >
                <MotionBox
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: 300,
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: 4,
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow:
                      "0 18px 40px rgba(10, 22, 40, 0.08), 0 4px 12px rgba(26, 111, 255, 0.06)",
                    transition:
                      "transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "primary.main",
                      boxShadow:
                        "0 30px 60px rgba(10, 22, 40, 0.14), 0 10px 24px rgba(26, 111, 255, 0.18)",
                    },
                    "&:hover .service-icon": {
                      background: "var(--gradient)",
                      color: "#fff",
                      borderColor: "transparent",
                      transform: "rotate(-4deg) scale(1.05)",
                    },
                    "&:hover .service-arrow": {
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {/* Top row: icon + tag */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        display: "grid",
                        placeItems: "center",
                        color: "primary.main",
                        backgroundColor: "rgba(26,111,255,0.08)",
                        border: "1px solid",
                        borderColor: "rgba(26,111,255,0.18)",
                        transition:
                          "background 280ms ease, color 280ms ease, transform 280ms ease, border-color 280ms ease",
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "0.66rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "text.secondary",
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 999,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      {service.tag}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      letterSpacing: "-0.015em",
                      mb: 1.2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      flexGrow: 1,
                    }}
                  >
                    {service.text}
                  </Typography>

                  {/* Footer link */}
                  {/* <Box
                    sx={{
                      mt: 2.5,
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      color: "primary.main",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                    }}
                  >
                    Learn more
                    <Box
                      component="span"
                      className="service-arrow"
                      sx={{
                        display: "inline-block",
                        transition: "transform 220ms ease",
                      }}
                    >
                      →
                    </Box> 
                  </Box> */}
                </MotionBox>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
