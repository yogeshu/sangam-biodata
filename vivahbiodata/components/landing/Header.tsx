// components/landing/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Heart, Sun, Moon, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure hydration matches (wait for client mount to show theme toggle state)
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { label: "Templates", href: "/templates" },
    { label: "Samples", href: "/samples" },
    { label: "About", href: "/#about" }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-full border-b border-solid border-border-soft bg-white dark:bg-background-dark sticky top-0 z-50 transition-colors duration-300 shadow-sm">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-4 py-3 md:px-8">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition">
            <div className="size-9 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart size={20} fill="currentColor" />
            </div>
            <h2 className="text-text-main text-xl font-bold leading-tight tracking-tight dark:text-gray-100">
              VivahBio
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle (Desktop) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-gray-100 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* User Profile Placeholder */}
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-100 transition-colors">
              <User size={20} />
            </button>

            <Link 
              href="/templates"
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-all text-white text-sm font-bold leading-normal shadow-md hover:shadow-lg"
            >
              Create Biodata
            </Link>
          </div>

          {/* Mobile Controls (Toggle + Menu) */}
          <div className="flex md:hidden items-center gap-4">
            {/* Dark Mode Toggle (Mobile) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-gray-100 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Mobile Menu Icon */}
            <button 
              onClick={toggleMenu}
              className="text-text-main dark:text-gray-100 p-1"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-border-soft shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`py-2 border-b border-border-soft/50 dark:border-gray-800 last:border-0 ${
                isActive(item.href)
                  ? "text-primary font-semibold text-base"
                  : "text-text-main dark:text-gray-200 hover:text-primary text-base font-medium"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/templates"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full mt-2 cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all"
          >
            Create Biodata
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;