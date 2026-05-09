// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const MotionBox = motion.create(Box);

// const cards = [
//   {
//     title: "Data Pipelines",
//     text: "Designing resilient ETL pipelines that ingest, transform, and move data at scale with full observability.",
//   },
//   {
//     title: "Cloud Infrastructure",
//     text: "Building secure cloud foundations optimized for reliability, governance, and long-term growth.",
//   },
//   {
//     title: "Actionable Insights",
//     text: "Structuring data warehouses and analytics workflows that make decision intelligence faster and clearer.",
//   },
// ];

// export default function IntroSection() {
//   return (
//     <Box id="about" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface", position: "relative" }}>
//       <Container maxWidth="xl">
//         <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 5, lg: 6 }}>
//           <Box sx={{ flex: 1, maxWidth: 630 }}>
//             <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
//               Modern Data Engineering for Growing Businesses
//             </Typography>
//             <Typography sx={{ mt: 2.4, color: "text.secondary", maxWidth: 560 }}>
//               From first architecture decisions to enterprise-ready platforms, Datasynex delivers practical engineering for teams that need dependable data systems without unnecessary complexity.
//             </Typography>
//             <Button
//               variant="contained"
//               component={Link}
//               href="/contact-us"
//               sx={{
//                 mt: 3,
//                 color: "common.white",
//                 background: "var(--gradient)",
//                 boxShadow: "0 8px 24px rgba(56,189,248,0.3)",
//               }}
//             >
//               Speak to a Data Architect
//             </Button>
//           </Box>

//           <Stack spacing={2} sx={{ flex: 1 }}>
//             <Box
//               sx={{
//                 borderRadius: 3,
//                 overflow: "hidden",
//                 border: "1px solid",
//                 borderColor: "divider",
//                 boxShadow: 1,
//               }}
//             >
//               <Image
//                 src="/images/architecture.jpeg"
//                 alt="Cloud infrastructure illustration"
//                 width={1200}
//                 height={900}
//                 style={{ width: "100%", height: "auto", display: "block" }}
//               />
//             </Box>
//             {cards.map((card, index) => (
//               <MotionBox
//                 key={card.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
//                 sx={{
//                   p: { xs: 2.25, md: 2.8 },
//                   borderRadius: 3,
//                   backgroundColor: "rgba(255,255,255,0.7)",
//                   backdropFilter: "blur(8px)",
//                   border: "1px solid",
//                   borderColor: "divider",
//                   boxShadow: 1,
//                   position: "relative",
//                   overflow: "hidden",
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     right: 0,
//                     top: 0,
//                     height: "3px",
//                     background: "var(--gradient)",
//                   },
//                 }}
//               >
//                 <Typography variant="h6" sx={{ color: "text.primary" }}>
//                   {card.title}
//                 </Typography>
//                 <Typography sx={{ mt: 1, color: "text.secondary" }}>{card.text}</Typography>
//               </MotionBox>
//             ))}
//           </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const cards = [
  {
    title: "Data Pipelines",
    text: "Designing resilient ETL pipelines that ingest, transform, and move data at scale with full observability.",
  },
  {
    title: "Cloud Infrastructure",
    text: "Building secure cloud foundations optimized for reliability, governance, and long-term growth.",
  },
  {
    title: "Actionable Insights",
    text: "Structuring data warehouses and analytics workflows that make decision intelligence faster and clearer.",
  },
];

export default function IntroSection() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface", position: "relative" }}>
      <Container maxWidth="xl">
        {/* Top row: text on left, image on right */}
        <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 5, lg: 6 }} alignitems="center">
          <Box sx={{ flex: 1, maxWidth: 630 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
              Modern Data Engineering for Growing Businesses
            </Typography>
            <Typography sx={{ mt: 2.4, color: "text.secondary", maxWidth: 560 }}>
              From first architecture decisions to enterprise-ready platforms, Datasynex delivers practical engineering for teams that need dependable data systems without unnecessary complexity.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/contact-us"
              sx={{
                mt: 3,
                color: "common.white",
                background: "var(--gradient)",
                boxShadow: "0 8px 24px rgba(56,189,248,0.3)",
              }}
            >
              Speak to a Data Architect
            </Button>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: 1,
              }}
            >
              <Image
                src="/images/architecture.jpeg"
                alt="Cloud infrastructure illustration"
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          </Box>
        </Stack>

        {/* Bottom row: cards in a single row */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mt: { xs: 5, md: 6 } }}
        >
          {cards.map((card, index) => (
            <MotionBox
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              sx={{
                flex: 1,
                p: { xs: 2.25, md: 2.8 },
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: 1,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: "3px",
                  background: "var(--gradient)",
                },
              }}
            >
              <Typography variant="h6" sx={{ color: "text.primary" }}>
                {card.title}
              </Typography>
              <Typography sx={{ mt: 1, color: "text.secondary" }}>{card.text}</Typography>
            </MotionBox>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}