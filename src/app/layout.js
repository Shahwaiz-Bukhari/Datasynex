import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Datasynex | Big Data & Cloud Engineering Experts",
  description:
    "Datasynex is a UK-headquartered global data engineering and cloud solutions company helping startups and scaling teams build secure, scalable data infrastructure.",
  openGraph: {
    title: "Datasynex | Big Data & Cloud Engineering Experts",
    description:
      "Scalable ETL pipelines, cloud architecture, data platforms, and automation for modern technology teams.",
    type: "website",
    locale: "en_GB",
    siteName: "Datasynex",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
