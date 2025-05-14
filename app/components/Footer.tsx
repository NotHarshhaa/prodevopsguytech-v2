'use client';

import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* CTA Section */}
        <div className="py-8 px-6 mb-12 bg-card rounded-xl shadow-sm border text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to advance your DevOps journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join our community today and get access to hands-on projects, resources, and a supportive network of DevOps professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/community">
              <Button size="lg">Join Community</Button>
            </Link>
            <Link href="https://projects.prodevopsguytech.com/">
              <Button size="lg" variant="outline">Explore Projects</Button>
            </Link>
          </div>
        </div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Branding and socials */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bold mb-4">
              ProDevOpsGuy<span className="text-primary">Tech</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/prodevopsguy" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/prodevopsguy" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-muted hover:bg-muted/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/prodevopsguy" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/c/prodevopsguy" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="h-9 w-9 flex items-center justify-center rounded-md bg-muted hover:bg-muted/80 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://projects.prodevopsguytech.com/" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
              </li>
              <li>
                <Link href="/learning-paths" className="text-muted-foreground hover:text-foreground transition-colors">Learning Paths</Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-medium text-lg mb-4">Technologies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/technologies/aws" className="text-muted-foreground hover:text-foreground transition-colors">AWS</Link>
              </li>
              <li>
                <Link href="/technologies/azure" className="text-muted-foreground hover:text-foreground transition-colors">Azure</Link>
              </li>
              <li>
                <Link href="/technologies/terraform" className="text-muted-foreground hover:text-foreground transition-colors">Terraform</Link>
              </li>
              <li>
                <Link href="/technologies/kubernetes" className="text-muted-foreground hover:text-foreground transition-colors">Kubernetes</Link>
              </li>
              <li>
                <Link href="/technologies/docker" className="text-muted-foreground hover:text-foreground transition-colors">Docker</Link>
              </li>
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
                className="bg-background" 
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="mb-6" />
        
        <div className="text-center text-muted-foreground text-sm">
          © {year} <Link href="/" className="hover:text-foreground transition-colors">ProDevOpsGuy Tech Community</Link>. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 