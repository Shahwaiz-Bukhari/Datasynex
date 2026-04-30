import Link from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Industries | Datasynex",
  description: "Industries Datasynex serves: SaaS, fintech, e-commerce, AI/ML, healthtech, logistics and more.",
};

const industries = [
  {
    name: "SaaS Platforms",
    icon: "◆",
    text: "Multi-tenant data isolation, usage analytics, and self-serve customer reporting at scale.",
    wins: ["Per-tenant data lakes", "Real-time usage metering", "Embedded analytics SDKs"],
  },
  {
    name: "FinTech & Lending",
    icon: "₿",
    text: "Regulated, audit-ready pipelines for transactions, risk modelling and reporting.",
    wins: ["PCI-DSS aligned", "Real-time fraud signals", "Reg-reporting automation"],
  },
  {
    name: "AI & ML Companies",
    icon: "✦",
    text: "Feature stores, training pipelines and model-serving infrastructure that actually scales.",
    wins: ["Feature store on Feast", "Vector DBs at scale", "GPU cluster orchestration"],
  },
  {
    name: "E-commerce",
    icon: "▶",
    text: "Customer 360, cohort analytics, recommendation pipelines and inventory intelligence.",
    wins: ["Customer 360 unified", "Real-time recommendations", "Demand-forecast pipelines"],
  },
  {
    name: "Healthtech",
    icon: "+",
    text: "HIPAA-compliant data platforms with patient-grade privacy and clinical-grade reliability.",
    wins: ["HIPAA-ready architectures", "FHIR / HL7 ingestion", "PHI tokenisation"],
  },
  {
    name: "Logistics & Supply Chain",
    icon: "⊞",
    text: "Real-time tracking, route optimisation and supplier-network analytics.",
    wins: ["Stream processing on Flink", "Geo-spatial pipelines", "Optimisation models"],
  },
  {
    name: "Media & Streaming",
    icon: "◐",
    text: "High-cardinality engagement analytics, content recommendation and ad-tech pipelines.",
    wins: ["Sub-second engagement metrics", "Content recsys", "Identity graph build-out"],
  },
  {
    name: "Climate & Energy",
    icon: "◯",
    text: "Sensor and IoT pipelines, carbon-accounting platforms, grid-optimisation modelling.",
    wins: ["IoT ingestion at scale", "Carbon ledger systems", "Time-series optimisation"],
  },
];

const cases = [
  { client: "Lendora", sector: "FinTech", outcome: "73% pipeline runtime reduction; passed SOC 2 Type II in 90 days." },
  { client: "Northwind", sector: "Logistics", outcome: "Migrated 2.4 PB to Iceberg lakehouse with zero customer-facing downtime." },
  { client: "Klarisma AI", sector: "AI / ML", outcome: "Feature store + training platform; ML team ships 2× faster." },
  { client: "Brightlane", sector: "E-commerce", outcome: "$480k/year saved on Snowflake; query P95 dropped 4×." },
];

export default function IndustriesPage() {
  return (
    <PageShell>
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "custom.surfaceElevated", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12), transparent 50%)", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains), monospace" }}>— Industries</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.6rem" }, maxWidth: 920, mt: 1.5, lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
            Eight sectors. One disciplined approach to data.
          </Typography>
          <Typography sx={{ mt: 3, color: "text.secondary", maxWidth: 760, fontSize: "1.1rem", lineHeight: 1.65 }}>
            We adapt architecture, automation and governance to the pace, compliance needs and product maturity of each sector — but our standards for production quality stay the same.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Discuss Your Sector</Button>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {industries.map((ind, i) => (
              <Grid key={ind.name} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Box sx={{ p: 3.5, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", position: "relative", overflow: "hidden", transition: "all .3s ease", "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)", boxShadow: "0 14px 30px rgba(26,111,255,0.12)" } }}>
                  <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, alignItems: "center" }}>
                    <Box sx={{ width: 42, height: 42, borderRadius: 2, background: "var(--gradient)", display: "grid", placeItems: "center", color: "#fff", fontSize: "1.2rem", fontWeight: 700 }}>{ind.icon}</Box>
                    <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "text.secondary", fontSize: "0.72rem", letterSpacing: "0.14em" }}>{`SECTOR 0${i + 1}`}</Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{ind.name}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.55 }}>{ind.text}</Typography>
                  <Box component="ul" sx={{ mt: 2, pl: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0.8 }}>
                    {ind.wins.map((w) => (
                      <Box component="li" key={w} sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary", fontSize: "0.86rem" }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gradient)" }} />
                        {w}
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
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>SELECTED OUTCOMES</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
            What &ldquo;done well&rdquo; looks like in production
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {cases.map((c, i) => (
              <Grid key={c.client} size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", display: "flex", gap: 3, alignItems: "flex-start" }}>
                  <Box sx={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "2.4rem", fontWeight: 700, background: "var(--gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", lineHeight: 1, minWidth: 70 }}>0{i + 1}</Box>
                  <Box>
                    <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.74rem", letterSpacing: "0.12em" }}>{c.sector}</Typography>
                    <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{c.client}</Typography>
                    <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.6 }}>{c.outcome}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, background: "linear-gradient(135deg, rgba(26,111,255,0.08), rgba(56,189,248,0.05))", border: "1px solid", borderColor: "divider", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontFamily: "var(--font-syne), sans-serif", fontWeight: 700 }}>Sector not listed?</Typography>
              <Typography sx={{ mt: 1.5, color: "text.secondary", maxWidth: 540 }}>The patterns travel. We&apos;ve worked across regulated, real-time and high-volume domains. Tell us what you&apos;re building.</Typography>
            </Box>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Get in Touch</Button>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
}
