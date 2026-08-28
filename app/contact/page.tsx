'use client';

import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle, Twitter, Linkedin, Github, Youtube, ArrowRight, Clock, CheckCircle2, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [preferredContact, setPreferredContact] = useState('email');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const stats = [
    { label: 'Response Time', value: '< 24hrs', icon: Clock },
    { label: 'Success Rate', value: '99%', icon: CheckCircle2 },
    { label: 'Global Support', value: '24/7', icon: MapPin },
  ];
  
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <section className="relative pt-8 md:pt-14 pb-20">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
              <Mail className="h-3.5 w-3.5" />
              <span>Direct Developer Assistance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground leading-tight">
              Get in Touch with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Our Team
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Have questions regarding our architectural blueprints, career mentorship, or open-source repositories? We respond within 24 hours.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center"
                  >
                    <Icon className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <div className="text-lg sm:text-xl font-bold text-foreground mb-0.5">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 shadow-md">
                <h2 className="text-xl font-bold text-foreground mb-2">Send an Infrastructure Query</h2>
                <p className="text-xs text-muted-foreground mb-6">Fill out your details and we will reach back to you promptly.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-foreground mb-1 block">Full Name</label>
                      <Input
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border/70 rounded-xl h-10 text-xs focus-visible:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-foreground mb-1 block">Email Address</label>
                      <Input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border/70 rounded-xl h-10 text-xs focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-1 block">Subject</label>
                    <Input
                      placeholder="e.g. Terraform AWS Blueprint Inquiry"
                      value={formData.subject}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background border-border/70 rounded-xl h-10 text-xs focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground mb-1 block">Your Message</label>
                    <Textarea
                      placeholder="Provide details about your question, project, or collaboration idea..."
                      value={formData.message}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[140px] bg-background border-border/70 rounded-2xl text-xs focus-visible:ring-primary leading-relaxed"
                    />
                  </div>
                  <Button className="w-full h-11 rounded-xl text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 shadow-md">
                    <span>Transmit Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div 
                className={cn(
                  "p-5 rounded-3xl border transition-all cursor-pointer",
                  preferredContact === 'email' ? "border-primary/60 bg-card shadow-md" : "border-border/60 bg-card/60 hover:bg-card"
                )}
                onClick={() => setPreferredContact('email')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-foreground">Direct Email</h3>
                    <p className="text-xs text-muted-foreground truncate">contact@prodevopsguy.tech</p>
                    <span className="text-[11px] font-mono text-primary">Response: &lt; 24 hrs</span>
                  </div>
                  <a href="mailto:contact@prodevopsguy.tech">
                    <Button size="sm" variant="outline" className="h-8 rounded-lg text-xs font-semibold">
                      Email
                    </Button>
                  </a>
                </div>
              </div>

              <div 
                className={cn(
                  "p-5 rounded-3xl border transition-all cursor-pointer",
                  preferredContact === 'telegram' ? "border-primary/60 bg-card shadow-md" : "border-border/60 bg-card/60 hover:bg-card"
                )}
                onClick={() => setPreferredContact('telegram')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-foreground">Telegram Community</h3>
                    <p className="text-xs text-muted-foreground truncate">Live discussions & rapid help</p>
                    <span className="text-[11px] font-mono text-emerald-500">15,000+ active engineers</span>
                  </div>
                  <a href="https://t.me/prodevopsguy" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="h-8 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white">
                      Join
                    </Button>
                  </a>
                </div>
              </div>

              <div 
                className={cn(
                  "p-5 rounded-3xl border transition-all cursor-pointer",
                  preferredContact === 'faq' ? "border-primary/60 bg-card shadow-md" : "border-border/60 bg-card/60 hover:bg-card"
                )}
                onClick={() => setPreferredContact('faq')}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 shrink-0">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-bold text-foreground">Knowledge Base FAQs</h3>
                    <p className="text-xs text-muted-foreground truncate">Common setup & repo answers</p>
                    <span className="text-[11px] font-mono text-purple-500">Instant answers 24/7</span>
                  </div>
                  <Link href="/resources">
                    <Button size="sm" variant="outline" className="h-8 rounded-lg text-xs font-semibold">
                      Browse
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
          {/* Social Links */}
          <div className="text-center pt-8 border-t border-border/40 max-w-xl mx-auto">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Connect Across Developer Channels
            </h3>
            <div className="flex justify-center gap-3">
              <a 
                href="https://twitter.com/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-card border border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/in/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-card border border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-card border border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://youtube.com/@NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-card border border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 