import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Brand with Satyam – Video Editor & Creator",
    template: "%s | Brand with Satyam",
  },
  description:
    "Professional video editor and visual content creator with over 3 years of experience. Specializing in commercial campaigns, brand films, and documentary-style storytelling.",
  keywords: [
    "Satyam Sharma",
    "Video Editor",
    "Creator",
    "Visual Storyteller",
    "Commercial Video Editing",
    "Documentary Film Editor",
    "Wedding Video Editor",
    "Content Planning",
    "Brand Research",
  ],
  authors: [{ name: "Satyam Sharma", url: "https://brandwithsatyam.com" }],
  creator: "Satyam Sharma",
  publisher: "Satyam Sharma",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandwithsatyam.com",
    title: "Brand with Satyam – Video Editor & Creator",
    description:
      "Transforming raw footage into polished, purpose-driven content. Expert in video editing and end-to-end content strategy.",
    siteName: "Brand with Satyam",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Satyam Sharma - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand with Satyam – Video Editor & Creator",
    description:
      "Professional video editing and content strategy for brands and creators.",
    creator: "@satyam_sharma",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://brandwithsatyam.com",
  },
  category: "Video Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brand with Satyam",
              url: "https://brandwithsatyam.com",
              image: "/og-image.png",
              sameAs: [
                "https://brandwithsatyam.com",
                "https://linkedin.com/in/satyamsharma",
                "https://github.com/satyamsharma",
                "https://twitter.com/satyam_sharma",
              ],
              jobTitle: "Video Editor & Creator",
              knowsAbout: [
                "Video Editing",
                "Content Strategy",
                "Commercial Video Production",
                "Documentary Storytelling",
                "Brand Research",
                "Post-Production",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
