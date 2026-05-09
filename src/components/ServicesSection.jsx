// "use client";

// import Image from "next/image";
// import { Box, Container, Grid, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const MotionBox = motion.create(Box);

// const services = [
//   {
//     title: "ETL Pipeline Development",
//     text: "Scalable and reliable ETL workflows engineered for high-throughput production environments.",
//   },
//   {
//     title: "Data Lake & Data Warehouse Architecture",
//     text: "Structured foundations for analytics-ready data with governance, speed, and flexibility in mind.",
//   },
//   {
//     title: "Cloud Migration & Optimization",
//     text: "Secure cloud transitions and architecture tuning to improve performance and reduce operational waste.",
//   },
//   {
//     title: "Workflow Automation & Orchestration",
//     text: "Automated pipelines and orchestrated jobs that keep data operations consistent and efficient.",
//   },
//   {
//     title: "Infrastructure as Code",
//     text: "Versioned, reproducible cloud environments using modern IaC practices for dependable scale.",
//   },
//   {
//     title: "Cloud Security Best Practices",
//     text: "Security-first controls for identity, networking, monitoring, and compliance across your stack.",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <Box id="services" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
//       <Container maxWidth="xl">
//         <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
//           Our Core Services
//         </Typography>

//         <Box
//           sx={{
//             mt: 3,
//             borderRadius: 3,
//             overflow: "hidden",
//             border: "1px solid",
//             borderColor: "divider",
//             boxShadow: 1,
//           }}
//         >
//           <Image
//             src="/images/services-architecture.svg"
//             alt="Data service architecture overview"
//             width={1200}
//             height={900}
//             style={{ width: "100%", height: "auto", display: "block" }}
//           />
//         </Box>

//         <Grid container spacing={2.4} sx={{ mt: 2 }}>
//           {services.map((service, index) => (
//             <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.title}>
//               <MotionBox
//                 initial={{ opacity: 0, y: 26 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.52, delay: index * 0.08, ease: "easeOut" }}
//                 sx={{
//                   p: 2.7,
//                   borderRadius: 3,
//                   backgroundColor: "background.paper",
//                   border: "1px solid",
//                   borderColor: "divider",
//                   boxShadow: 1,
//                   minHeight: "100%",
//                   position: "relative",
//                   overflow: "hidden",
//                   transition: "all 220ms ease",
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: "3px",
//                     background: "var(--gradient)",
//                   },
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     borderColor: "primary.main",
//                     boxShadow: "0 14px 30px rgba(26,111,255,0.16)",
//                   },
//                 }}
//               >
//                 <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
//                   {service.title}
//                 </Typography>
//                 <Typography sx={{ color: "text.secondary" }}>{service.text}</Typography>
//               </MotionBox>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

"use client";

import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const services = [
  {
    title: "ETL Pipeline Development",
    text: "Scalable and reliable ETL workflows engineered for high-throughput production environments.",
    image: "/images/etl-pipeline.png",
  },
  {
    title: "Data Lake & Data Warehouse Architecture",
    text: "Structured foundations for analytics-ready data with governance, speed, and flexibility in mind.",
    image: "/images/data-warehouse.png",
  },
  {
    title: "Cloud Migration & Optimization",
    text: "Secure cloud transitions and architecture tuning to improve performance and reduce operational waste.",
    image: "/images/cloud-migration.png",
  },
  {
    title: "Workflow Automation & Orchestration",
    text: "Automated pipelines and orchestrated jobs that keep data operations consistent and efficient.",
    image: "/images/workflow-automation.png",
  },
  {
    title: "Infrastructure as Code",
    text: "Versioned, reproducible cloud environments using modern IaC practices for dependable scale.",
    image: "/images/infrastructure-as-code.png",
  },
  {
    title: "Cloud Security Best Practices",
    text: "Security-first controls for identity, networking, monitoring, and compliance across your stack.",
    image: "/images/cloud-security.png",
  },
];

export default function ServicesSection() {
  return (
    <Box id="services" component="section" sx={{ py: { xs: 9, md: 11 }, backgroundColor: "custom.surface" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, color: "text.primary" }}>
          Our Core Services
        </Typography>

        <Grid container spacing={2.4} sx={{ mt: 2 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.title}>
              <MotionBox
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.08, ease: "easeOut" }}
                sx={{
                  borderRadius: 3,
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: 1,
                  minHeight: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 220ms ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "var(--gradient)",
                    zIndex: 1,
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    boxShadow: "0 14px 30px rgba(26,111,255,0.16)",
                  },
                }}
              >
                {/* Card image */}
                <Box sx={{ overflow: "hidden", lineHeight: 0 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={340}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                {/* Card content */}
                <Box sx={{ p: 2.7 }}>
                  <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>{service.text}</Typography>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}