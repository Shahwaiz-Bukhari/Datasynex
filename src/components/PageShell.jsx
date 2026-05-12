import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ pt: { xs: "80px", md: "92px" } }}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
