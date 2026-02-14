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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-gradient-to-r from-primary/20 to-primary/30 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-primary/20 to-primary/40 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-primary/25 to-primary/35 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <section className="relative pt-16 md:pt-32 pb-6 md:pb-12">
        <div className="container px-3 sm:px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-6 md:mb-12 lg:mb-16 pt-2 md:pt-0"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-3 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
            >
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              Get Started
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
            </motion.div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
              Begin Your DevOps Journey
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-4 md:mb-8 leading-relaxed">
              Follow our structured approach to master DevOps and cloud skills
            </p>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Whether you're just starting out or looking to level up your DevOps skills, we've created clear pathways to help you achieve your goals with hands-on projects and comprehensive resources.
            </p>
          </motion.div>

        {/* Getting Started Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 text-center tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {gettingStartedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out rounded-2xl md:rounded-3xl">
                  <CardContent className="pt-4 md:pt-6 pb-0 h-full flex flex-col">
                    <div className="mb-3 md:mb-4 flex justify-center">
                      <div className="p-2 md:p-3 rounded-full bg-primary/15 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-center tracking-wide group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground text-center mb-4 md:mb-6 flex-grow leading-relaxed">{step.description}</p>
                    <div className="mt-auto pb-4">
                      <Link href={step.url} className="w-full">
                        <Button className="w-full rounded-full font-medium text-xs md:text-sm bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          {step.action}
                          <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Paths */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-8 text-center tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">Choose Your Learning Path</h2>
          
          <Tabs defaultValue="beginner" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 bg-background/60 backdrop-blur-sm border-border/30 rounded-full p-1">
              {pathTypes.map(path => (
                <TabsTrigger 
                  key={path.id} 
                  value={path.id}
                  className="flex items-center gap-2 rounded-full"
                >
                  <span className={path.color}>{path.icon}</span>
                  <span className="hidden md:inline">{path.title}</span>
                  <span className="md:hidden">{path.title.slice(0, 4)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {pathTypes.map(path => (
              <TabsContent key={path.id} value={path.id} className="mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center max-w-2xl mx-auto mb-6 md:mb-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight leading-tight">{path.title} Path</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{path.description}</p>
                </motion.div>
                
                <div className="space-y-4 md:space-y-6">
                  {stepsByTab[path.id].map((step) => (
                    <motion.div
                      key={String(step.number)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Card className="group relative overflow-hidden border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out rounded-2xl md:rounded-3xl">
                        <div className={`absolute top-0 left-0 w-2 h-full rounded-l-2xl md:rounded-l-3xl ${
                          path.id === 'beginner' ? 'bg-green-500' :
                          path.id === 'intermediate' ? 'bg-blue-500' :
                          path.id === 'advanced' ? 'bg-purple-500' : 'bg-amber-500'
                        }`}></div>
                        
                        <CardContent className="p-4 md:p-6 pl-6 md:pl-8">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="md:w-8/12">
                              <div className="flex items-center gap-2 md:gap-3 mb-2">
                                <Badge variant="outline" className="rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center p-0 font-semibold text-xs md:text-sm">
                                  {step.number}
                                </Badge>
                                <h4 className="text-base md:text-lg font-semibold tracking-wide">{step.title}</h4>
                              </div>
                              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">{step.description}</p>
                              <div className="flex items-center text-xs md:text-sm text-muted-foreground font-medium">
                                <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                                <span>Duration: {step.duration}</span>
                              </div>
                            </div>
                            
                            <div className="md:w-4/12 space-y-2">
                              {step.resources.map((resource: {type: string, title: string, url: string}, idx: number) => (
                                <Link key={idx} href={resource.url}>
                                  <div className="flex items-center justify-between p-2 md:p-3 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/20 hover:bg-background/80 hover:border-primary/30 hover:scale-105 transition-all duration-300 ease-out group">
                                    <div className="flex items-center">
                                      <Badge variant="outline" className="mr-2 rounded-full text-xs md:text-sm">
                                        {resource.type}
                                      </Badge>
                                      <span className="text-xs md:text-sm font-medium">{resource.title}</span>
                                    </div>
                                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-6 md:mt-8">
                  <Link href={`/learning-paths#${path.id}`}>
                    <Button size="lg" className="rounded-full font-medium text-sm md:text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <Rocket className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      View Full {path.title} Path
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-background/70 backdrop-blur-xl border border-border/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Heart className="h-4 w-4 md:h-6 md:w-6 text-primary mr-2" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">Why Learn With Us</h2>
            <Heart className="h-4 w-4 md:h-6 md:w-6 text-primary ml-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Practical Approach</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Learn by doing with hands-on projects that simulate real-world scenarios and challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Industry-Relevant Skills</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Focus on the skills and tools that are currently in demand in the DevOps job market.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Community Support</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Connect with fellow learners and experienced professionals who can help you on your journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Structured Learning</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Follow clear, logical progression from fundamentals to advanced topics without gaps in knowledge.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Regularly Updated</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Content is continuously updated to reflect the latest tools, technologies, and best practices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div className="p-2 rounded-full bg-primary/15">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 tracking-wide">Career Growth</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Prepare for career advancement with materials aligned to industry certification requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>
    </div>
  );
}
