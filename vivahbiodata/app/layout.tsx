import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VivahBio - Create Marriage Biodata in 3 Minutes",
  description: "Professional PDF formats designed for WhatsApp sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Lucide React icons are imported as components, no stylesheet needed */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}