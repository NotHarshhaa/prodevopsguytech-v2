'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Search, BookOpen, Users, Trophy, ArrowRight, Sparkles, Rocket, Heart, Star, TrendingUp } from "lucide-react";

const MotionCard = motion(Card);

interface LearningPath {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Specialization';
  duration: string;
  enrolled: number;
  completion_rate: number;
  topics: string[];
  url: string;
}

export default function LearningPathsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const learningPaths: LearningPath[] = [
    {
      id: 1,
      title: 'DevOps Foundations',
      description: 'Get started with the fundamentals of DevOps. Learn the core principles, tools, and practices.',
      level: 'Beginner',
      duration: '4 weeks',
      enrolled: 1234,
      completion_rate: 85,
      topics: [
        'Introduction to DevOps',
        'Git and Version Control',
        'Linux Fundamentals',
        'Basic Shell Scripting'
      ],
      url: '/learning-paths/devops-foundations'
    },
    {
      id: 2,
      title: 'Cloud Computing Essentials',
      description: 'Learn the core concepts and services offered by major cloud providers like AWS, Azure, and GCP.',
      level: 'Beginner',
      duration: '5 weeks',
      enrolled: 2156,
      completion_rate: 78,
      topics: [
        'Cloud Fundamentals',
        'IaaS, PaaS, and SaaS',
        'Storage Solutions',
        'Networking in the Cloud'
      ],
      url: '/learning-paths/cloud-essentials'
    },
    {
      id: 3,
      title: 'CI/CD Pipeline Implementation',
      description: 'Build automated pipelines for continuous integration and continuous deployment.',
      level: 'Intermediate',
      duration: '6 weeks',
      enrolled: 1876,
      completion_rate: 75,
      topics: [
        'Jenkins, GitLab CI',
        'GitHub Actions',
        'Docker for CI/CD',
        'Testing Strategies'
      ],
      url: '/learning-paths/cicd-implementation'
    },
    {
      id: 4,
      title: 'Kubernetes Mastery',
      description: 'Become proficient in deploying, managing, and scaling containerized applications with Kubernetes.',
      level: 'Intermediate',
      duration: '8 weeks',
      enrolled: 2345,
      completion_rate: 70,
      topics: [
        'Kubernetes Architecture',
        'Deployments and Services',
        'ConfigMaps and Secrets',
        'Persistent Storage'
      ],
      url: '/learning-paths/kubernetes-mastery'
    },
    {
      id: 5,
      title: 'Infrastructure as Code',
      description: 'Learn to provision and manage infrastructure using code with tools like Terraform and CloudFormation.',
      level: 'Intermediate',
      duration: '6 weeks',
      enrolled: 1987,
      completion_rate: 82,
      topics: [
        'Terraform Fundamentals',
        'AWS CloudFormation',
        'Azure Resource Manager',
        'IaC Best Practices'
      ],
      url: '/learning-paths/infrastructure-as-code'
    },
    {
      id: 6,
      title: 'Advanced Cloud Security',
      description: 'Master security best practices for cloud-native applications and infrastructure.',
      level: 'Advanced',
      duration: '7 weeks',
      enrolled: 1432,
      completion_rate: 68,
      topics: [
        'Identity and Access Management',
        'Network Security',
        'Data Protection',
        'Security Automation'
      ],
      url: '/learning-paths/cloud-security'
    },
    {
      id: 7,
      title: 'Site Reliability Engineering',
      description: 'Learn the principles and practices of SRE to build reliable and scalable systems.',
      level: 'Advanced',
      duration: '9 weeks',
      enrolled: 987,
      completion_rate: 65,
      topics: [
        'Service Level Objectives',
        'Error Budgets',
        'Monitoring and Observability',
        'Incident Response'
      ],
      url: '/learning-paths/sre'
    },
    {
      id: 8,
      title: 'DevSecOps Implementation',
      description: 'Integrate security into your DevOps pipeline and practices.',
      level: 'Advanced',
      duration: '7 weeks',
      enrolled: 876,
      completion_rate: 73,
      topics: [
        'Security as Code',
        'Vulnerability Management',
        'Compliance as Code',
        'Threat Modeling'
      ],
      url: '/learning-paths/devsecops'
    },
    {
      id: 9,
      title: 'Multi-Cloud Architecture',
      description: 'Design and implement solutions that leverage multiple cloud providers effectively.',
      level: 'Specialization',
      duration: '10 weeks',
      enrolled: 567,
      completion_rate: 72,
      topics: [
        'Multi-Cloud Strategy',
        'Abstraction Layers',
        'Data Management',
        'Cost Optimization'
      ],
      url: '/learning-paths/multi-cloud'
    }
  ];

  const getLevelBadgeClass = (level: string): string => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Specialization':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      default:
        return '';
    }
  };

  const getPathCardClass = (level: string): string => {
    switch (level) {
      case 'Beginner':
        return 'border-l-4 border-green-500';
      case 'Intermediate':
        return 'border-l-4 border-blue-500';
      case 'Advanced':
        return 'border-l-4 border-purple-500';
      case 'Specialization':
        return 'border-l-4 border-amber-500';
      default:
        return '';
    }
  };

  const filteredPaths = learningPaths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = selectedLevel === 'all' || path.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-14 pb-8">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Structured DevOps Curricula</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
              Master Cloud, DevOps &{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                SRE Engineering
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Step-by-step roadmaps from Linux fundamentals and containerization to multi-cloud architecture and GitOps.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-8">
              <div className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-foreground">9+</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">Curated Paths</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-foreground">48+</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">Weeks of Content</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-foreground">5,000+</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground font-medium">Active Learners</div>
              </div>
            </div>

            {/* Search & Filter Controls */}
            <div className="max-w-xl mx-auto space-y-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by tool, topic, or keyword..."
                  className="pl-10 h-11 bg-card border-border/70 rounded-full focus-visible:ring-primary text-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedLevel}>
                <TabsList className="w-full h-10 grid grid-cols-5 bg-card border border-border/60 rounded-full p-1">
                  <TabsTrigger value="all" className="rounded-full text-xs">All</TabsTrigger>
                  <TabsTrigger value="Beginner" className="rounded-full text-xs">Beginner</TabsTrigger>
                  <TabsTrigger value="Intermediate" className="rounded-full text-xs">Intermediate</TabsTrigger>
                  <TabsTrigger value="Advanced" className="rounded-full text-xs">Advanced</TabsTrigger>
                  <TabsTrigger value="Specialization" className="rounded-full text-xs">Specialist</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Grid */}
      <section className="pb-20">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path) => (
              <div
                key={path.id}
                className="rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-primary/10 text-primary border-primary/20">
                      {path.level}
                    </span>
                    <div className="flex items-center text-muted-foreground text-xs font-mono">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {path.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {path.description}
                    </p>
                  </div>
                  
                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 pb-1 border-y border-border/40 font-mono">
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1.5 text-primary" />
                      <span>{path.enrolled.toLocaleString()} enrolled</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
                      <span>{path.completion_rate}% pass</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Syllabus Highlights:</h4>
                    <ul className="space-y-1.5 text-xs text-foreground/80">
                      {path.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <BookOpen className="h-3 w-3 text-primary shrink-0" />
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-border/40">
                  <Link 
                    href={path.url}
                    className="w-full h-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Explore Curriculum</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPaths.length === 0 && (
            <div className="text-center py-16 bg-card border border-border/60 rounded-3xl p-8 max-w-lg mx-auto">
              <h3 className="text-base font-bold text-foreground mb-1">No learning paths found</h3>
              <p className="text-xs text-muted-foreground">
                Try searching with a different term or resetting the skill level filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
