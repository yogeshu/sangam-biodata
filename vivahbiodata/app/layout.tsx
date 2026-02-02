import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "sangam-biodata - Create Marriage Biodata in 3 Minutes",
  description: "Professional PDF formats designed for WhatsApp sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lucide React icons are imported as components, no stylesheet needed */}
      </head>
      <body className="antialiased bg-background-light dark:bg-background-dark text-text-main transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
       
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}