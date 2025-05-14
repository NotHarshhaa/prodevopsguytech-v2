'use client';

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, MapPin, Calendar, Code, LineChart, BookOpen, Users, CloudCog, ShieldCheck, GitBranchPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GetStartedPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("beginner");
  
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
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">GET STARTED</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Begin Your DevOps Journey
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Follow our structured approach to master DevOps and cloud skills
          </p>
          <p className="text-muted-foreground">
            Whether you're just starting out or looking to level up your DevOps skills, we've created clear pathways to help you achieve your goals with hands-on projects and comprehensive resources.
          </p>
        </div>

        {/* Getting Started Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedSteps.map((step, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="pt-6 pb-0 h-full flex flex-col">
                  <div className="mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center mb-6 flex-grow">{step.description}</p>
                  <div className="mt-auto pb-4">
                    <Link href={step.url} className="w-full">
                      <Button className="w-full">{step.action}</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Choose Your Learning Path</h2>
          
          <Tabs defaultValue="beginner" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {pathTypes.map(path => (
                <TabsTrigger 
                  key={path.id} 
                  value={path.id}
                  className="flex items-center gap-2"
                >
                  <span className={path.color}>{path.icon}</span>
                  <span>{path.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {pathTypes.map(path => (
              <TabsContent key={path.id} value={path.id} className="mt-0">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-xl font-bold mb-2">{path.title} Path</h3>
                  <p className="text-muted-foreground">{path.description}</p>
                </div>
                
                <div className="space-y-6">
                  {stepsByTab[path.id].map((step) => (
                    <Card key={String(step.number)} className="relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-2 h-full ${
                        path.id === 'beginner' ? 'bg-green-500' :
                        path.id === 'intermediate' ? 'bg-blue-500' :
                        path.id === 'advanced' ? 'bg-purple-500' : 'bg-amber-500'
                      }`}></div>
                      
                      <CardContent className="p-6 pl-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="md:w-8/12">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="rounded-full h-8 w-8 flex items-center justify-center p-0">
                                {step.number}
                              </Badge>
                              <h4 className="text-lg font-semibold">{step.title}</h4>
                            </div>
                            <p className="text-muted-foreground mb-4">{step.description}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Duration: {step.duration}</span>
                            </div>
                          </div>
                          
                          <div className="md:w-4/12 space-y-2">
                            {step.resources.map((resource: {type: string, title: string, url: string}, idx: number) => (
                              <Link key={idx} href={resource.url}>
                                <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors">
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">
                                      {resource.type}
                                    </Badge>
                                    <span className="text-sm font-medium">{resource.title}</span>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Link href={`/learning-paths#${path.id}`}>
                    <Button size="lg">View Full {path.title} Path</Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Learn With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Practical Approach</h3>
                <p className="text-muted-foreground">
                  Learn by doing with hands-on projects that simulate real-world scenarios and challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Industry-Relevant Skills</h3>
                <p className="text-muted-foreground">
                  Focus on the skills and tools that are currently in demand in the DevOps job market.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  Connect with fellow learners and experienced professionals who can help you on your journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Structured Learning</h3>
                <p className="text-muted-foreground">
                  Follow clear, logical progression from fundamentals to advanced topics without gaps in knowledge.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Regularly Updated</h3>
                <p className="text-muted-foreground">
                  Content is continuously updated to reflect the latest tools, technologies, and best practices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
                <p className="text-muted-foreground">
                  Prepare for career advancement with materials aligned to industry certification requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 