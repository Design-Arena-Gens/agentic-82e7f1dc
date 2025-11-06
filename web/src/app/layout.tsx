import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic AI ITSM ? Autonomous Service Management",
  description:
    "Promotional experience for an agentic AI ITSM: autonomous triage, diagnosis, remediation, and verification across your stack.",
  metadataBase: new URL("https://agentic-82e7f1dc.vercel.app"),
  openGraph: {
    title: "Agentic AI ITSM",
    description:
      "Resolve tickets before they escalate. Delight users with autonomous service.",
    url: "https://agentic-82e7f1dc.vercel.app",
    siteName: "Agentic AI ITSM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI ITSM",
    description:
      "Resolve tickets before they escalate. Delight users with autonomous service.",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
