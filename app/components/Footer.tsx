'use client';

import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border/50 py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* CTA Section */}
        <div className="py-8 px-6 mb-12 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Ready to advance your DevOps journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our community today and get access to hands-on projects, resources, and a supportive network of DevOps professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/community">
                <Button size="lg" className="relative overflow-hidden group">
                  <span className="relative z-10">Join Community</span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
                </Button>
              </Link>
              <Link href="https://projects.prodevopsguytech.com/">
                <Button size="lg" variant="outline" className="relative overflow-hidden group">
                  <span className="relative z-10">Explore Projects</span>
                  <span className="absolute inset-0 bg-primary/5 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding and socials */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bold mb-4 relative group">
              ProDevOpsGuy<span className="text-primary">Tech</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <p className="text-muted-foreground mb-6">
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
                  className="h-9 w-9 flex items-center justify-center rounded-md bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center group"
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
            <h3 className="font-medium text-lg mb-4">Technologies</h3>
            <ul className="space-y-3">
              {footerLinks.technologies.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest projects and resources
            </p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-colors" 
                required
              />
              <Button type="submit" className="relative overflow-hidden group">
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
              </Button>
            </form>
          </div>
        </div>

        <Separator className="mb-6 bg-border/50" />
        
        <div className="text-center text-muted-foreground text-sm">
          © {year} <Link href="/" className="hover:text-foreground transition-colors relative inline-block group">
            ProDevOpsGuy Tech Community
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </Link>. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 