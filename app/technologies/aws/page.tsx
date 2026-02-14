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
  Sparkles,
  Rocket,
  Heart
} from "lucide-react";

export default function AWSPage() {
  const services = [
    { name: "EC2", description: "Virtual servers in the cloud", icon: Server, color: "from-orange-500 to-red-500" },
    { name: "S3", description: "Object storage service", icon: Database, color: "from-blue-500 to-cyan-500" },
    { name: "Lambda", description: "Serverless compute", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "RDS", description: "Managed database service", icon: Database, color: "from-purple-500 to-pink-500" },
    { name: "CloudFront", description: "Content delivery network", icon: Globe, color: "from-green-500 to-emerald-500" },
    { name: "IAM", description: "Identity and access management", icon: Shield, color: "from-indigo-500 to-purple-500" }
  ];

  const learningPaths = [
    {
      title: "AWS Fundamentals",
      description: "Learn the basics of AWS services and architecture",
      duration: "4 weeks",
      level: "Beginner",
      topics: ["EC2 Basics", "S3 Storage", "IAM Security", "VPC Networking"]
    },
    {
      title: "AWS Solutions Architect",
      description: "Design and deploy scalable applications on AWS",
      duration: "8 weeks",
      level: "Intermediate",
      topics: ["Architecture Patterns", "Auto Scaling", "Load Balancing", "Monitoring"]
    },
    {
      title: "AWS DevOps Engineer",
      description: "Implement CI/CD pipelines and infrastructure automation",
      duration: "6 weeks",
      level: "Advanced",
      topics: ["CodePipeline", "CloudFormation", "Elastic Beanstalk", "CloudWatch"]
    }
  ];

  const projects = [
    {
      title: "Multi-Tier Web Application",
      description: "Deploy a scalable web app with EC2, RDS, and ELB",
      tech: ["EC2", "RDS", "ELB", "S3"],
      difficulty: "Intermediate"
    },
    {
      title: "Serverless API",
      description: "Build a REST API using Lambda and API Gateway",
      tech: ["Lambda", "API Gateway", "DynamoDB"],
      difficulty: "Beginner"
    },
    {
      title: "Containerized Microservices",
      description: "Deploy microservices using ECS and Fargate",
      tech: ["ECS", "Fargate", "ALB", "CloudWatch"],
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-orange-500/20 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-orange-400/20 to-red-500/20 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 backdrop-blur-xl shadow-lg shadow-orange-500/10 mb-4 md:mb-6">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
            <span className="text-xs md:text-sm font-bold text-orange-500 tracking-widest uppercase">Amazon Web Services</span>
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-3 md:mb-6">
            Master the <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">Cloud</span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            Learn AWS from the ground up with hands-on projects, real-world scenarios, and industry best practices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto mb-6 md:mb-12">
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-500/15 mb-2 md:mb-4 mx-auto">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">200+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Services Available</div>
              </div>
            </div>
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-500/15 mb-2 md:mb-4 mx-auto">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">32%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Market Share</div>
              </div>
            </div>
            <div className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-3 md:p-6 transition-all duration-500 ease-out hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-500/15 mb-2 md:mb-4 mx-auto">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-orange-500" />
                </div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">99.99%</div>
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
          className="mb-8 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              Core AWS Services
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Master the essential AWS services that power modern cloud applications
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
                <Card className="group relative overflow-hidden border-border/30 bg-background/70 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 ease-out hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500/15 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors tracking-wide">
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
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              Learning Paths
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
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
                <Card className="group relative overflow-hidden border-border/30 bg-background/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl transition-all duration-500 ease-out hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <Badge variant="secondary" className="rounded-full bg-orange-500/15 text-orange-500 border-orange-500/30 text-xs md:text-sm">
                        {path.level}
                      </Badge>
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">{path.duration}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-orange-500 transition-colors tracking-wide">
                      {path.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                      {path.description}
                    </p>
                    <div className="space-y-1 md:space-y-2">
                      {path.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 md:mt-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-2 transition-transform group-hover:scale-110" />
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
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              Hands-On Projects
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Apply your AWS knowledge with real-world projects
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
                <Card className="group relative overflow-hidden border-border/30 bg-background/70 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 ease-out hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <Badge variant="outline" className="rounded-full border-orange-500/30 text-orange-500 text-xs md:text-sm">
                        {project.difficulty}
                      </Badge>
                      <Code2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 group-hover:text-orange-500 transition-colors tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="rounded-full text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group">
                      <PlayCircle className="h-3 w-3 md:h-4 md:w-4 mr-2 transition-transform group-hover:scale-110" />
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
          <Card className="bg-background/70 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-border/30 shadow-lg hover:shadow-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Heart className="h-4 w-4 md:h-6 md:w-6 text-orange-500 mr-2" />
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ready to Start Your AWS Journey?
              </h2>
              <Heart className="h-4 w-4 md:h-6 md:w-6 text-orange-500 ml-2" />
            </div>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have mastered AWS and transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button size="lg" className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Rocket className="h-4 w-4 md:h-5 md:w-5 mr-2 transition-transform group-hover:scale-110" />
                Browse Learning Paths
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-3 md:px-8 md:py-4 rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group">
                <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-2 transition-transform group-hover:scale-110" />
                View All Projects
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
