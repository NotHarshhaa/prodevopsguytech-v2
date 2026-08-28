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
    <div className="min-h-screen overflow-x-hidden relative">

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-14 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-xs font-bold text-orange-500 tracking-wider uppercase">Amazon Web Services</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Master the <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">AWS Cloud</span>
          </h1>
          
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Learn AWS infrastructure from scratch with battle-tested production blueprints, multi-tier VPCs, ECS microservices, and serverless architectures.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-12">
            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 mb-2 mx-auto">
                <Users className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-xl font-bold text-foreground mb-0.5">200+</div>
              <div className="text-xs text-muted-foreground font-medium">Services Covered</div>
            </div>
            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 mb-2 mx-auto">
                <TrendingUp className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-xl font-bold text-foreground mb-0.5">32%</div>
              <div className="text-xs text-muted-foreground font-medium">Global Cloud Share</div>
            </div>
            <div className="bg-card rounded-2xl border border-border/60 shadow-sm p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 mb-2 mx-auto">
                <Star className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-xl font-bold text-foreground mb-0.5">99.99%</div>
              <div className="text-xs text-muted-foreground font-medium">High Availability SLA</div>
            </div>
          </div>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
              Core AWS Services
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Master the essential building blocks powering modern enterprise applications on AWS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative rounded-3xl border border-border/60 bg-card p-6 transition-all duration-200 hover:border-orange-500/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-4 group-hover:scale-105 transition-transform">
                    <service.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-orange-500 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
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
