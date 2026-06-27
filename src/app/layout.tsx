import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTAGroup from "@/components/FloatingCTAGroup";
import BackToTopButton from "@/components/BackToTopButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Interiocore | Premium Modular Kitchens & Luxury Interiors",
  description: "Experience luxurious, minimal, and elegant interior designs by Interiocore. Custom modular kitchens, luxury wardrobes, TV units, and bespoke vanity designs.",
  metadataBase: new URL("https://interiocore.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Luxury Interior Design",
    "Premium Modular Kitchens",
    "Bespoke Wardrobes",
    "TV Units",
    "Bespoke Vanities",
    "Modern Living Room Designs",
    "Interior Studio Bhubaneswar",
    "Odisha Luxury Design",
    "High-end Home Renovations"
  ],
  openGraph: {
    title: "Interiocore | Premium Modular Kitchens & Luxury Interiors",
    description: "Experience luxurious, minimal, and elegant interior designs by Interiocore. Custom modular kitchens, luxury wardrobes, TV units, and bespoke vanity designs.",
    url: "https://interiocore.com",
    siteName: "Interiocore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/living room/living_room (1).webp",
        width: 1200,
        height: 630,
        alt: "Interiocore Luxury Living Room Interior Design Layout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interiocore | Premium Modular Kitchens & Luxury Interiors",
    description: "Experience luxurious, minimal, and elegant interior designs by Interiocore. Custom modular kitchens, luxury wardrobes, TV units, and bespoke vanity designs.",
    images: ["/images/living room/living_room (1).webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://interiocore.com/#organization",
        "name": "Interiocore",
        "url": "https://interiocore.com",
        "logo": "https://interiocore.com/images/logo/logo.svg"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://interiocore.com/#localbusiness",
        "name": "Interiocore",
        "image": "https://interiocore.com/images/living_room/living_room (1).webp",
        "url": "https://interiocore.com",
        "telephone": "+919776991699",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Studio Lounge",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "postalCode": "751024",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "20.296059",
          "longitude": "85.824540"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingCTAGroup />
        <BackToTopButton />
      </body>
    </html>
  );
}

