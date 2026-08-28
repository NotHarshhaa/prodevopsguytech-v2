'use client';

import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, Users, BookOpen, Code, Target, Rocket, ArrowRight, Globe, Award, Coffee, Zap, Shield, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const stats = [
    { label: 'Projects Completed', value: '100+', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { label: 'Community Members', value: '15,000+', icon: Users, color: 'from-green-500 to-emerald-500' },
    { label: 'Countries Reached', value: '50+', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { label: 'Success Stories', value: '500+', icon: Award, color: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      title: 'Practical Knowledge',
      description: 'We believe in learning by doing. All our resources are designed to provide hands-on experience with real-world applications.',
      icon: <LightbulbIcon className="h-6 w-6" />,
      color: 'blue',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/15 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      title: 'Community First',
      description: 'We foster a collaborative environment where members can share knowledge, contribute to projects, and grow together.',
      icon: <Users className="h-6 w-6" />,
      color: 'green',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-green-500/15 text-green-600 dark:bg-green-900 dark:text-green-400'
    },
    {
      title: 'Continuous Learning',
      description: "We're committed to staying current with evolving technologies and continuously updating our resources to reflect industry best practices.",
      icon: <BookOpen className="h-6 w-6" />,
      color: 'purple',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/15 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    }
  ];

  const focusPoints = [
    {
      title: 'Real-time DevOps & Cloud Projects',
      description: 'AWS, Azure, Terraform, Kubernetes, Docker & more',
      icon: <Code className="h-5 w-5" />,
      color: 'text-blue-500'
    },
    {
      title: 'Automation Scripts',
      description: 'Tool installations & configurations made easy',
      icon: <Rocket className="h-5 w-5" />,
      color: 'text-purple-500'
    },
    {
      title: 'Interview Preparation',
      description: 'In-depth questions and cheat sheets',
      icon: <Target className="h-5 w-5" />,
      color: 'text-green-500'
    },
    {
      title: 'Learning Paths',
      description: 'Curated paths from beginner to advanced',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'text-orange-500'
    },
    {
      title: 'Open Source',
      description: 'Collaborative space for contributions',
      icon: <Users className="h-5 w-5" />,
      color: 'text-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Community & Open Source</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground leading-tight">
              About ProDevOpsGuy{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Tech
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              A high-impact open-source developer hub created to bridge the gap between academic cloud concepts and real-world production infrastructure.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center"
                  >
                    <Icon className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Mission & Focus Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-secondary text-foreground text-xs font-mono font-semibold">
                MISSION STATEMENT
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Empowering Engineers Through Hands-On Production Practice
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  At ProDevOpsGuy Tech, we believe the only genuine way to master cloud architecture and automation is by building and troubleshooting real infrastructure pipelines.
                </p>
                <p>
                  We eliminate theoretical filler and focus entirely on live environments: automated Kubernetes clusters, multi-tier AWS deployments, Terraform GitOps workflows, and production monitoring.
                </p>
                <p>
                  Whether you are transitioning into cloud engineering or scaling enterprise workloads, our blueprints and community give you the verified skills to succeed.
                </p>
              </div>
              <div className="pt-2">
                <Link href="/get-started">
                  <Button className="h-10 px-5 rounded-full text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <span>Start Your Journey</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-md">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/40">
                  <Zap className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-bold text-foreground">Core Competencies We Provide</h3>
                </div>
                <div className="space-y-3">
                  {focusPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-accent/50 transition-colors">
                      <div className="p-2 rounded-lg bg-secondary text-primary shrink-0">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-foreground">{point.title}</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-10 mb-16 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Our Guiding Principles
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-lg mx-auto">
                Built on transparency, open-source dedication, and rigorous engineering standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-border/60 bg-background/50 p-6 flex flex-col items-center text-center hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground mb-6">
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span>Free, Open-Source & Community-Driven</span>
              <Shield className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/get-started">
                <Button className="h-10 px-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-2">
                  <span>Explore Blueprint Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" className="h-10 px-6 rounded-full text-xs font-semibold border-border/70 bg-card">
                  Join Discord & Telegram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 