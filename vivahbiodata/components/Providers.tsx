// components/Providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useState, useEffect } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}