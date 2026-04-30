import { Box, Container, Grid, MenuItem, TextField, Typography, Stack, Button } from "@mui/material";
import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Contact Us | Datasynex",
  description: "Book a consultation with Datasynex for cloud architecture and data engineering services.",
};

const contacts = [
  { label: "EMAIL", value: "hello@datasynex.com", href: "mailto:hello@datasynex.com" },
  { label: "SALES", value: "sales@datasynex.com", href: "mailto:sales@datasynex.com" },
  { label: "PHONE (UK)", value: "+44 20 0000 0000", href: "tel:+442000000000" },
  { label: "RESPONSE TIME", value: "Within 4 business hours" },
];

const offices = [
  { city: "London", country: "United Kingdom", address: "12 Finsbury Square, EC2A 1AS", note: "HQ" },
  { city: "Lisbon", country: "Portugal", address: "Avenida da Liberdade 200, 1250-147" },
  { city: "Toronto", country: "Canada", address: "100 King St W, M5X 1C9" },
];

const faqs = [
  { q: "How quickly can you start?", a: "Architecture sprints typically start within 1–2 weeks. Build engagements within 3–4 weeks depending on team availability." },
  { q: "Do you sign NDAs?", a: "Yes, mutual NDAs are standard. We can use yours or ours — whichever moves faster." },
  { q: "Where is your team based?", a: "Senior engineers across the UK, Portugal, Canada and Singapore. We pick teams to match your timezones and compliance needs." },
  { q: "Can you work with our existing team?", a: "Absolutely — most engagements are embedded. We pair, code-review and document so your team grows with the platform." },
];

const projectTypes = ["Architecture audit", "ETL / data pipeline build", "Cloud migration", "Data warehouse / lakehouse", "ML platform", "Security & compliance", "Other"];
const budgets = ["< £25k", "£25k – £75k", "£75k – £200k", "£200k+", "Not sure yet"];

export default function ContactUsPage() {
  return (
    <PageShell>
      <Box sx={{ py: { xs: 9, md: 12 }, backgroundColor: "background.default", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 100% 0%, rgba(26,111,255,0.10), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(56,189,248,0.10), transparent 50%)", pointerEvents: "none" }} />
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains), monospace" }}>— Get in touch</Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, maxWidth: 640, mt: 1.5, lineHeight: 1.1, fontFamily: "var(--font-syne), sans-serif" }}>
                Tell us what you&apos;re building. We&apos;ll tell you how we&apos;d build it.
              </Typography>
              <Typography sx={{ mt: 3, color: "text.secondary", maxWidth: 560, fontSize: "1.05rem", lineHeight: 1.65 }}>
                Drop a few lines about your stack, scale and the problem you&apos;re trying to solve. A principal engineer will follow up within 4 business hours with a written response — not a sales pitch.
              </Typography>

              <Stack spacing={2.5} sx={{ mt: 5 }}>
                {contacts.map((c) => (
                  <Box key={c.label} sx={{ display: "flex", alignItems: "center", gap: 3, py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
                    <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.72rem", letterSpacing: "0.16em", color: "primary.main", minWidth: 130 }}>{c.label}</Typography>
                    {c.href ? (
                      <Typography component="a" href={c.href} sx={{ color: "text.primary", fontWeight: 600, textDecoration: "none", "&:hover": { color: "primary.main" } }}>{c.value}</Typography>
                    ) : (
                      <Typography sx={{ color: "text.primary", fontWeight: 600 }}>{c.value}</Typography>
                    )}
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box component="form" sx={{ p: { xs: 3, md: 4.5 }, borderRadius: 4, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", boxShadow: "0 30px 60px rgba(10,22,40,0.08)" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>Start a conversation</Typography>
                <Typography sx={{ mt: 1, color: "text.secondary", fontSize: "0.92rem" }}>Free 15-minute consultation. No obligation. We respond within 4 business hours.</Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Full Name" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Work Email" type="email" fullWidth required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Company" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField label="Role" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField select label="Project Type" fullWidth defaultValue="">
                      {projectTypes.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField select label="Budget" fullWidth defaultValue="">
                      {budgets.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label="Tell us about your project" multiline minRows={5} fullWidth />
                  </Grid>
                </Grid>

                <Button fullWidth sx={{ mt: 3, color: "common.white", background: "var(--gradient)", py: 1.5, fontWeight: 600, fontSize: "1rem" }}>
                  Submit Request →
                </Button>
                <Typography sx={{ mt: 2, color: "text.secondary", fontSize: "0.78rem", textAlign: "center" }}>
                  Your details stay confidential. We never share with third parties.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>OFFICES</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>Where we work from</Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {offices.map((o) => (
              <Grid key={o.city} size={{ xs: 12, md: 4 }}>
                <Box sx={{ p: 4, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%", position: "relative" }}>
                  {o.note && <Typography sx={{ position: "absolute", top: 16, right: 16, fontFamily: "var(--font-jetbrains), monospace", fontSize: "0.66rem", letterSpacing: "0.16em", color: "#fff", background: "var(--gradient)", px: 1.2, py: 0.4, borderRadius: 0.8 }}>{o.note}</Typography>}
                  <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.74rem", letterSpacing: "0.16em" }}>{o.country.toUpperCase()}</Typography>
                  <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{o.city}</Typography>
                  <Typography sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.6 }}>{o.address}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 9, md: 11 }, backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ color: "primary.main", letterSpacing: "0.18em" }}>FAQ</Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 1, fontFamily: "var(--font-syne), sans-serif" }}>Frequently asked</Typography>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {faqs.map((f, i) => (
              <Grid key={f.q} size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 3.5, borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper", height: "100%" }}>
                  <Typography sx={{ fontFamily: "var(--font-jetbrains), monospace", color: "primary.main", fontSize: "0.74rem", letterSpacing: "0.16em" }}>{`Q.0${i + 1}`}</Typography>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{f.q}</Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.65 }}>{f.a}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageShell>
  );
}
