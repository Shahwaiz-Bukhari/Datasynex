import Link from "next/link";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Services | Datasynex",
  description: "Datasynex services: ETL pipelines, data lakehouse, cloud migration, automation, IaC and security — engineered for scale.",
};

const services = [
  {
    code: "01",
    title: "ETL Pipeline Development",
    text: "Production-grade ingestion and transformation pipelines for batch and streaming workloads. Built on Airflow, dbt, Spark and Flink with full observability.",
    points: ["Stream + batch unified", "dbt-native modelling", "SLA-backed pipelines", "Lineage & data quality"],
  },
  {
    code: "02",
    title: "Data Lake & Warehouse Architecture",
    text: "Modern lakehouse foundations on Snowflake, BigQuery, Databricks and Iceberg. Governance, partitioning and cost controls baked in.",
    points: ["Lakehouse on Iceberg / Delta", "Medallion architecture", "Cost-tier partitioning", "Catalog & access control"],
  },
  {
    code: "03",
    title: "Cloud Migration & Optimization",
    text: "Move off legacy stacks with zero downtime. Right-size compute, eliminate idle spend, and harden for compliance.",
    points: ["Lift-shift-improve roadmaps", "FinOps guardrails", "Zero-downtime cutovers", "30–50% cost reduction typical"],
  },
  {
    code: "04",
    title: "Workflow Automation & Orchestration",
    text: "Self-healing pipelines with Airflow, Dagster, Prefect or Step Functions. SLAs, alerting, replay and backfill all wired in.",
    points: ["Airflow / Dagster / Prefect", "Idempotent operators", "SLA breach alerts", "Replay & backfill UX"],
  },
  {
    code: "05",
    title: "Infrastructure as Code",
    text: "Versioned, reproducible cloud environments with Terraform and Pulumi. Modules tested, policies enforced, drift detected.",
    points: ["Terraform / Pulumi", "Policy as code (OPA)", "Drift detection", "Multi-env promotion"],
  },
  {
    code: "06",
    title: "Cloud Security & Compliance",
    text: "SOC 2, GDPR, HIPAA and ISO 27001 ready. Identity, encryption, network segmentation and audit logging done right.",
    points: ["Zero-trust IAM", "Encryption everywhere", "SOC 2 / GDPR ready", "Continuous audit logging"],
  },
];

const engagement = [
  { title: "Architecture Sprint", duration: "1–2 weeks", text: "Audit your current stack, identify the highest-leverage 3 fixes, deliver a roadmap." },
  { title: "Build & Ship", duration: "6–12 weeks", text: "Embedded squad delivers a production system end-to-end with hand-off documentation." },
  { title: "Embedded Team", duration: "Ongoing", text: "Senior engineers join your team long-term to scale the platform alongside you." },
];

const pricing = [
  { name: "Sprint", price: "from £8k", desc: "Architecture audit + roadmap", features: ["1–2 week engagement", "Async + 3 live workshops", "Written roadmap deliverable", "30-day Q&A follow-up"] },
  { name: "Project", price: "from £45k", desc: "End-to-end production build", features: ["6–12 week delivery", "2–3 senior engineers", "Full code + docs handover", "30-day post-launch support"], popular: true },
  { name: "Embedded", price: "from £18k/mo", desc: "Senior engineers in your team", features: ["Long-term partnership", "Flexible team composition", "Quarterly architecture review", "Direct Slack access"] },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "custom.surface", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 0% 0%, rgba(26,111,255,0.10), transparent 50%)", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains), monospace" }}>— Services</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.6rem" }, maxWidth: 920, mt: 1.5, lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
            Six core services. Built for teams who actually have to ship.
          </Typography>
          <Typography sx={{ mt: 3, color: "text.secondary", maxWidth: 760, fontSize: "1.1rem", lineHeight: 1.65 }}>
            Each service is delivered by senior engineers with deep production experience. No junior body-shopping, no slide-deck consulting — real systems, shipped to real users.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Start a Project</Button>
            <Button href="/technology" variant="outlined" sx={{ px: 3.5, py: 1.4 }}>See our stack</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid key={s.title} size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: { xs: 3.5, md: 4.5 }, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", position: "relative", overflow: "hidden", transition: "all .3s ease", "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)", boxShadow: "0 18px 40px rgba(26,111,255,0.12)" }, "&::before": { content: '""', position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "var(--gradient)" } }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 1, alignItems: "center" }}>
                    <Box sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.85rem", letterSpacing: "0.16em" }}>{s.code}</Box>
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}>{s.title}</Typography>
                  <Typography sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.7 }}>{s.text}</Typography>
                  <Box component="ul" sx={{ mt: 2.5, pl: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.2 }}>
                    {s.points.map((p) => (
                      <Box component="li" key={p} sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary", fontSize: "0.92rem" }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gradient)" }} />
                        {p}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>HOW WE ENGAGE</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>Three ways to work with us</Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {engagement.map((e, i) => (
              <Grid key={e.title} size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%" }}>
                  <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.78rem", letterSpacing: "0.12em" }}>{`STEP 0${i + 1}`}</Typography>
                  <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{e.title}</Typography>
                  <Chip label={e.duration} size="small" sx={{ mt: 1, background: "var(--gradient)", color: "#fff", fontWeight: 600 }} />
                  <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.65 }}>{e.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>PRICING</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
            Transparent, outcome-based pricing
          </Typography>
          <Typography sx={{ mt: 2, color: "text.secondary", maxWidth: 720 }}>
            Fixed fee, time-and-materials, or retainer. We&apos;ll recommend the model that gets you the outcome at lowest cost.
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {pricing.map((p) => (
              <Grid key={p.name} size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: p.popular ? "primary.main" : "divider", backgroundColor: "background.paper", height: "100%", position: "relative", boxShadow: p.popular ? "0 18px 40px rgba(26,111,255,0.18)" : 1 }}>
                  {p.popular && <Chip label="MOST POPULAR" size="small" sx={{ position: "absolute", top: -12, left: 24, background: "var(--gradient)", color: "#fff", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.12em" }} />}
                  <Typography sx={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>{p.name}</Typography>
                  <Typography sx={{ mt: 0.5, color: "text.secondary", fontSize: "0.92rem" }}>{p.desc}</Typography>
                  <Typography sx={{ mt: 2, fontFamily: "var(--font-syne), sans-serif", fontSize: "2.2rem", fontWeight: 700, background: "var(--gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{p.price}</Typography>
                  <Box component="ul" sx={{ mt: 2.5, pl: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 1 }}>
                    {p.features.map((f) => (
                      <Box component="li" key={f} sx={{ display: "flex", alignItems: "center", gap: 1.2, color: "text.secondary", fontSize: "0.92rem" }}>
                        <Box sx={{ width: 16, height: 16, borderRadius: "50%", background: "var(--gradient)", color: "#fff", display: "grid", placeItems: "center", fontSize: "0.7rem", fontWeight: 700 }}>✓</Box>
                        {f}
                      </Box>
                    ))}
                  </Box>
                  <Button href="/contact-us" fullWidth variant={p.popular ? "contained" : "outlined"} sx={{ mt: 3, ...(p.popular && { background: "var(--gradient)", color: "#fff" }) }}>Get Started</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, background: "linear-gradient(135deg, rgba(26,111,255,0.08), rgba(56,189,248,0.05))", border: "1px solid", borderColor: "divider", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontFamily: "var(--font-syne), sans-serif", fontWeight: 700 }}>Not sure which service fits?</Typography>
              <Typography sx={{ mt: 1.5, color: "text.secondary", maxWidth: 540 }}>Tell us your situation. We&apos;ll recommend the smallest engagement that actually solves it.</Typography>
            </Box>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Talk to an Architect</Button>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
}
