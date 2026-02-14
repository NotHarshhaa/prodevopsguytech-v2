"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Layers, 
  Package, 
  Server, 
  Zap, 
  Globe, 
  Code2,
  BookOpen,
  PlayCircle,
  ExternalLink,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Network,
  Settings,
  Shield,
  Sparkles,
  Rocket,
  Heart
} from "lucide-react";

export default function KubernetesPage() {
  const concepts = [
    { name: "Pods", description: "Smallest deployable units in Kubernetes", icon: Package, color: "from-blue-600 to-cyan-600" },
    { name: "Services", description: "Network abstraction for accessing pods", icon: Network, color: "from-green-600 to-emerald-600" },
    { name: "Deployments", description: "Manage replica sets and rolling updates", icon: Layers, color: "from-yellow-600 to-orange-600" },
    { name: "ConfigMaps", description: "Store configuration data separately", icon: Settings, color: "from-purple-600 to-pink-600" },
    { name: "Secrets", description: "Store sensitive data securely", icon: Shield, color: "from-indigo-600 to-purple-600" },
    { name: "Ingress", description: "Manage external access to services", icon: Globe, color: "from-red-600 to-pink-600" }
  ];

  const learningPaths = [
    {
      title: "Kubernetes Fundamentals",
      description: "Learn the basics of container orchestration",
      duration: "4 weeks",
      level: "Beginner",
      topics: ["Pods & Services", "Deployments", "ConfigMaps", "Basic Networking"]
    },
    {
      title: "Kubernetes Administration",
      description: "Master cluster management and operations",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Cluster Setup", "RBAC", "Monitoring", "Troubleshooting"]
    },
    {
      title: "Kubernetes Production",
      description: "Deploy and manage production workloads",
      duration: "8 weeks",
      level: "Advanced",
      topics: ["High Availability", "Security", "CI/CD", "Service Mesh"]
    }
  ];

  const projects = [
    {
      title: "Microservices Deployment",
      description: "Deploy a microservices architecture using Kubernetes",
      tech: ["Kubernetes", "Docker", "Helm", "Ingress"],
      difficulty: "Intermediate"
    },
    {
      title: "CI/CD Pipeline",
      description: "Build automated deployment pipeline with K8s",
      tech: ["Kubernetes", "Jenkins", "GitLab CI", "ArgoCD"],
      difficulty: "Advanced"
    },
    {
      title: "Multi-Tier Application",
      description: "Deploy a scalable web application with K8s",
      tech: ["Kubernetes", "PostgreSQL", "Redis", "Nginx"],
      difficulty: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-blue-600/20 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-blue-500/20 to-cyan-600/20 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-indigo-600/20 to-blue-600/20 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-4 pt-16 md:pt-32 pb-6 md:pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-600/30 backdrop-blur-xl shadow-lg shadow-blue-600/10 mb-4 md:mb-6">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-blue-600 tracking-widest uppercase">Kubernetes</span>
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 md:mb-6">
            Orchestrate <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">Containers</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Master Kubernetes container orchestration with comprehensive learning paths and production-ready deployments.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/15 mb-4 mx-auto">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">5M+</div>
              <div className="text-sm text-muted-foreground font-medium">Clusters Running</div>
            </div>
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/15 mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">78%</div>
              <div className="text-sm text-muted-foreground font-medium">Adoption Rate</div>
            </div>
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/15 mb-4 mx-auto">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">100K+</div>
              <div className="text-sm text-muted-foreground font-medium">GitHub Stars</div>
            </div>
          </div>
        </motion.div>

        {/* Core Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Core Kubernetes Concepts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Master the fundamental concepts that make Kubernetes powerful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 ease-out hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/15 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <concept.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors tracking-wide">
                      {concept.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Learning Paths
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Structured learning journeys from beginner to production expert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="rounded-full bg-blue-600/15 text-blue-600 border-blue-600/30">
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">{path.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors tracking-wide">
                      {path.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    <div className="space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <BookOpen className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      Start Learning
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Hands-On Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Apply your Kubernetes knowledge with real-world orchestration projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 ease-out hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="rounded-full border-blue-600/30 text-blue-600">
                        {project.difficulty}
                      </Badge>
                      <Code2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="rounded-full text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group">
                      <PlayCircle className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                      Start Project
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
              Ready to Orchestrate Your Containers?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have mastered Kubernetes and built scalable containerized applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <BookOpen className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                Browse Learning Paths
              </Button>
              <Button size="lg" variant="outline" className="px-8 rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group">
                <ExternalLink className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                View All Projects
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
