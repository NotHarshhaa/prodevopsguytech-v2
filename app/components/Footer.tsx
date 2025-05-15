'use client';

import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { href: "https://projects.prodevopsguytech.com/", label: "Projects" },
      { href: "/resources", label: "Resources" },
      { href: "/learning-paths", label: "Learning Paths" },
      { href: "/community", label: "Community" },
      { href: "/about", label: "About Us" }
    ],
    technologies: [
      { href: "/technologies/aws", label: "AWS" },
      { href: "/technologies/azure", label: "Azure" },
      { href: "/technologies/terraform", label: "Terraform" },
      { href: "/technologies/kubernetes", label: "Kubernetes" },
      { href: "/technologies/docker", label: "Docker" }
    ]
  };

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50 py-8 md:py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Branding and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block text-xl md:text-2xl font-bold mb-3 relative group">
              ProDevOpsGuy<span className="text-primary">Tech</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/prodevopsguy", icon: Github, label: "GitHub" },
                { href: "https://twitter.com/prodevopsguy", icon: Twitter, label: "Twitter" },
                { href: "https://linkedin.com/in/prodevopsguy", icon: Linkedin, label: "LinkedIn" },
                { href: "https://youtube.com/c/prodevopsguy", icon: Youtube, label: "YouTube" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="h-8 w-8 flex items-center justify-center rounded-md bg-background/80 hover:bg-background transition-colors hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Desktop: side by side, Mobile: stacked */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-4 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-medium mb-4">Technologies</h3>
              <ul className="space-y-3">
                {footerLinks.technologies.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-4">
            <h3 className="font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest projects and resources
            </p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10 text-sm bg-background/50 backdrop-blur-sm"
                required
              />
              <Button type="submit" className="h-10 px-4 bg-primary hover:bg-primary/90 transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {year} <Link href="/" className="hover:text-foreground transition-colors relative inline-block group">
            ProDevOpsGuy Tech Community
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </Link>. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 