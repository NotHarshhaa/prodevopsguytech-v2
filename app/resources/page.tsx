'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: 'Real-Time Projects Hub',
      description: 'Work on real-world DevOps/Cloud projects with hands-on experience in AWS, Azure, and GCP.',
      url: 'https://projects.prodevopsguytech.com/',
      icon: '💻',
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'hover:border-blue-500/50',
    },
    {
      id: 2,
      title: 'Ultimate Docs Portal',
      description: '900+ curated learning materials covering everything from basic concepts to advanced implementations.',
      url: 'https://docs.prodevopsguytech.com/',
      icon: '📚',
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'hover:border-purple-500/50',
    },
    {
      id: 3,
      title: 'Repositories Central',
      description: 'Access production-ready scripts, infrastructure templates, and preparation content.',
      url: 'https://repos.prodevopsguytech.com/',
      icon: '📦',
      gradient: 'from-orange-500/10 to-red-500/10',
      borderGradient: 'hover:border-orange-500/50',
    },
    {
      id: 4,
      title: 'Jobs Portal',
      description: 'Discover curated DevOps and Cloud opportunities from leading tech companies.',
      url: 'https://jobs.prodevopsguytech.com/',
      icon: '🧭',
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'hover:border-green-500/50',
    },
    {
      id: 5,
      title: 'DevOps Blog',
      description: 'In-depth technical articles and practical guides for modern DevOps practices.',
      url: 'https://blog.prodevopsguytech.com/',
      icon: '📰',
      gradient: 'from-yellow-500/10 to-amber-500/10',
      borderGradient: 'hover:border-yellow-500/50',
    },
    {
      id: 6,
      title: 'Cloud Blog',
      description: 'Expert insights and best practices for cloud architecture and implementation.',
      url: 'https://cloud.prodevopsguytech.com/',
      icon: '☁️',
      gradient: 'from-indigo-500/10 to-violet-500/10',
      borderGradient: 'hover:border-indigo-500/50',
    },
    {
      id: 7,
      title: 'DevOps Tools Hub',
      description: 'Comprehensive guides for installing and configuring essential DevOps tools.',
      url: 'https://devopsguides.site',
      icon: '🛠️',
      gradient: 'from-rose-500/10 to-pink-500/10',
      borderGradient: 'hover:border-rose-500/50',
    },
    {
      id: 8,
      title: 'Tools Cheatsheet',
      description: 'Quick reference guides and commands for your daily DevOps workflow.',
      url: 'https://cheatsheet.prodevopsguytech.com',
      icon: '📋',
      gradient: 'from-teal-500/10 to-emerald-500/10',
      borderGradient: 'hover:border-teal-500/50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
        <div className="absolute inset-auto w-[50rem] h-[40rem] bg-primary/30 opacity-20 blur-[128px] rounded-full" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              RESOURCES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
              DevOps & Cloud Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Empowering DevOps & Cloud Learners — One Resource at a Time
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a 
                href="https://topmate.io/prodevopsguytech/800566?utm_source=public_profile&utm_campaign=prodevopsguytech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button size="lg" className="w-full md:w-auto">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a 
                href="https://roadmap.sh/devops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full md:w-auto">
                  View Roadmap
                </Button>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`group relative overflow-hidden border border-border/50 bg-gradient-to-b ${resource.gradient} backdrop-blur-sm transition-all duration-300 ${resource.borderGradient} hover:shadow-lg hover:-translate-y-1`}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full p-4 text-center font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group-hover:bg-muted/50"
                    >
                      Explore Resource
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative bg-gradient-to-b from-muted/50 to-muted/30 border rounded-xl p-8 max-w-4xl mx-auto text-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px] rounded-xl" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">Never Stop Learning</h2>
            <p className="text-muted-foreground mb-8 relative">
              These resources are continuously updated to reflect the latest industry trends and practices.
              Check back regularly for new content and learning opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <a 
                href="https://projects.prodevopsguytech.com/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button size="lg" className="w-full md:w-auto">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/" className="w-full md:w-auto">
                <Button variant="outline" size="lg" className="w-full md:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 