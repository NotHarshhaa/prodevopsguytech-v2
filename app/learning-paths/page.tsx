'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Search, BookOpen, Users, Trophy, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16 pt-8 md:pt-0"
          >
            <div className="inline-flex px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide">
              LEARNING PATHS
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
              Master DevOps & Cloud Computing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Structured learning paths to guide your journey from beginner to expert
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 md:mb-12">
              <div className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 tracking-tight">9+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">Learning Paths</div>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 tracking-tight">48+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">Weeks of Content</div>
              </div>
              <div className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 tracking-tight">1000+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">Students Enrolled</div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-4 md:mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search learning paths..."
                  className="pl-10 bg-background/60 backdrop-blur-sm border-border/30 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedLevel}>
                <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2 bg-background/60 backdrop-blur-sm border-border/30 rounded-full p-1">
                  <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
                  <TabsTrigger value="Beginner" className="rounded-full">
                    <span className="hidden md:inline">Beginner</span>
                    <span className="md:hidden">Begin</span>
                  </TabsTrigger>
                  <TabsTrigger value="Intermediate" className="rounded-full">
                    <span className="hidden md:inline">Intermediate</span>
                    <span className="md:hidden">Inter</span>
                  </TabsTrigger>
                  <TabsTrigger value="Advanced" className="rounded-full">
                    <span className="hidden md:inline">Advanced</span>
                    <span className="md:hidden">Adv</span>
                  </TabsTrigger>
                  <TabsTrigger value="Specialization" className="rounded-full">
                    <span className="hidden md:inline">Specialization</span>
                    <span className="md:hidden">Spec</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Grid */}
      <section className="py-8 md:py-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredPaths.map((path) => (
              <MotionCard
                key={path.id}
                variants={item}
                className="group relative overflow-hidden border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 ease-out rounded-2xl"
                whileHover={{ y: -5 }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <Badge className={getLevelBadgeClass(path.level)}>
                      {path.level}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs md:text-sm">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      <span>{path.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 tracking-wide">
                    {path.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{path.description}</p>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 text-xs md:text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      {path.enrolled.toLocaleString()} enrolled
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Trophy className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      {path.completion_rate}% completion
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-xs md:text-sm mb-2">Topics Covered:</h4>
                    <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                      {path.topics.map((topic, index) => (
                        <li key={index} className="flex items-center">
                          <BookOpen className="h-3 w-3 mr-1 md:mr-2 text-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-0">
                  <Link 
                    href={path.url}
                    className="w-full p-3 md:p-4 text-center font-medium text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded-b-2xl flex items-center justify-center group"
                  >
                    <span className="text-sm md:text-base">Explore Path</span>
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </MotionCard>
            ))}
          </motion.div>

          {filteredPaths.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 md:py-12"
            >
              <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-wide">No learning paths found</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
} 