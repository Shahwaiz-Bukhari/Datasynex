import Link from "next/link";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Technology | Datasynex",
  description: "The cloud, data, ML and infrastructure technologies Datasynex uses to build dependable systems at scale.",
};

const groups = [
  {
    title: "Cloud Platforms",
    icon: "☁",
    items: ["AWS (Premier Tier)", "Google Cloud", "Microsoft Azure", "Cloudflare", "Vercel"],
    blurb: "Multi-cloud capable with deep expertise across the big three.",
  },
  {
    title: "Data Platforms",
    icon: "◇",
    items: ["Snowflake", "Databricks", "BigQuery", "Apache Iceberg", "Delta Lake"],
    blurb: "Modern lakehouse and warehouse architectures with open formats.",
  },
  {
    title: "Data Engineering",
    icon: "◈",
    items: ["Apache Spark", "Apache Flink", "Kafka", "Airflow", "Dagster", "dbt", "AWS Glue"],
    blurb: "Streaming + batch unified, with first-class observability.",
  },
  {
    title: "Programming",
    icon: "</>",
    items: ["Python", "TypeScript", "Scala", "SQL", "Rust"],
    blurb: "Fluent in the languages of modern data and platform engineering.",
  },
  {
    title: "Infrastructure",
    icon: "▲",
    items: ["Terraform", "Pulumi", "Kubernetes", "Docker", "ArgoCD", "GitHub Actions"],
    blurb: "Versioned infrastructure with policy-as-code and GitOps delivery.",
  },
  {
    title: "ML & AI",
    icon: "✦",
    items: ["MLflow", "Feast", "SageMaker", "Vertex AI", "LangChain", "Triton"],
    blurb: "From training pipelines to feature stores to LLM-powered apps.",
  },
  {
    title: "Observability",
    icon: "◉",
    items: ["Datadog", "Grafana", "Prometheus", "OpenTelemetry", "Sentry", "Monte Carlo"],
    blurb: "End-to-end visibility for systems and data quality.",
  },
  {
    title: "Security & Compliance",
    icon: "⌂",
    items: ["HashiCorp Vault", "Okta", "Auth0", "AWS IAM", "SOC 2", "GDPR", "HIPAA"],
    blurb: "Zero-trust foundations and audit-ready controls.",
  },
];

const principles = [
  { title: "Use boring tech where you can", text: "Postgres, Airflow, Terraform — proven, debuggable, hire-able." },
  { title: "Pick exciting tech where it pays", text: "Iceberg, Flink, Rust — when the problem genuinely needs them." },
  { title: "Open formats over lock-in", text: "Iceberg, Parquet, Delta — your data is yours, portable across vendors." },
  { title: "Observability is not optional", text: "Every system ships with metrics, traces, logs and data-quality checks." },
];

export default function TechnologyPage() {
  return (
    <PageShell>
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 100% 0%, rgba(56,189,248,0.10), transparent 50%)", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains), monospace" }}>— Technology Stack</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.6rem" }, maxWidth: 920, mt: 1.5, lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
            Battle-tested tooling. Pragmatic choices. Open by default.
          </Typography>
          <Typography sx={{ mt: 3, color: "text.secondary", maxWidth: 760, fontSize: "1.1rem", lineHeight: 1.65 }}>
            We invest deeply in a focused stack rather than dabbling in everything. Each technology below is something we run in production today, with engineers who&apos;ve hit the edge cases and lived to tell about them.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Discuss Your Stack</Button>
            <Button href="/services" variant="outlined" sx={{ px: 3.5, py: 1.4 }}>See services</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {groups.map((g) => (
              <Grid key={g.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ p: 3.5, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", transition: "all .3s ease", "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)", boxShadow: "0 14px 30px rgba(26,111,255,0.12)" } }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 2.5, background: "var(--gradient)", display: "grid", placeItems: "center", color: "#fff", fontSize: "1.4rem", fontWeight: 700, mb: 2 }}>{g.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{g.title}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.55 }}>{g.blurb}</Typography>
                  <Stack direction="row" gap={0.8} sx={{ mt: 2, flexWrap: "wrap" }}>
                    {g.items.map((item) => (
                      <Chip key={item} label={item} size="small" sx={{ border: "1px solid", borderColor: "divider", color: "primary.main", backgroundColor: "transparent", fontSize: "0.74rem" }} />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>HOW WE PICK TECH</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
                Four rules we keep coming back to
              </Typography>
              <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.7 }}>
                Tooling is a cost. We optimise for total cost of ownership over five years, not the hype cycle of next quarter.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={2.5}>
                {principles.map((p, i) => (
                  <Box key={p.title} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", display: "flex", gap: 3, alignItems: "flex-start" }}>
                    <Box sx={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "2rem", fontWeight: 700, background: "var(--gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: 1, minWidth: 60 }}>0{i + 1}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{p.title}</Typography>
                      <Typography sx={{ mt: 0.5, color: "text.secondary", lineHeight: 1.6 }}>{p.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, background: "linear-gradient(135deg, rgba(26,111,255,0.08), rgba(56,189,248,0.05))", border: "1px solid", borderColor: "divider", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontFamily: "var(--font-syne), sans-serif", fontWeight: 700 }}>Different stack? Still talk.</Typography>
              <Typography sx={{ mt: 1.5, color: "text.secondary", maxWidth: 540 }}>The list above is what we know best, but our principles travel. We&apos;ve shipped on Hadoop, Redshift, Hive and worse — we can meet you where you are.</Typography>
            </Box>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Discuss Your Stack</Button>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
}
