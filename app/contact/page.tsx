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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
        <div className="absolute inset-auto w-full max-w-[50rem] h-[40rem] bg-primary/30 opacity-20 blur-[128px] rounded-full animate-pulse" />
      </div>

      <section className="relative pt-28 md:pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16 pt-8 md:pt-0"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide"
            >
              GET IN TOUCH
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                  </motion.div>
                )}
              )}
            </div>
          </motion.div>
        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 ease-out rounded-2xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-6 tracking-wide">Send us a Message</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-background/60 backdrop-blur-sm border-border/30 rounded-full"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-background/60 backdrop-blur-sm border-border/30 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-muted/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[150px] bg-background/60 backdrop-blur-sm border-border/30 rounded-2xl"
                      />
                    </div>
                    <Button className="w-full group rounded-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <Card className="backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div 
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]" 
                    onClick={() => setPreferredContact('email')}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary/15 mb-4",
                        preferredContact === 'email' && "ring-2 ring-primary"
                      )}
                    >
                      <Mail className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">Email Us</h3>
                    <p className="text-muted-foreground text-center mb-1 font-medium">contact@prodevopsguy.tech</p>
                    <p className="text-muted-foreground text-center text-sm mb-4 md:mb-6">Response time: 24-48 hours</p>
                    <Link href="mailto:contact@prodevopsguy.tech" className="w-full">
                      <Button variant="default" className="w-full group rounded-full">
                        Send Email
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div 
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]" 
                    onClick={() => setPreferredContact('telegram')}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4",
                        preferredContact === 'telegram' && "ring-2 ring-primary"
                      )}
                    >
                      <MessageSquare className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">Telegram Community</h3>
                    <p className="text-muted-foreground text-center mb-1 font-medium">Join our Telegram community</p>
                    <p className="text-muted-foreground text-center text-sm mb-4 md:mb-6">Response time: 1-24 hours</p>
                    <a 
                      href="https://t.me/prodevopsguy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="default" className="w-full group rounded-full">
                        Join Telegram
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div 
                    className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]" 
                    onClick={() => setPreferredContact('faq')}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4",
                        preferredContact === 'faq' && "ring-2 ring-primary"
                      )}
                    >
                      <HelpCircle className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 tracking-wide">FAQs</h3>
                    <p className="text-muted-foreground text-center mb-1 font-medium">Check our frequently asked questions</p>
                    <p className="text-muted-foreground text-center text-sm mb-4 md:mb-6">Available 24/7</p>
                    <Link href="/resources/faqs" className="w-full">
                      <Button variant="default" className="w-full group rounded-full">
                        View FAQs
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
              Connect With Us
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <motion.a 
                href="https://twitter.com/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a 
                href="https://github.com/NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a 
                href="https://youtube.com/@NotHarshhaa" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              >
                <Youtube className="h-5 w-5 text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 