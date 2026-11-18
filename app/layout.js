import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Salama Haneef | Gynecologist & Skin Expert in Raebareli",
    template: "%s | Dr. Salama Haneef",
  },
  description:
    "Consult Dr. Salama Haneef, BHU graduate, Gynecologist & Skin Expert in Raebareli for PCOD, infertility, pregnancy care, skin care and women's health treatments.",
  keywords:
    "gynecologist raebareli, Dr Salama Haneef, skin expert raebareli, PCOD treatment, infertility, pregnancy care, women health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <AppointmentModal />
        <ScrollReveal />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
