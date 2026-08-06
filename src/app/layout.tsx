import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LazySection from "@/components/LazySection";
import Footer from "@/components/Footer";
import FloatingCTAGroup from "@/components/FloatingCTAGroup";
import BackToTopButton from "@/components/BackToTopButton";
import Script from "next/script";

const poppins = Poppins({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Best Interior Designer in Jharsuguda, India | Interiocore",
  description: "Jharsuguda's trusted interior designer — modular kitchens, wardrobes & full home interiors. 45+ homes designed. Free consultation today.",
  metadataBase: new URL("https://interiocore.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://interiocore.com",
  },
  keywords: [
    "Best Interior Designer in Jharsuguda, India",
    "Best Interior Designer in Jharsuguda",
    "Interior Design Company Jharsuguda",
    "Modular Kitchen Design Jharsuguda",
    "Wardrobe Design Jharsuguda",
    "TV Unit Design Jharsuguda",
    "Living Room Interior Design Jharsuguda",
    "Bedroom Interior Design Jharsuguda",
    "Full Home Interior Designer Jharsuguda",
    "Odisha Luxury Interior Design"
  ],
  openGraph: {
    title: "Best Interior Designer in Jharsuguda, India | Interiocore",
    description: "Interiocore is Jharsuguda's trusted interior design studio for modular kitchens, wardrobes, and full home interiors. 45+ homes designed. Free consultation — call or WhatsApp today.",
    url: "https://interiocore.com",
    siteName: "Interiocore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/living%20room/living_room%20(1).webp",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer in Jharsuguda India - Interiocore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer in Jharsuguda, India | Interiocore",
    description: "Interiocore is Jharsuguda's trusted interior design studio for modular kitchens, wardrobes, and full home interiors. 45+ homes designed. Free consultation — call or WhatsApp today.",
    images: ["/images/living%20room/living_room%20(1).webp"],
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
        "@type": "WebSite",
        "@id": "https://interiocore.com/#website",
        "name": "Interiocore",
        "url": "https://interiocore.com",
        "description": "Best interior designer in Jharsuguda, India. Premium modular kitchens, luxury wardrobes, TV units, and complete home interiors."
      },
      {
        "@type": "Organization",
        "@id": "https://interiocore.com/#organization",
        "name": "Interiocore",
        "url": "https://interiocore.com",
        "logo": "https://interiocore.com/images/logo/logo.svg",
        "sameAs": [
          "https://www.instagram.com/interiocore/"
        ]
      },
      {
        "@type": "InteriorDesigner",
        "@id": "https://interiocore.com/#localbusiness",
        "name": "Interiocore",
        "image": "https://interiocore.com/images/living%20room/living_room%20(1).webp",
        "url": "https://interiocore.com",
        "telephone": "+919776991699",
        "priceRange": "₹₹₹",
        "areaServed": [
          "Jharsuguda",
          "Brajarajnagar",
          "Sambalpur"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Jharsuguda",
          "addressRegion": "Odisha",
          "postalCode": "768201",
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
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://interiocore.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the best interior designer in Jharsuguda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Interiocore is widely recognized as a top-rated interior design studio in Jharsuguda, Odisha. We specialize in luxury modular kitchens, bespoke wardrobes, living room designs, and full home turnkey interiors with over 45+ completed projects."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a modular kitchen cost in Jharsuguda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Modular kitchen prices in Jharsuguda at Interiocore start from ₹1.5 Lakh onwards depending on layout, material selection (laminates, acrylic, veneer), hardware options, and space dimensions. We offer free design consultations and transparent pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide interior design services outside Jharsuguda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, in addition to Jharsuguda town, Interiocore serves surrounding regions across Odisha including Brajarajnagar, Sambalpur, and neighboring cities."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a full home interior project take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical full home interior project takes between 30 to 45 days from 3D design approval to factory fabrication and final site installation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a free consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Interiocore offers 100% free initial design consultations via phone, WhatsApp (+91 97769 91699), or in-person at our studio in Jharsuguda."
            }
          }
        ]
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G2JDNJW92K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G2JDNJW92K');
          `}
        </Script>
      </head>
      <body 
        className={`${poppins.className} min-h-full flex flex-col bg-background text-foreground font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <LazySection height="350px">
          <Footer />
        </LazySection>
        <FloatingCTAGroup />
        <BackToTopButton />
      </body>
    </html>
  );
}


