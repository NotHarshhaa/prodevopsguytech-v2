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
  Info, 
  ArrowRight, 
  ExternalLink, 
  X,
  Command,
  ChevronDown,
  Cloud,
  Building2,
  Ship,
  Layers,
  Mountain,
  Terminal,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { CommandMenu } from './CommandMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCommandMenu, setShowCommandMenu] = useState(false);
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();

  // Close menus when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowTechDropdown(false);
  }, [pathname]);

  const technologies = [
    { 
      href: "/technologies/aws", 
      label: "AWS",
      icon: Cloud,
      description: "Cloud Architecture & EC2/S3/IAM",
      colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    { 
      href: "/technologies/azure", 
      label: "Azure",
      icon: Building2,
      description: "Enterprise Cloud & Azure DevOps",
      colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    { 
      href: "/technologies/docker", 
      label: "Docker",
      icon: Ship,
      description: "Containerization & Multi-stage Builds",
      colorClass: "text-sky-500 bg-sky-500/10 border-sky-500/20"
    },
    { 
      href: "/technologies/kubernetes", 
      label: "Kubernetes",
      icon: Layers,
      description: "Orchestration, Helm & GitOps",
      colorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
    },
    { 
      href: "/technologies/terraform", 
      label: "Terraform",
      icon: Mountain,
      description: "Infrastructure as Code & Modules",
      colorClass: "text-purple-500 bg-purple-500/10 border-purple-500/20"
    }
  ];

  const navItems = [
    { 
      href: "https://projects.prodevopsguytech.com/", 
      label: "Projects",
      icon: Code,
      isExternal: true,
      badge: "Hands-on"
    },
    { 
      href: "/learning-paths", 
      label: "Learning Paths",
      icon: Terminal,
      isExternal: false,
    },
    { 
      href: "/resources", 
      label: "Resources",
      icon: BookOpen,
      isExternal: false
    },
    { 
      href: "/community", 
      label: "Community",
      icon: Users,
      isExternal: false
    },
    { 
      href: "/about", 
      label: "About",
      icon: Info,
      isExternal: false
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-md transition-colors">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 shrink-0"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
            <Cpu className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold tracking-tight text-base sm:text-lg">
            <span className="text-foreground">ProDevOpsGuy</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Tech
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 flex items-center gap-1.5",
                  isActive 
                    ? "text-primary bg-primary/10 border border-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/70"
                )}
              >
                <span>{item.label}</span>
                {item.isExternal && (
                  <ExternalLink className="h-3 w-3 opacity-60" />
                )}
                {item.badge && (
                  <span className={cn(
                    "px-1.5 py-0.2 text-[9px] font-semibold uppercase tracking-wider rounded-full",
                    isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Technologies Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTechDropdown(true)}
            onMouseLeave={() => setShowTechDropdown(false)}
          >
            <button
              type="button"
              className={cn(
                "px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 flex items-center gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/70",
                showTechDropdown && "text-foreground bg-accent/70"
              )}
              aria-expanded={showTechDropdown}
              onClick={() => setShowTechDropdown(!showTechDropdown)}
            >
              <span>Technologies</span>
              <ChevronDown className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                showTechDropdown && "rotate-180 text-primary"
              )} />
            </button>

            {/* Dropdown Menu */}
            {showTechDropdown && (
              <div 
                className="absolute top-full left-0 mt-1 w-72 p-2 rounded-2xl bg-card border border-border/80 shadow-2xl shadow-black/20 z-50"
                onMouseEnter={() => setShowTechDropdown(true)}
                onMouseLeave={() => setShowTechDropdown(false)}
              >
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Core Toolchains
                </div>
                <div className="space-y-1 mt-1">
                  {technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <Link
                        key={tech.label}
                        href={tech.href}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-accent transition-colors group"
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
                          tech.colorClass
                        )}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                            {tech.label}
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            {tech.description}
                          </div>
                        </div>
                        <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Search Shortcut */}
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3 text-xs text-muted-foreground hover:text-foreground rounded-xl border-border/60 bg-card hover:bg-accent transition-all"
            onClick={() => setShowCommandMenu(true)}
          >
            <Command className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="hidden md:inline-flex h-4 px-1.5 items-center rounded border border-border/60 bg-muted text-[10px] font-mono text-muted-foreground">
              ⌘K
            </kbd>
          </Button>

          <CommandMenu 
            open={showCommandMenu} 
            onOpenChange={setShowCommandMenu}
          />

          {/* Dark / Light Theme Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            className="h-9 w-9 rounded-xl border border-border/60 bg-card hover:bg-accent flex items-center justify-center text-foreground transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
            title={mounted ? (isDark ? "Switch to Light Mode" : "Switch to Dark Mode") : "Toggle theme"}
          >
            {mounted ? (
              isDark ? (
                <SunIcon className="h-4 w-4 text-amber-400 transition-transform rotate-0 scale-100" />
              ) : (
                <MoonIcon className="h-4 w-4 text-indigo-600 transition-transform rotate-0 scale-100" />
              )
            ) : (
              <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            )}
          </button>

          {/* Primary CTA */}
          <Link 
            href="https://projects.prodevopsguytech.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button 
              size="sm" 
              className="h-9 px-4 text-xs font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 transition-all hover:shadow-lg"
            >
              <span>Deploy Projects</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-9 w-9 rounded-xl border-border/60 bg-card hover:bg-accent"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[310px] sm:w-[360px] p-0 border-l border-border bg-card shadow-2xl"
              title="Navigation Menu"
              hideCloseButton
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm">
                      ProDevOpsGuy<span className="text-primary">Tech</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleTheme();
                      }}
                      className="h-8 w-8 rounded-lg border border-border/60 bg-background flex items-center justify-center text-foreground"
                      aria-label="Toggle theme"
                    >
                      {mounted && isDark ? (
                        <SunIcon className="h-4 w-4 text-amber-400" />
                      ) : (
                        <MoonIcon className="h-4 w-4 text-indigo-600" />
                      )}
                    </button>
                    <SheetClose asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-lg"
                        aria-label="Close menu"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Navigation
                    </div>
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          className={cn(
                            "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                            isActive 
                              ? "bg-primary text-primary-foreground" 
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className={cn(
                              "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                              isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                            )}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="space-y-1 pt-2 border-t border-border/40">
                    <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </div>
                    {technologies.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <Link
                          key={tech.label}
                          href={tech.href}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                          <div className={cn("p-1.5 rounded-md border", tech.colorClass)}>
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <span>{tech.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 border-t border-border/40 space-y-2">
                  <Link 
                    href="https://projects.prodevopsguytech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2">
                      <span>Deploy Projects</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link 
                    href="/contact"
                    className="block"
                  >
                    <Button variant="outline" className="w-full h-10 rounded-xl text-xs">
                      Contact & Support
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}