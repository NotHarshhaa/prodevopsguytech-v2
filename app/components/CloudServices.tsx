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
  Lock} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CloudServices() {
  const cloudMetrics = [
    { label: "Cloud Projects", value: "150+" },
    { label: "Success Rate", value: "99.9%" },
    { label: "Cloud Engineers", value: "50+" },
    { label: "Certifications", value: "200+" }
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

  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <div className="absolute left-0 right-0 top-1/2 -z-10 h-[400px] w-full">
        <div className="absolute left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2"></div>
        <div className="absolute right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-50 -translate-y-1/2"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade Cloud Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Build and deploy scalable applications with our comprehensive cloud services and expertise
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {cloudMetrics.map((metric) => (
            <Card key={metric.label} className="p-6 text-center bg-background/60 backdrop-blur-sm border-border/50">
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm p-6 hover:border-border transition-colors"
            >
              <div className={`size-12 rounded-lg bg-${service.color}-500/10 flex items-center justify-center mb-4`}>
                <service.icon className={`h-6 w-6 text-${service.color}-500`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <Link href={service.url} className="inline-flex">
                <Button variant="ghost" className="group/btn p-0">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Cloud Platform Logos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Trusted Cloud Platforms</h3>
            <p className="text-sm text-muted-foreground">We support and integrate with all major cloud providers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {cloudProviders.map((provider) => (
              <a 
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full no-underline"
              >
                <div 
                  className="relative group bg-background/60 backdrop-blur-sm rounded-lg p-6 hover:bg-background/80 transition-all duration-300 hover:scale-105 w-full"
                >
                  <div className="relative w-full flex flex-col items-center justify-center gap-3">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={provider.width}
                      height={provider.height}
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm text-muted-foreground text-center font-medium group-hover:text-primary transition-colors">
                      {provider.name}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 