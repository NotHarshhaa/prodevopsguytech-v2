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
  Command,
  ChevronDown,
  Cloud,
  Building2,
  Ship,
  Layers,
  Mountain
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { CommandMenu } from './CommandMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [showTechDropdown, setShowTechDropdown] = useState(false);
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

  const technologies = [
    { 
      href: "/technologies/aws", 
      label: "AWS",
      icon: Cloud,
      description: "Amazon Web Services",
      color: "orange"
    },
    { 
      href: "/technologies/azure", 
      label: "Azure",
      icon: Building2,
      description: "Microsoft Azure",
      color: "blue"
    },
    { 
      href: "/technologies/docker", 
      label: "Docker",
      icon: Ship,
      description: "Container Platform",
      color: "blue"
    },
    { 
      href: "/technologies/kubernetes", 
      label: "Kubernetes",
      icon: Layers,
      description: "Container Orchestration",
      color: "blue"
    },
    { 
      href: "/technologies/terraform", 
      label: "Terraform",
      icon: Mountain,
      description: "Infrastructure as Code",
      color: "purple"
    }
  ];

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
      <div className="container px-3 sm:px-8 relative">
        <div className={cn(
          "flex items-center justify-between lg:justify-center rounded-full border border-border/20 px-3 sm:px-6 lg:px-32 xl:px-36 2xl:px-40 transition-all duration-500 ease-out",
          scrolled ? "py-2 sm:py-2.5" : "py-2.5 sm:py-3.5",
          "bg-background/70 backdrop-blur-xl shadow-2xl shadow-black/5",
          "hover:shadow-2xl hover:shadow-black/10",
          "max-w-9xl mx-auto"
        )}>
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative group">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                </div>
                <span className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  ProDevOpsGuy<span className="text-primary">Tech</span>
                </span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
            
          {/* Center - Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className={cn(
                  "px-2.5 py-2 text-sm font-medium rounded-full relative group transition-all duration-200 ease-out",
                  pathname === item.href 
                    ? "text-foreground bg-primary/15 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium tracking-wide">{item.label}</span>
                  {item.isExternal && (
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  )}
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/15 text-primary border border-primary/20">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Technologies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowTechDropdown(true)}
              onMouseLeave={() => setShowTechDropdown(false)}
            >
              <button
                className={cn(
                  "px-2.5 py-2 text-sm font-medium rounded-full relative group transition-all duration-200 ease-out flex items-center gap-2",
                  "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                )}
              >
                <span className="font-medium tracking-wide">Technologies</span>
                <ChevronDown className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  showTechDropdown ? "rotate-180" : "rotate-0"
                )} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {showTechDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/20 shadow-2xl shadow-black/10 overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
                        Popular Technologies
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {technologies.map((tech, index) => (
                          <motion.div
                            key={tech.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={tech.href}
                              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-background/80 transition-all duration-200"
                            >
                              <div className={cn(
                                "flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200",
                                tech.color === "orange" && "bg-orange-500/15 group-hover:bg-orange-500/25",
                                tech.color === "blue" && "bg-blue-500/15 group-hover:bg-blue-500/25",
                                tech.color === "purple" && "bg-purple-500/15 group-hover:bg-purple-500/25"
                              )}>
                                <tech.icon className={cn(
                                  "h-4 w-4 transition-colors duration-200",
                                  tech.color === "orange" && "text-orange-500",
                                  tech.color === "blue" && "text-blue-500",
                                  tech.color === "purple" && "text-purple-500"
                                )} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm group-hover:text-foreground transition-colors duration-200">
                                  {tech.label}
                                </div>
                                <div className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
                                  {tech.description}
                                </div>
                              </div>
                              <ArrowRight className="h-3 w-3 text-muted-foreground/50 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all duration-200" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side actions - now inside the header pill */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
            {/* Command Menu */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden xl:inline-flex items-center gap-1 text-muted-foreground hover:text-foreground rounded-full border-border/20 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 group px-2 py-1.5"
              onClick={() => setShowCommandMenu(true)}
            >
              <Command className="h-3 w-3 transition-transform group-hover:scale-110" />
              <span className="text-[10px] font-medium tracking-wide">Quick nav</span>
              <kbd className="hidden 2xl:inline-flex h-3 select-none items-center gap-0.5 rounded border border-border/30 bg-muted/60 px-1 font-mono text-[8px] font-medium">
                <span className="text-[8px]">⌘</span>K
              </kbd>
            </Button>

            {/* Command Menu Component */}
            <CommandMenu 
              open={showCommandMenu} 
              onOpenChange={setShowCommandMenu}
            />

            <Link href="/get-started" className="hidden sm:inline-flex">
              <Button size="sm" className="relative group rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 ease-out border-0 px-3 py-1.5">
                <span className="relative z-10 flex items-center gap-1 font-medium text-xs">
                  Get Started
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
          
            {/* Dark/Light Mode Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="relative group rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 ease-out h-8 w-8"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="h-4 w-4 relative transition-transform group-hover:rotate-12" />
              ) : (
                <MoonIcon className="h-4 w-4 relative transition-transform group-hover:-rotate-12" />
              )}
            </Button>
          
            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative group rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 ease-out h-8 w-8"
                >
                  <Menu className="h-4 w-4 relative" />
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
                          
                          {/* Technologies Section */}
                          <div className="mt-6">
                            <div className="px-3 mb-3">
                              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Technologies
                              </div>
                            </div>
                            <div className="grid gap-1">
                              {technologies.map((tech, i) => (
                                <motion.div
                                  key={tech.label}
                                  custom={i + navItems.length}
                                  variants={menuItemVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                >
                                  <Link
                                    href={tech.href}
                                    className={cn(
                                      "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                                      pathname === tech.href 
                                        ? "bg-primary/10 text-foreground" 
                                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                                    )}
                                  >
                                    <div className={cn(
                                      "flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200",
                                      tech.color === "orange" && "bg-orange-500/15 group-hover:bg-orange-500/25",
                                      tech.color === "blue" && "bg-blue-500/15 group-hover:bg-blue-500/25",
                                      tech.color === "purple" && "bg-purple-500/15 group-hover:bg-purple-500/25"
                                    )}>
                                      <tech.icon className={cn(
                                        "h-4 w-4 transition-colors duration-200",
                                        tech.color === "orange" && "text-orange-500",
                                        tech.color === "blue" && "text-blue-500",
                                        tech.color === "purple" && "text-purple-500"
                                      )} />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-sm">
                                        {tech.label}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {tech.description}
                                      </div>
                                    </div>
                                    <ArrowRight className="h-3 w-3 text-muted-foreground/50 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all duration-200" />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
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