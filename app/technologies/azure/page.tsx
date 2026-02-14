"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Cloud, 
  Server, 
  Database, 
  Shield, 
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
  Building2,
  Layers,
  Sparkles,
  Rocket,
  Heart
} from "lucide-react";

export default function AzurePage() {
  const services = [
    { name: "Virtual Machines", description: "Scalable compute instances", icon: Server, color: "from-blue-500 to-cyan-500" },
    { name: "Blob Storage", description: "Object storage for any data", icon: Database, color: "from-green-500 to-emerald-500" },
    { name: "Functions", description: "Serverless compute platform", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "SQL Database", description: "Managed SQL database service", icon: Database, color: "from-purple-500 to-pink-500" },
    { name: "CDN", description: "Global content delivery network", icon: Globe, color: "from-indigo-500 to-purple-500" },
    { name: "Active Directory", description: "Identity and access management", icon: Shield, color: "from-red-500 to-pink-500" }
  ];

  const learningPaths = [
    {
      title: "Azure Fundamentals",
      description: "Learn the basics of Azure services and cloud concepts",
      duration: "4 weeks",
      level: "Beginner",
      topics: ["Azure Portal", "Resource Groups", "Virtual Networks", "Storage Accounts"]
    },
    {
      title: "Azure Solutions Architect",
      description: "Design and implement Azure solutions for enterprise",
      duration: "10 weeks",
      level: "Intermediate",
      topics: ["ARM Templates", "Azure DevOps", "Monitoring", "Security"]
    },
    {
      title: "Azure DevOps Engineer",
      description: "Master CI/CD and infrastructure automation on Azure",
      duration: "8 weeks",
      level: "Advanced",
      topics: ["Azure Pipelines", "Bicep", "Azure Monitor", "Key Vault"]
    }
  ];

  const projects = [
    {
      title: "Enterprise Web Application",
      description: "Deploy a scalable web app with App Service and SQL Database",
      tech: ["App Service", "SQL Database", "Application Gateway", "Storage"],
      difficulty: "Intermediate"
    },
    {
      title: "Serverless API",
      description: "Build a REST API using Azure Functions and Cosmos DB",
      tech: ["Functions", "API Management", "Cosmos DB"],
      difficulty: "Beginner"
    },
    {
      title: "Microservices Architecture",
      description: "Deploy microservices using AKS and Service Bus",
      tech: ["AKS", "Service Bus", "Container Registry", "Monitor"],
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-blue-500/20 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-blue-400/20 to-cyan-500/20 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-indigo-500/20 to-blue-500/20 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-pulse"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/10 border border-blue-500/30 backdrop-blur-xl shadow-lg shadow-blue-500/10 mb-4 md:mb-6">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
            <span className="text-xs md:text-sm font-bold text-blue-500 tracking-widest uppercase">Microsoft Azure</span>
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 md:mb-6">
            Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">Future</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Master Microsoft Azure with comprehensive learning paths, hands-on projects, and enterprise-grade solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto mb-6 md:mb-12">
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500/15 mb-2 md:mb-4 mx-auto">
                  <Layers className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-1">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Services Available</div>
              </div>
            </div>
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500/15 mb-2 md:mb-4 mx-auto">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-1">21%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Market Share</div>
              </div>
            </div>
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500/15 mb-2 md:mb-4 mx-auto">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-1">99.95%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Uptime SLA</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              Core Azure Services
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore the essential Azure services that power modern cloud applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border/30 bg-background/70 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 ease-out hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/15 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors tracking-wide">
                      {service.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {service.description}
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
              Structured learning journeys designed for different skill levels
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
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="rounded-full bg-blue-500/15 text-blue-500 border-blue-500/30">
                        {path.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">{path.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors tracking-wide">
                      {path.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    <div className="space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-blue-500" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
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
              Apply your Azure knowledge with real-world projects
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
                <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-6 rounded-2xl transition-all duration-300 ease-out hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="rounded-full border-blue-500/30 text-blue-500">
                        {project.difficulty}
                      </Badge>
                      <Code2 className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition-colors tracking-wide">
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
              Ready to Master Azure?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have mastered Azure and built amazing cloud solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
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
