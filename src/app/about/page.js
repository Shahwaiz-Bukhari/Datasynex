import Link from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "About | Datasynex",
  description:
    "Datasynex is a UK-headquartered global data engineering and cloud solutions company helping modern teams build scalable, secure infrastructure.",
};

// const stats = [
//   { value: "60+", label: "Production deployments" },
//   { value: "2.4 PB", label: "Data migrated to lakehouse" },
//   { value: "12", label: "Countries served" },
//   { value: "99.95%", label: "Average uptime SLO" },
// ];

const principles = [
  { title: "Engineering, not consulting", text: "We write production code, run incident reviews, and own outcomes — not just write reports." },
  { title: "Pragmatic over fashionable", text: "We pick proven technologies that match your scale and team. Boring is good when it ships." },
  { title: "Cost is a feature", text: "FinOps guardrails are baked in from day one. Typical clients see 30–50% cloud cost reduction." },
  { title: "Knowledge transfer always", text: "We document, pair-program and train your team. By the time we leave, you own everything." },
];

// const timeline = [
//   { year: "2019", title: "Founded in London", text: "Started as a two-person consultancy serving fintech startups." },
//   { year: "2021", title: "Series-grade clients", text: "Scaled team to 14 engineers; first AWS Premier engagement delivered." },
//   { year: "2023", title: "Global delivery", text: "Opened delivery hubs in Lisbon and Toronto to support 24/7 clients." },
//   { year: "2025", title: "Lakehouse practice", text: "Launched dedicated lakehouse, streaming and ML-platform practices." },
// ];

// const team = [
//   { name: "Asha Patel", role: "Co-founder & Principal Architect", initials: "AP" },
//   { name: "Ben Whitfield", role: "Co-founder & Head of Delivery", initials: "BW" },
//   { name: "Carla Mendes", role: "VP Data Engineering", initials: "CM" },
//   { name: "David Owusu", role: "Head of Cloud Security", initials: "DO" },
//   { name: "Elena Rossi", role: "Director, ML Platform", initials: "ER" },
//   { name: "Fatima Al-Sayed", role: "Lead Solutions Architect", initials: "FA" },
// ];

export default function AboutPage() {
  return (
    <PageShell>
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "custom.surface", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 0%, rgba(26,111,255,0.10), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(56,189,248,0.10), transparent 50%)", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains), monospace" }}>— About Datasynex</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.6rem" }, maxWidth: 880, mt: 1.5, lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
            We build the data foundations that ambitious companies grow on.
          </Typography>
          <Typography sx={{ mt: 3, color: "text.secondary", maxWidth: 760, fontSize: "1.1rem", lineHeight: 1.65 }}>
            Datasynex is a UK-headquartered data engineering and cloud solutions company. Since 2019 we have helped 60+ startups, scale-ups and enterprises ship production-grade systems — combining hands-on engineering with the discipline of senior architects who have done it before.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap", gap: { xs: 0, md: 2 } }}>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>Talk to a Principal</Button>
            <Button href="/services" variant="outlined" sx={{ px: 3.5, py: 1.4 }}>View our services</Button>
          </Stack>
        </Container>
      </Box>

      {/* <Box sx={{ py: { xs: 6, md: 7 }, backgroundColor: "background.default", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {stats.map((s) => (
              <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                <Typography sx={{ fontFamily: "var(--font-syne), sans-serif", fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 700, background: "var(--gradient)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", letterSpacing: "-0.02em" }}>{s.value}</Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.5, fontSize: "0.9rem" }}>{s.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>OUR MISSION</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
                Make great data engineering accessible to every serious team.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Most companies don&apos;t fail because they lack data — they fail because their data systems can&apos;t keep up. We exist to fix that. We bring senior cloud architects and data engineers directly into your team, ship measurable outcomes in weeks not quarters, and leave behind documentation, runbooks and trained engineers so your team owns the platform long after we&apos;re gone.
              </Typography>
              <Typography sx={{ mt: 2, color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.7 }}>
                Whether you&apos;re a Series A startup standing up your first warehouse or an enterprise migrating petabytes off legacy stacks, our approach is the same: pragmatic engineering, transparent communication, and a relentless focus on what actually moves your business forward.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>HOW WE WORK</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
            Four principles that guide every engagement
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {principles.map((p, i) => (
              <Grid key={p.title} size={{ xs: 12, sm: 6 }}>
                <Box sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", transition: "all .3s ease", "&:hover": { borderColor: "primary.main", transform: "translateY(-4px)", boxShadow: "0 14px 30px rgba(26,111,255,0.12)" } }}>
                  {/* <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.78rem", color: "primary.main", letterSpacing: "0.12em" }}>{`0${i + 1}.`}</Typography> */}
                  <Typography variant="h6" sx={{ mt: 1.5, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{p.title}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.65 }}>{p.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>OUR JOURNEY</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
            From a two-person consultancy to a global delivery team
          </Typography>
          <Grid container spacing={3} sx={{ mt: 4 }}>
            {timeline.map((t) => (
              <Grid key={t.year} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: "var(--gradient)" } }}>
                  <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.85rem", letterSpacing: "0.12em" }}>{t.year}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>{t.title}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.55 }}>{t.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>LEADERSHIP</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>
            People who&apos;ve shipped at scale
          </Typography>
          <Typography sx={{ mt: 2, color: "text.secondary", maxWidth: 720 }}>
            Our leadership brings collective experience from AWS, Google Cloud, Snowflake, Stripe and Monzo — and they still write code every week.
          </Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {team.map((m) => (
              <Grid key={m.name} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", display: "flex", gap: 2, alignItems: "center", transition: "all .3s ease", "&:hover": { borderColor: "primary.main", transform: "translateY(-3px)" } }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: "50%", background: "var(--gradient)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{m.initials}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>{m.name}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.88rem" }}>{m.role}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Box sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, background: "linear-gradient(135deg, rgba(26,111,255,0.08), rgba(56,189,248,0.05))", border: "1px solid", borderColor: "divider", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.2rem" }, fontFamily: "var(--font-syne), sans-serif", fontWeight: 700 }}>
                Want to see what we&apos;d build for you?
              </Typography>
              <Typography sx={{ mt: 1.5, color: "text.secondary", maxWidth: 540 }}>
                Book a free 30-minute architecture review. We&apos;ll sketch a roadmap and tell you honestly if we&apos;re the right fit.
              </Typography>
            </Box>
            <Button href="/contact-us" variant="contained" sx={{ background: "var(--gradient)", color: "#fff", px: 3.5, py: 1.4 }}>
              Book Architecture Review
            </Button>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
}
