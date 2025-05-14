'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, HelpCircle, Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [preferredContact, setPreferredContact] = useState('email');
  
  return (
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">CONTACT</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <p className="text-muted-foreground">
            Whether you have a question about our projects, learning paths, or want to collaborate with us, our team is here to help. Choose your preferred contact method and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="text-sm py-1 px-3">24/7 Support</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">Fast Response</Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">Expert Assistance</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div 
                className="flex flex-col items-center cursor-pointer" 
                onClick={() => setPreferredContact('email')}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4",
                  preferredContact === 'email' && "ring-2 ring-primary"
                )}>
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-center mb-1">contact@prodevopsguy.tech</p>
                <p className="text-muted-foreground text-center text-sm mb-6">Response time: 24-48 hours</p>
              </div>
              <Link 
                href="mailto:contact@prodevopsguy.tech"
                className="block w-full"
              >
                <Button variant="default" className="w-full">Send Email</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div 
                className="flex flex-col items-center cursor-pointer" 
                onClick={() => setPreferredContact('discord')}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4",
                  preferredContact === 'discord' && "ring-2 ring-primary"
                )}>
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Discord Community</h3>
                <p className="text-muted-foreground text-center mb-1">Join our Discord community for quick responses</p>
                <p className="text-muted-foreground text-center text-sm mb-6">Response time: 1-24 hours</p>
              </div>
              <a 
                href="https://discord.gg/prodevopsguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="default" className="w-full">Join Discord</Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <div 
                className="flex flex-col items-center cursor-pointer" 
                onClick={() => setPreferredContact('faq')}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4",
                  preferredContact === 'faq' && "ring-2 ring-primary"
                )}>
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">FAQs</h3>
                <p className="text-muted-foreground text-center mb-1">Check our frequently asked questions for quick answers</p>
                <p className="text-muted-foreground text-center text-sm mb-6">Available 24/7</p>
              </div>
              <Link 
                href="/resources/faqs"
                className="block w-full"
              >
                <Button variant="default" className="w-full">View FAQs</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 