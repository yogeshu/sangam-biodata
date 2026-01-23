// components/landing/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Heart, Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="w-full border-b border-solid border-border-soft bg-background-light dark:bg-background-dark sticky top-0 z-50 transition-colors duration-300">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[960px] items-center justify-between px-4 py-3 md:px-10">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart size={18} />
            </div>
            <h2 className="text-text-main text-xl font-bold leading-tight tracking-[-0.015em] dark:text-gray-100">
              VivahBio
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-6">
              {["Templates", "Pricing", "About Us"].map((item) => (
                <a
                  key={item}
                  className="text-text-main dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark text-sm font-medium leading-normal transition-colors"
                  href="#"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle (Desktop) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-text-main dark:text-gray-100 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal">
              <span className="truncate">Create Biodata</span>
            </button>
          </div>

          {/* Mobile Controls (Toggle + Menu) */}
          <div className="flex md:hidden items-center gap-4">
            {/* Dark Mode Toggle (Mobile) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-text-main dark:text-gray-100 transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-border-soft shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {["Templates", "Pricing", "About Us"].map((item) => (
            <a
              key={item}
              className="text-text-main dark:text-gray-200 hover:text-primary text-base font-medium py-2 border-b border-border-soft/50 dark:border-gray-800 last:border-0"
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-2 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark text-white text-base font-bold">
            Create Biodata
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;