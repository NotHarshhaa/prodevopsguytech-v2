'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "https://projects.prodevopsguytech.com/", label: "Projects" },
    { href: "/resources", label: "Resources" },
    { href: "/learning-paths", label: "Learning Paths" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background/40 backdrop-blur-sm"
      )} />
      
      <div className="container px-4 sm:px-6 relative">
        <div className={cn(
          "flex items-center justify-between rounded-full border border-border/50 px-4 sm:px-6 transition-all duration-300",
          scrolled ? "py-2" : "py-3",
          "bg-background/50 backdrop-blur-sm"
        )}>
          <Link href="/" className="text-lg sm:text-xl font-bold relative group whitespace-nowrap">
            ProDevOpsGuy<span className="text-primary">Tech</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
            
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className={cn(
                  "px-2 sm:px-3 py-2 text-sm font-medium rounded-md relative group transition-colors whitespace-nowrap",
                  pathname === item.href 
                    ? "text-foreground bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/get-started" className="hidden sm:inline-flex">
              <Button size="sm" className="relative overflow-hidden group whitespace-nowrap">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
              </Button>
            </Link>
          
            {/* Dark/Light Mode Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-primary/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-primary/5 transition-colors">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] p-0 border-l border-border/30 backdrop-blur-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center p-6 border-b border-border/10">
                    <span className="font-semibold">Menu</span>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-6">
                    <div className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href} 
                          className={cn(
                            "px-4 py-3 rounded-lg transition-all duration-200 relative group",
                            pathname === item.href 
                              ? "bg-primary/10 text-foreground" 
                              : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                          )}
                        >
                          <span className="font-medium">{item.label}</span>
                          <span className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 rounded-r-full bg-primary transition-all duration-200",
                            pathname === item.href ? "h-8" : "group-hover:h-8"
                          )}></span>
                        </Link>
                      ))}
                    </div>
                  </nav>
                  <div className="p-6 border-t border-border/10">
                    <Link href="/get-started" className="block">
                      <Button className="w-full relative overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 