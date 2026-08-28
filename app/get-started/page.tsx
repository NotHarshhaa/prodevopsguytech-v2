'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, MapPin, Calendar, Code, LineChart, BookOpen, Users, CloudCog, GitBranchPlus, Sparkles, Rocket, Heart, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

export default function GetStartedPage() {
  const [, setActiveTab ] = useState("beginner");
  
  const pathTypes = [
    {
      id: "beginner",
      title: "Beginner",
      description: "Perfect for those new to DevOps and cloud technologies",
      icon: <BookOpen className="h-5 w-5" />,
      color: "text-green-500"
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "For those with basic understanding seeking to deepen their skills",
      icon: <Code className="h-5 w-5" />,
      color: "text-blue-500"
    },
    {
      id: "advanced",
      title: "Advanced",
      description: "For experienced professionals looking to master complex topics",
      icon: <CloudCog className="h-5 w-5" />,
      color: "text-purple-500"
    },
    {
      id: "specialized",
      title: "Specialized Paths",
      description: "Focus on niche areas and cutting-edge technologies",
      icon: <GitBranchPlus className="h-5 w-5" />,
      color: "text-amber-500"
    }
  ];
  
  const beginnerSteps = [
    {
      number: 1,
      title: "Introduction to DevOps",
      description: "Learn the core principles, practices, and benefits of DevOps methodology",
      duration: "1 week",
      resources: [
        { type: "Course", title: "DevOps Fundamentals", url: "/learning-paths/devops-foundations" },
        { type: "Project", title: "Setup Development Environment", url: "/projects/dev-environment" }
      ]
    },
    {
      number: 2,
      title: "Version Control with Git",
      description: "Master Git fundamentals for effective collaboration and code management",
      duration: "1 week",
      resources: [
        { type: "Course", title: "Git Essentials", url: "/learning-paths/git-basics" },
        { type: "Project", title: "Your First Git Repository", url: "/projects/git-basics" }
      ]
    },
    {
      number: 3,
      title: "Linux Fundamentals",
      description: "Gain essential Linux skills for server management and operations",
      duration: "2 weeks",
      resources: [
        { type: "Course", title: "Linux for DevOps", url: "/learning-paths/linux-essentials" },
        { type: "Project", title: "Basic Shell Scripting", url: "/projects/shell-scripts" }
      ]
    },
    {
      number: 4,
      title: "Cloud Computing Basics",
      description: "Understand cloud service models and basic cloud architecture",
      duration: "2 weeks",
      resources: [
        { type: "Course", title: "Cloud Essentials", url: "/learning-paths/cloud-essentials" },
        { type: "Project", title: "Deploy Your First Cloud Resource", url: "/projects/first-cloud-deploy" }
      ]
    }
  ];
  
  const intermediateSteps = [
    {
      number: 1,
      title: "Containerization with Docker",
      description: "Learn to build, deploy and manage applications using containers",
      duration: "2 weeks",
      resources: [
        { type: "Course", title: "Docker Deep Dive", url: "/learning-paths/docker-essentials" },
        { type: "Project", title: "Containerize a Web Application", url: "/projects/docker-app" }
      ]
    },
    {
      number: 2,
      title: "CI/CD Pipeline Implementation",
      description: "Build automated pipelines for continuous integration and deployment",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "CI/CD Essentials", url: "/learning-paths/cicd-implementation" },
        { type: "Project", title: "Build a Jenkins Pipeline", url: "/projects/jenkins-pipeline" }
      ]
    },
    {
      number: 3,
      title: "Infrastructure as Code",
      description: "Manage infrastructure with code using tools like Terraform",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "IaC Fundamentals", url: "/learning-paths/infrastructure-as-code" },
        { type: "Project", title: "Deploy with Terraform", url: "/projects/terraform-basics" }
      ]
    },
    {
      number: 4,
      title: "Monitoring and Logging",
      description: "Implement effective monitoring and logging strategies",
      duration: "2 weeks",
      resources: [
        { type: "Course", title: "Monitoring Essentials", url: "/learning-paths/monitoring-logging" },
        { type: "Project", title: "Setup Prometheus & Grafana", url: "/projects/prometheus-grafana" }
      ]
    }
  ];
  
  const advancedSteps = [
    {
      number: 1,
      title: "Kubernetes Orchestration",
      description: "Master container orchestration with Kubernetes",
      duration: "4 weeks",
      resources: [
        { type: "Course", title: "Kubernetes Mastery", url: "/learning-paths/kubernetes-mastery" },
        { type: "Project", title: "Multi-tier Application on K8s", url: "/projects/k8s-advanced" }
      ]
    },
    {
      number: 2,
      title: "Cloud Architecture Design",
      description: "Design scalable, resilient cloud-native architectures",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "Cloud Architecture", url: "/learning-paths/cloud-architecture" },
        { type: "Project", title: "Microservices Architecture", url: "/projects/microservices" }
      ]
    },
    {
      number: 3,
      title: "DevSecOps Implementation",
      description: "Integrate security into your DevOps pipeline",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "DevSecOps", url: "/learning-paths/devsecops" },
        { type: "Project", title: "Secure Pipeline Implementation", url: "/projects/secure-pipeline" }
      ]
    },
    {
      number: 4,
      title: "Site Reliability Engineering",
      description: "Learn SRE principles for creating reliable systems",
      duration: "4 weeks",
      resources: [
        { type: "Course", title: "SRE Fundamentals", url: "/learning-paths/sre" },
        { type: "Project", title: "Reliability Engineering Project", url: "/projects/sre-practice" }
      ]
    }
  ];
  
  const specializedSteps = [
    {
      number: 1,
      title: "Multi-Cloud Strategy",
      description: "Design and implement multi-cloud deployments",
      duration: "4 weeks",
      resources: [
        { type: "Course", title: "Multi-Cloud Architecture", url: "/learning-paths/multi-cloud" },
        { type: "Project", title: "Cross-Cloud Application", url: "/projects/multi-cloud" }
      ]
    },
    {
      number: 2,
      title: "GitOps Implementation",
      description: "Master declarative infrastructure with GitOps principles",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "GitOps Fundamentals", url: "/learning-paths/gitops" },
        { type: "Project", title: "ArgoCD Implementation", url: "/projects/argocd" }
      ]
    },
    {
      number: 3,
      title: "Service Mesh Architecture",
      description: "Implement and manage service mesh for microservices",
      duration: "3 weeks",
      resources: [
        { type: "Course", title: "Service Mesh Essentials", url: "/learning-paths/service-mesh" },
        { type: "Project", title: "Istio Implementation", url: "/projects/istio" }
      ]
    },
    {
      number: 4,
      title: "FinOps for Cloud",
      description: "Optimize cloud costs with FinOps practices",
      duration: "2 weeks",
      resources: [
        { type: "Course", title: "Cloud Cost Optimization", url: "/learning-paths/finops" },
        { type: "Project", title: "Cloud Cost Analysis", url: "/projects/cost-optimization" }
      ]
    }
  ];

  const stepsByTab: Record<string, any[]> = {
    beginner: beginnerSteps,
    intermediate: intermediateSteps,
    advanced: advancedSteps,
    specialized: specializedSteps
  };
  
  const gettingStartedSteps = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "1. Join Our Community",
      description: "Sign up for an account to track your progress and connect with other learners.",
      action: "Register Now",
      url: "/join"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-500" />,
      title: "2. Choose Your Path",
      description: "Select a learning path based on your experience level and interests.",
      action: "Explore Paths",
      url: "/learning-paths"
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-500" />,
      title: "3. Create a Schedule",
      description: "Plan your learning journey with realistic goals and timeline.",
      action: "Plan Schedule",
      url: "/resources/planning"
    },
    {
      icon: <LineChart className="h-6 w-6 text-amber-500" />,
      title: "4. Track Your Progress",
      description: "Monitor your achievements and stay motivated throughout your journey.",
      action: "View Dashboard",
      url: "/dashboard"
    }
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Step-by-Step Onboarding</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground leading-tight">
              Begin Your DevOps{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Engineering Journey
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Follow our battle-tested milestone system to progress from local development to production cluster orchestration.
            </p>
          </motion.div>

          {/* Getting Started 4-Step Process */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">How To Get Started</h2>
              <p className="text-xs text-muted-foreground mt-1">Four simple steps to launch your cloud engineering roadmap</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {gettingStartedSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/40">
                    <Link href={step.url} className="w-full">
                      <Button className="w-full h-9 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm">
                        <span>{step.action}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path Tabs */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Curated Path Milestones</h2>
              <p className="text-xs text-muted-foreground mt-1">Choose the track aligned with your current experience level</p>
            </div>
            
            <Tabs defaultValue="beginner" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full max-w-xl mx-auto h-11 grid grid-cols-4 mb-8 bg-card border border-border/60 rounded-full p-1">
                {pathTypes.map(path => (
                  <TabsTrigger 
                    key={path.id} 
                    value={path.id}
                    className="rounded-full text-xs font-semibold"
                  >
                    <span>{path.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {pathTypes.map(path => (
                <TabsContent key={path.id} value={path.id} className="mt-0 space-y-4">
                  <div className="text-center max-w-xl mx-auto mb-6">
                    <h3 className="text-lg font-bold text-foreground">{path.title} Engineering Track</h3>
                    <p className="text-xs text-muted-foreground mt-1">{path.description}</p>
                  </div>
                  
                  <div className="space-y-4 max-w-4xl mx-auto">
                    {stepsByTab[path.id].map((step) => (
                      <div
                        key={String(step.number)}
                        className="rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-1.5 md:max-w-md">
                            <div className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold flex items-center justify-center border border-primary/20">
                                {step.number}
                              </span>
                              <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed pl-8">{step.description}</p>
                            <div className="flex items-center text-[11px] text-muted-foreground font-mono pl-8">
                              <Calendar className="h-3 w-3 mr-1 text-primary" />
                              <span>Recommended: {step.duration}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap md:flex-col gap-2 md:w-64">
                            {step.resources.map((resource: {type: string, title: string, url: string}, idx: number) => (
                              <Link key={idx} href={resource.url} className="w-full">
                                <div className="flex items-center justify-between p-2 rounded-xl bg-secondary/80 hover:bg-primary hover:text-primary-foreground text-foreground border border-border/40 text-xs transition-all group">
                                  <span className="truncate">{resource.title}</span>
                                  <ArrowRight className="h-3 w-3 shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-6">
                    <Link href={`/learning-paths`}>
                      <Button className="h-10 px-6 rounded-full text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 mx-auto">
                        <Rocket className="h-3.5 w-3.5" />
                        <span>View All Learning Paths</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Why Learn With Us Grid */}
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-10 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Why Build With ProDevOpsGuy</h2>
              <p className="text-xs text-muted-foreground mt-1">Designed by DevOps professionals for practical production readiness</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground">Production Blueprints</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                    No toy projects. Every template mirrors enterprise multi-tier architecture with realistic VPCs and IAM policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground">Job-Market Relevance</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                    Focused strictly on high-demand stacks: Terraform, Kubernetes, Docker, GitHub Actions, AWS, and Prometheus.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-foreground">Active Peer Review</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
                    Connect directly with 15,000+ engineers in our Telegram group when debugging difficult pipeline or cluster bugs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
