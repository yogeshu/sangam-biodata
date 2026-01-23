import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

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
        {/* Load Fonts & Icons from Google */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}