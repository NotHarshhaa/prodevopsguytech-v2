'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Cloud, 
  Database, 
  Shield, 
  Cpu, 
  Network, 
  Lock,
  CheckCircle2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CloudServices() {
  const cloudMetrics = [
    { label: "Cloud Projects", value: "150+", icon: Cloud },
    { label: "Success Rate", value: "99.9%", icon: CheckCircle2 },
    { label: "Cloud Engineers", value: "50+", icon: Database },
    { label: "Certifications", value: "200+", icon: Shield }
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Build scalable and resilient infrastructure on AWS and Azure with best practices.",
      color: "blue",
      url: "/services/cloud-infrastructure"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Implement and manage cloud databases with high availability and performance.",
      color: "green",
      url: "/services/database-solutions"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your cloud infrastructure meets industry security standards and compliance.",
      color: "red",
      url: "/services/security-compliance"
    },
    {
      icon: Cpu,
      title: "Serverless Computing",
      description: "Deploy serverless applications with AWS Lambda and Azure Functions.",
      color: "purple",
      url: "/services/serverless-computing"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Design and implement secure cloud networks with VPCs and Virtual Networks.",
      color: "orange",
      url: "/services/cloud-networking"
    },
    {
      icon: Lock,
      title: "Identity & Access",
      description: "Manage cloud access with IAM, Role-Based Access Control, and SSO solutions.",
      color: "yellow",
      url: "/services/identity-access"
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      logo: "/images/cloud-logos/aws-logo.svg",
      width: 120,
      height: 48,
      url: "https://aws.amazon.com"
    },
    {
      name: "Microsoft Azure",
      logo: "/images/cloud-logos/azure-logo.svg",
      width: 120,
      height: 48,
      url: "https://azure.microsoft.com"
    },
    {
      name: "Google Cloud Platform",
      logo: "/images/cloud-logos/gcp-logo.svg",
      width: 140,
      height: 48,
      url: "https://cloud.google.com"
    },
    {
      name: "Alibaba Cloud",
      logo: "/images/cloud-logos/alibaba-logo.svg",
      width: 120,
      height: 80,
      url: "https://www.alibabacloud.com"
    },
    {
      name: "Digital Ocean",
      logo: "/images/cloud-logos/digitalocean-logo.svg",
      width: 120,
      height: 48,
      url: "https://www.digitalocean.com"
    },
    {
      name: "IBM Cloud",
      logo: "/images/cloud-logos/ibm-logo.svg",
      width: 120,
      height: 48,
      url: "https://www.ibm.com/cloud"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-12 md:py-24 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
      </div>
      <div className="absolute left-0 right-0 top-1/2 -z-10 h-[400px] w-full">
        <div className="absolute left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2 animate-pulse delay-700"></div>
      </div>

      <div className="container px-3 sm:px-4 mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 mb-4">
            <Cloud className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Cloud Solutions</span>
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 tracking-tight leading-tight">
            Enterprise-Grade Cloud Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Build and deploy scalable applications with our comprehensive cloud services and expertise
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {cloudMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div key={metric.label} variants={fadeInUp}>
                <Card className="group relative overflow-hidden p-4 md:p-6 text-center bg-background/60 backdrop-blur-xl border-border/20 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 transition-all duration-300 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="mb-3 md:mb-4 mx-auto size-10 md:size-12 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-2 tracking-tight">
                      {metric.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">{metric.label}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card 
                className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-4 md:p-6 lg:p-8 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 transition-all duration-300 ease-out"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className={`size-10 md:size-12 rounded-full bg-${service.color}-500/15 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-5 w-5 md:h-6 md:w-6 text-${service.color}-500`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors tracking-wide">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground text-sm mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.url} className="inline-flex">
                    <Button variant="ghost" className="group/btn p-0 hover:bg-transparent rounded-full">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium">Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Cloud Platform Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 mb-4">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary tracking-wide">Trusted Partners</span>
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 tracking-tight leading-tight">
              Trusted Cloud Platforms
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">We support and integrate with all major cloud providers</p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center"
          >
            {cloudProviders.map((provider, index) => (
              <motion.div key={provider.name} variants={fadeInUp}>
                <a 
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full no-underline"
                >
                  <div 
                    className="relative group bg-background/60 backdrop-blur-xl rounded-2xl p-4 hover:bg-background/80 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-primary/10 border border-border/20 hover:border-primary/30 w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative w-full flex flex-col items-center justify-center gap-2">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        width={provider.width}
                        height={provider.height}
                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-xs text-muted-foreground text-center font-medium group-hover:text-primary transition-colors tracking-wide">
                        {provider.name}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 