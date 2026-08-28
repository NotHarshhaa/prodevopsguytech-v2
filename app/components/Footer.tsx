'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  ArrowRight, 
  Mail, 
  CheckCircle2,
  Sparkles,
  Cpu,
  Heart
} from "lucide-react";
import { PrivacyDialog } from './PrivacyDialog';
import { TermsDialog } from './TermsDialog';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  const footerLinks = {
    quickLinks: [
      { href: "https://projects.prodevopsguytech.com/", label: "DevOps Projects" },
      { href: "/learning-paths", label: "Learning Roadmaps" },
      { href: "/resources", label: "Resources & Cheatsheets" },
      { href: "/community", label: "Community Hub" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact & Support" }
    ],
    technologies: [
      { href: "/technologies/aws", label: "Amazon Web Services (AWS)" },
      { href: "/technologies/azure", label: "Microsoft Azure" },
      { href: "/technologies/kubernetes", label: "Kubernetes & Helm" },
      { href: "/technologies/docker", label: "Docker Containers" },
      { href: "/technologies/terraform", label: "Terraform IaC" }
    ]
  };

  const techLogos = [
    { src: "/images/cloud-logos/aws-logo.svg", alt: "AWS" },
    { src: "/images/cloud-logos/azure-logo.svg", alt: "Azure" },
    { src: "/images/cloud-logos/gcp-logo.svg", alt: "GCP" },
    { src: "/images/cloud-logos/digitalocean-logo.svg", alt: "DigitalOcean" },
  ];

  return (
    <footer className="relative bg-card/60 border-t border-border/40 mt-12">
      {/* Newsletter Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card/90 to-primary/5 p-8 md:p-12 shadow-lg">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Mail className="w-3.5 h-3.5" />
              <span>Weekly DevOps Dispatch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Stay ahead in Cloud & DevOps engineering
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated architectural deep-dives, production Kubernetes tips, and new hands-on project releases delivered to your inbox every week.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email" 
                required
                className="h-11 rounded-full bg-background border-border/60 focus-visible:ring-primary text-xs px-4"
              />
              <Button 
                type="submit"
                disabled={isSubscribed}
                className="h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shrink-0 flex items-center justify-center gap-2 transition-all"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-foreground">
                ProDevOpsGuy<span className="text-primary">Tech</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empowering engineers worldwide with production-tested blueprints, end-to-end cloud projects, and an active developer community.
            </p>

            {/* Cloud Partners */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Supported Ecosystems
              </span>
              <div className="grid grid-cols-4 gap-2 max-w-xs">
                {techLogos.map((logo) => (
                  <div 
                    key={logo.alt}
                    className="relative h-7 bg-background/80 rounded-lg p-1 border border-border/40 flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain p-1 filter opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              {[
                { href: "https://github.com/prodevopsguy", icon: Github, label: "GitHub" },
                { href: "https://twitter.com/prodevopsguy", icon: Twitter, label: "Twitter" },
                { href: "https://linkedin.com/in/prodevopsguy", icon: Linkedin, label: "LinkedIn" },
                { href: "https://youtube.com/c/prodevopsguy", icon: Youtube, label: "YouTube" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                Platform
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-1">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                Technologies
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {footerLinks.technologies.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 border-border/40" />

        {/* Bottom copyright & Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-foreground font-medium">All systems operational</span>
            <span className="text-muted-foreground">· © {year} ProDevOpsGuy Tech</span>
          </div>

          <div className="flex items-center gap-4">
            <PrivacyDialog />
            <TermsDialog />
          </div>
        </div>
      </div>
    </footer>
  );
}