import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: {
    default: "Best Ayurvedic Gynecologist in Raebareli | Dr. Salama Hanif | We Care Medical Zone",
    template: "%s | We Care Medical Zone",
  },
  description:
    "Consult Dr. Salama Hanif, experienced Ayurvedic Gynecologist & Obstetrician in Raebareli at We Care Medical Zone for PCOD, infertility, pregnancy care and women's health treatments.",
  keywords:
    "ayurvedic gynecologist raebareli, Dr Salama Hanif, ayurvedic PCOD treatment, infertility, pregnancy care, women health, we care medical zone",
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
