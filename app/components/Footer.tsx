'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Youtube, ArrowRight, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PrivacyDialog } from './PrivacyDialog';
import { TermsDialog } from './TermsDialog';

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

  const techLogos = [
    { src: "/images/cloud-logos/aws-logo.svg", alt: "AWS" },
    { src: "/images/cloud-logos/azure-logo.svg", alt: "Azure" },
    { src: "/images/cloud-logos/gcp-logo.svg", alt: "GCP" },
    { src: "/images/cloud-logos/digitalocean-logo.svg", alt: "DigitalOcean" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-background border-t border-border/20">
      {/* Newsletter Section */}
      <div className="relative bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl mx-4 mb-8 shadow-lg">
        <div className="container px-4 mx-auto py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide">
              NEWSLETTER
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight leading-tight">
              Join Our DevOps Community
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get weekly insights on DevOps best practices, cloud architecture, and automation techniques.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background/60 backdrop-blur-sm border-border/30 focus-visible:ring-primary rounded-full"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full font-medium group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Branding and Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <div className="text-2xl md:text-3xl font-bold mb-3 relative tracking-tight leading-tight">
                ProDevOpsGuy
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Tech</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering the next generation of DevOps engineers with hands-on projects, comprehensive resources, and a supportive community.
            </p>
            
            {/* Tech Stack Logos */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3 font-medium tracking-wide">Trusted Cloud Partners:</p>
              <div className="grid grid-cols-4 gap-4">
                {techLogos.map((logo) => (
                  <div 
                    key={logo.alt}
                    className="relative h-8 bg-background/60 backdrop-blur-sm rounded-2xl p-1.5 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-border/20 hover:border-primary/30"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: "https://github.com/prodevopsguy", icon: Github, label: "GitHub", color: "hover:bg-[#2da44e]/10 hover:text-[#2da44e]" },
                { href: "https://twitter.com/prodevopsguy", icon: Twitter, label: "Twitter", color: "hover:bg-[#1da1f2]/10 hover:text-[#1da1f2]" },
                { href: "https://linkedin.com/in/prodevopsguy", icon: Linkedin, label: "LinkedIn", color: "hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]" },
                { href: "https://youtube.com/c/prodevopsguy", icon: Youtube, label: "YouTube", color: "hover:bg-[#ff0000]/10 hover:text-[#ff0000]" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className={`h-10 w-10 flex items-center justify-center rounded-full bg-background/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-border/20 hover:border-primary/30 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-8 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center group font-medium"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-semibold text-lg mb-4 tracking-wide">Technologies</h3>
              <ul className="space-y-3">
                {footerLinks.technologies.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center group font-medium"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 border-border/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-medium">
            © {year} <Link href="/" className="hover:text-foreground transition-colors">ProDevOpsGuy Tech Community</Link>
          </div>
          <div className="flex gap-6">
            <PrivacyDialog />
            <TermsDialog />
          </div>
        </div>
      </div>
    </footer>
  );
} 