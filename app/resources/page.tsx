'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowRight, Search, BookOpen, Code, Briefcase, Newspaper, 
  Terminal, 
  Book, 
  Box, 
  Compass, 
  FileText, 
  Cloud, 
  Wrench, 
  ClipboardList,
  Sparkles,
  Rocket,
  Heart,
  Star,
  Users,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'learning', label: 'Learning', icon: Code },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'content', label: 'Content', icon: Newspaper },
  ];

  const resources = [
    {
      id: 1,
      title: 'Real-Time Projects Hub',
      description: 'Work on real-world DevOps/Cloud projects with hands-on experience in AWS, Azure, and GCP.',
      url: 'https://projects.prodevopsguytech.com/',
      icon: Terminal,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'hover:border-blue-500/50',
      category: 'learning',
      stats: { users: '5K+', projects: '50+' }
    },
    {
      id: 2,
      title: 'Ultimate Docs Portal',
      description: '900+ curated learning materials covering everything from basic concepts to advanced implementations.',
      url: 'https://docs.prodevopsguytech.com/',
      icon: Book,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'hover:border-purple-500/50',
      category: 'learning',
      stats: { docs: '1400+', readers: '10K+' }
    },
    {
      id: 3,
      title: 'Repositories Central',
      description: 'Access production-ready scripts, infrastructure templates, and preparation content.',
      url: 'https://repos.prodevopsguytech.com/',
      icon: Box,
      gradient: 'from-orange-500/10 to-red-500/10',
      borderGradient: 'hover:border-orange-500/50',
      category: 'learning',
      stats: { repos: '100+', stars: '2K+' }
    },
    {
      id: 4,
      title: 'Jobs Portal',
      description: 'Discover curated DevOps and Cloud opportunities from leading tech companies.',
      url: 'https://jobs.prodevopsguytech.com/',
      icon: Compass,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'hover:border-green-500/50',
      category: 'career',
      stats: { jobs: '200+', companies: '50+' }
    },
    {
      id: 5,
      title: 'DevOps Blog',
      description: 'In-depth technical articles and practical guides for modern DevOps practices.',
      url: 'https://blog.prodevopsguytech.com/',
      icon: FileText,
      gradient: 'from-yellow-500/10 to-amber-500/10',
      borderGradient: 'hover:border-yellow-500/50',
      category: 'content',
      stats: { articles: '300+', readers: '15K+' }
    },
    {
      id: 6,
      title: 'Cloud Blog',
      description: 'Expert insights and best practices for cloud architecture and implementation.',
      url: 'https://cloud.prodevopsguytech.com/',
      icon: Cloud,
      gradient: 'from-indigo-500/10 to-violet-500/10',
      borderGradient: 'hover:border-indigo-500/50',
      category: 'content',
      stats: { articles: '250+', readers: '12K+' }
    },
    {
      id: 7,
      title: 'DevOps Tools Setup Installations',
      description: 'Comprehensive guides for installing and configuring essential DevOps tools.',
      url: 'https://tools-setup.prodevopsguytech.com/',
      icon: Wrench,
      gradient: 'from-rose-500/10 to-pink-500/10',
      borderGradient: 'hover:border-rose-500/50',
      category: 'learning',
      stats: { tools: '30+', guides: '100+' }
    },
    {
      id: 8,
      title: 'Ultimate DevOps Tools Cheatsheet',
      description: 'Quick reference guides and commands for your daily DevOps workflow.',
      url: 'https://cheatsheet.prodevopsguytech.com',
      icon: ClipboardList,
      gradient: 'from-teal-500/10 to-emerald-500/10',
      borderGradient: 'hover:border-teal-500/50',
      category: 'learning',
      stats: { commands: '500+', tools: '20+' }
    },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const resourceStats = {
    totalResources: resources.length,
    totalUsers: '50K+',
    totalContent: '2000+',
    activeUsers: '5K+'
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <section className="relative pt-8 md:pt-14 pb-20">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Cheatsheets & Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground leading-tight">
              DevOps & Cloud{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Resource Library
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Curated architectural deep dives, interview prep question banks, automation snippets, and quick reference cheatsheets.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
              {Object.entries(resourceStats).map(([key, value]) => (
                <div
                  key={key}
                  className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">{value}</div>
                  <div className="text-[11px] text-muted-foreground font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a 
                href="https://topmate.io/prodevopsguytech/800566"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-10 px-5 rounded-full text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md flex items-center gap-2">
                  <Rocket className="h-3.5 w-3.5" />
                  <span>1-on-1 Mentorship</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <a 
                href="https://roadmap.sh/devops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="h-10 px-5 rounded-full text-xs font-semibold border-border/70 bg-card hover:bg-accent">
                  Interactive Roadmap
                </Button>
              </a>
            </div>

            {/* Search Input */}
            <div className="relative max-w-lg mx-auto mb-8">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources, topics, tools..."
                className="pl-10 h-11 bg-card border-border/70 rounded-full focus-visible:ring-primary text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-card border border-border/60 max-w-xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    type="button"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    {resource.icon && React.createElement(resource.icon, {
                      size: 24,
                      className: "text-primary"
                    })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {Object.entries(resource.stats).map(([key, value]) => (
                      <span key={key} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground border border-border/40">
                        <strong className="text-foreground">{value}</strong> {key}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-border/40">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full h-9 rounded-xl bg-secondary/80 hover:bg-primary hover:text-primary-foreground text-foreground font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Open Resource</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 max-w-4xl mx-auto text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
              Ready to accelerate your DevOps learning?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Join thousands of developers transforming their infrastructure skills with our hands-on projects and weekly architectural guides.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://projects.prodevopsguytech.com/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="h-10 px-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span>Start Deploying Projects</span>
                </Button>
              </a>
              <Link href="/learning-paths">
                <Button variant="outline" className="h-10 px-6 rounded-full text-xs font-semibold border-border/70 bg-card">
                  Explore Learning Paths
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}