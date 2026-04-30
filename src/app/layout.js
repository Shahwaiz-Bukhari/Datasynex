import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
