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
  ClipboardList 
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
        <div className="absolute inset-auto w-full max-w-[50rem] h-[40rem] bg-primary/30 opacity-20 blur-[128px] rounded-full animate-pulse" />
      </div>

      <section className="relative pt-28 md:pt-32 pb-16">
        <div className="container px-4 mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-20 pt-8 md:pt-0"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide"
            >
              RESOURCES HUB
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
              DevOps & Cloud Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your Gateway to DevOps Excellence — Curated Resources for Every Stage of Your Journey
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(resourceStats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                >
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 tracking-tight">{value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 md:mb-12">
              <a 
                href="https://topmate.io/prodevopsguytech/800566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button size="lg" className="w-full md:w-auto group rounded-full">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a 
                href="https://roadmap.sh/devops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full md:w-auto rounded-full">
                  View Roadmap
                </Button>
              </a>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8 md:mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10 bg-background/60 backdrop-blur-sm border-border/30 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-6 md:mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-transparent">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span className="hidden md:inline">{category.label}</span>
                    <span className="md:hidden">{category.label.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>

          {/* Resource Cards */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
            <AnimatePresence>
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card 
                    className={`group relative overflow-hidden border border-border/20 bg-background/60 backdrop-blur-xl transition-all duration-300 ease-out rounded-2xl hover:shadow-xl hover:scale-105 ${resource.borderGradient}`}
                  >
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12">
                        {resource.icon && React.createElement(resource.icon, {
                          size: 40,
                          className: "text-primary"
                        })}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors tracking-wide">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex gap-4 text-xs text-muted-foreground mt-4">
                        {Object.entries(resource.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center">
                            <span className="font-semibold text-primary">{value}</span>
                            <span className="ml-1">{key}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0">
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full p-4 text-center font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group-hover:bg-muted/50"
                      >
                        Explore Resource
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative overflow-hidden bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-6 md:p-12 max-w-4xl mx-auto text-center shadow-lg"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px] rounded-xl" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                Ready to Master DevOps?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Join thousands of developers who are transforming their careers with our comprehensive resources.
                New content is added weekly to keep you up-to-date with the latest trends and practices.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a 
                  href="https://projects.prodevopsguytech.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button size="lg" className="w-full md:w-auto group rounded-full">
                    Start with Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>
                <Link href="/" className="w-full md:w-auto">
                  <Button variant="outline" size="lg" className="w-full md:w-auto rounded-full">
                    Explore More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}