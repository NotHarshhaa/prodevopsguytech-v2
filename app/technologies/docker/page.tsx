"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Container, 
  Package, 
  Layers, 
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
  Ship,
  Settings
} from "lucide-react";

export default function DockerPage() {
  const concepts = [
    { name: "Containers", description: "Lightweight, portable application packages", icon: Container },
    { name: "Images", description: "Read-only templates for creating containers", icon: Package },
    { name: "Dockerfile", description: "Text file with instructions to build images", icon: Code2 },
    { name: "Docker Compose", description: "Tool for defining multi-container applications", icon: Layers },
    { name: "Docker Hub", description: "Cloud-based registry for Docker images", icon: Globe },
    { name: "Docker Swarm", description: "Native clustering and orchestration", icon: Settings }
  ];

  const learningPaths = [
    {
      title: "Docker Fundamentals",
      description: "Learn the basics of containerization and Docker",
      duration: "3 weeks",
      level: "Beginner",
      topics: ["Container Basics", "Docker Images", "Dockerfile", "Docker Hub"]
    },
    {
      title: "Docker for Developers",
      description: "Integrate Docker into your development workflow",
      duration: "5 weeks",
      level: "Intermediate",
      topics: ["Multi-stage Builds", "Docker Compose", "Volume Management", "Networking"]
    },
    {
      title: "Docker Production",
      description: "Deploy and manage Docker containers in production",
      duration: "6 weeks",
      level: "Advanced",
      topics: ["Container Security", "Monitoring", "Orchestration", "CI/CD Integration"]
    }
  ];

  const projects = [
    {
      title: "Multi-Service Application",
      description: "Containerize a full-stack application with Docker Compose",
      tech: ["Docker", "Docker Compose", "Nginx", "PostgreSQL"],
      difficulty: "Intermediate"
    },
    {
      title: "Microservices API",
      description: "Build and deploy microservices using Docker containers",
      tech: ["Docker", "Node.js", "Redis", "MongoDB"],
      difficulty: "Beginner"
    },
    {
      title: "Production Deployment",
      description: "Deploy a scalable application with Docker Swarm",
      tech: ["Docker Swarm", "Load Balancer", "Monitoring", "Security"],
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* macOS Grill Pattern Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-300/20 blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-400/15 border border-blue-400/30 backdrop-blur-xl shadow-lg shadow-blue-400/10 mb-6">
            <Ship className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-wide">Docker</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Containerize <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">Everything</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Master Docker containerization with hands-on projects, best practices, and production-ready deployments.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/15 mb-4 mx-auto">
                <Container className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">20M+</div>
              <div className="text-sm text-muted-foreground font-medium">Containers Running</div>
            </div>
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/15 mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">85%</div>
              <div className="text-sm text-muted-foreground font-medium">Adoption Rate</div>
            </div>
            <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/15 mb-4 mx-auto">
                <Star className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">65K+</div>
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
              Core Docker Concepts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Master the fundamental concepts that make Docker powerful
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
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 ease-out hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-400/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400/15 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <concept.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors tracking-wide">
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
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-400/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="rounded-full bg-blue-400/15 text-blue-400 border-blue-400/30">
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">{path.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors tracking-wide">
                      {path.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    <div className="space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 rounded-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
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
              Apply your Docker knowledge with real-world containerization projects
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
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 ease-out hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-400/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="rounded-full border-blue-400/30 text-blue-400">
                        {project.difficulty}
                      </Badge>
                      <Code2 className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors tracking-wide">
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
              Ready to Containerize Your Applications?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have mastered Docker and transformed their deployment workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 rounded-full bg-blue-400 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
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
