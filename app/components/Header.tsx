'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { 
  Menu, 
  SunIcon, 
  MoonIcon, 
  Code, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Info, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  X,
  Sparkles,
  Command
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { CommandMenu } from './CommandMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
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

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { 
      href: "https://projects.prodevopsguytech.com/", 
      label: "Projects",
      icon: Code,
      description: "Real-world DevOps projects and tutorials",
      isExternal: true,
      badge: "New"
    },
    { 
      href: "/resources", 
      label: "Resources",
      icon: BookOpen,
      description: "Comprehensive learning materials",
      isExternal: false
    },
    { 
      href: "/learning-paths", 
      label: "Learning Paths",
      icon: ArrowRight,
      description: "Structured paths to master DevOps",
      isExternal: false,
      badge: "Popular"
    },
    { 
      href: "/community", 
      label: "Community",
      icon: Users,
      description: "Join our growing tech community",
      isExternal: false
    },
    { 
      href: "/about", 
      label: "About",
      icon: Info,
      description: "Learn more about us",
      isExternal: false
    },
    { 
      href: "/contact", 
      label: "Contact",
      icon: Mail,
      description: "Get in touch with us",
      isExternal: false
    }
  ];

  const menuItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      }
    }),
    exit: { 
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      {/* Gradient line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-background/40 backdrop-blur-sm"
      )} />
      
      <div className="container px-4 sm:px-6 relative">
        <div className={cn(
          "flex items-center justify-between rounded-2xl border border-border/50 px-4 sm:px-6 transition-all duration-300",
          scrolled ? "py-2" : "py-3",
          "bg-background/50 backdrop-blur-sm"
        )}>
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                ProDevOpsGuy<span className="text-primary">Tech</span>
              </span>
            </div>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
            
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg relative group transition-all duration-300",
                  pathname === item.href 
                    ? "text-foreground bg-primary/10" 
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
              >
                <div className="flex items-center gap-2">
                  {item.label}
                  {item.isExternal && (
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  )}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Menu */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowCommandMenu(true)}
            >
              <Command className="h-4 w-4" />
              <span className="text-xs">Quick nav</span>
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Command Menu Component */}
            <CommandMenu 
              open={showCommandMenu} 
              onOpenChange={setShowCommandMenu}
            />

            <Link href="/get-started" className="hidden sm:inline-flex">
              <Button size="sm" className="relative group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </Button>
            </Link>
          
            {/* Dark/Light Mode Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="relative group"
              aria-label="Toggle theme"
            >
              <span className="absolute -inset-1 bg-primary/10 scale-0 group-hover:scale-100 rounded-lg transition-transform" />
              {isDark ? (
                <SunIcon className="h-5 w-5 relative transition-transform group-hover:rotate-90" />
              ) : (
                <MoonIcon className="h-5 w-5 relative transition-transform group-hover:-rotate-90" />
              )}
            </Button>
          
            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative group"
                >
                  <span className="absolute -inset-1 bg-primary/10 scale-0 group-hover:scale-100 rounded-lg transition-transform" />
                  <Menu className="h-5 w-5 relative" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] p-0 border-l border-border/30 backdrop-blur-xl bg-background/95"
                title="Navigation Menu"
                hideCloseButton
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-border/10">
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                        Navigation
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Explore our platform
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={toggleTheme}
                        className="relative group"
                      >
                        <span className="absolute -inset-1 bg-primary/10 scale-0 group-hover:scale-100 rounded-lg transition-transform" />
                        {isDark ? (
                          <SunIcon className="h-5 w-5 relative transition-transform group-hover:rotate-90" />
                        ) : (
                          <MoonIcon className="h-5 w-5 relative transition-transform group-hover:-rotate-90" />
                        )}
                      </Button>
                      <SheetClose asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="relative group"
                        >
                          <span className="absolute -inset-1 bg-destructive/10 scale-0 group-hover:scale-100 rounded-lg transition-transform" />
                          <X className="h-5 w-5 relative" />
                        </Button>
                      </SheetClose>
                    </div>
                  </div>

                  <nav className="flex-1 overflow-y-auto py-6">
                    <div className="px-3">
                      <AnimatePresence mode="wait">
                        <div className="grid gap-2">
                          {navItems.map((item, i) => (
                            <motion.div
                              key={item.label}
                              custom={i}
                              variants={menuItemVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-start gap-4 p-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                                  pathname === item.href 
                                    ? "bg-primary/10 text-foreground" 
                                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                                )}
                              >
                                <div className={cn(
                                  "p-2 rounded-md transition-colors",
                                  pathname === item.href
                                    ? "bg-primary/20 text-primary"
                                    : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                                )}>
                                  <item.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">{item.label}</span>
                                    {item.isExternal && (
                                      <ExternalLink className="h-4 w-4 opacity-50" />
                                    )}
                                    {item.badge && (
                                      <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                                <div className={cn(
                                  "w-1 self-stretch rounded-full transition-all duration-300",
                                  pathname === item.href
                                    ? "bg-primary scale-100"
                                    : "bg-primary/50 scale-y-0 group-hover:scale-y-100"
                                )} />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </AnimatePresence>
                    </div>
                  </nav>

                  <div className="p-6 border-t border-border/10">
                    <div className="grid gap-4">
                      <Link href="/get-started" className="block">
                        <Button className="w-full relative group overflow-hidden">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                      </Link>
                      <div className="text-center">
                        <Link 
                          href="https://t.me/prodevopsguy"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                        >
                          <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                          Join our Telegram
                        </Link>
                      </div>
                    </div>
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