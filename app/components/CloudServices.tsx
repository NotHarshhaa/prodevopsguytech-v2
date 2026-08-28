'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  CheckCircle2,
  Sparkles,
  Layers,
  Ship,
  Mountain,
  Activity,
  GitBranch,
  Terminal
} from "lucide-react";

interface ServiceItem {
  title: string;
  category: 'cloud' | 'containers' | 'observability';
  icon: typeof Cloud;
  description: string;
  features: string[];
  techPills: string[];
  colorClass: string;
  href: string;
}

const serviceList: ServiceItem[] = [
  {
    title: "AWS Cloud Architecture",
    category: "cloud",
    icon: Cloud,
    description: "Design resilient, highly available multi-region infrastructure following the AWS Well-Architected Framework.",
    features: ["VPC Peering & Transit Gateways", "IAM Least-Privilege Policies", "Auto-scaling EKS Clusters"],
    techPills: ["AWS EKS", "Terraform", "S3", "CloudFront"],
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    href: "/technologies/aws"
  },
  {
    title: "Azure Enterprise Cloud",
    category: "cloud",
    icon: Network,
    description: "Enterprise landing zones, secure networking, and continuous delivery with Azure Kubernetes Service & Azure DevOps.",
    features: ["AKS Fleet Management", "Azure Resource Manager & Bicep", "Zero-Trust Identity with Entra"],
    techPills: ["Azure AKS", "Virtual Networks", "Azure DevOps"],
    colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    href: "/technologies/azure"
  },
  {
    title: "Kubernetes & Microservices",
    category: "containers",
    icon: Layers,
    description: "Production cluster operations, service meshes, zero-downtime rolling deployments, and self-healing systems.",
    features: ["Helm Charts & Kustomize", "Ingress & Gateway API", "Node Auto-provisioning with Karpenter"],
    techPills: ["Kubernetes", "Karpenter", "Helm", "Istio"],
    colorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    href: "/technologies/kubernetes"
  },
  {
    title: "Docker & Container Security",
    category: "containers",
    icon: Ship,
    description: "Build tiny, hyper-optimized production containers with multi-stage caching and CVE security scanning.",
    features: ["Distroless & Alpine Bases", "Trivy & Grype Image Scanning", "Rootless Container Runtimes"],
    techPills: ["Docker", "Distroless", "Trivy", "Buildx"],
    colorClass: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    href: "/technologies/docker"
  },
  {
    title: "Terraform Infrastructure as Code",
    category: "containers",
    icon: Mountain,
    description: "Modular, declarative IaC blueprints with state locking, automated plans in CI/CD, and drift detection.",
    features: ["Reusable Module Architecture", "Remote State in S3 with DynamoDB", "TFLint & Checkov Validation"],
    techPills: ["Terraform", "Terragrunt", "Checkov"],
    colorClass: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    href: "/technologies/terraform"
  },
  {
    title: "Observability & SRE",
    category: "observability",
    icon: Activity,
    description: "Full-stack telemetry with Prometheus, Grafana, OpenTelemetry, and structured centralized log aggregation.",
    features: ["SLO/SLI Error Budget Tracking", "Automated Slack/PagerDuty Alerts", "Distributed Tracing with Jaeger"],
    techPills: ["Prometheus", "Grafana", "OpenTelemetry", "Loki"],
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    href: "/learning-paths"
  }
];

export default function CloudServices() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cloud' | 'containers' | 'observability'>('all');

  const filteredServices = selectedFilter === 'all' 
    ? serviceList 
    : serviceList.filter(s => s.category === selectedFilter);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-secondary/30 dark:bg-muted/20 border-y border-border/40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Cloud & Toolchain Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Production Architectures for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Modern Teams.
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">
              Deep dive into specialized cloud domains with hands-on blueprints and architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-card border border-border/60 overflow-x-auto shrink-0">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cloud', label: 'Cloud' },
              { id: 'containers', label: 'Containers & IaC' },
              { id: 'observability', label: 'Observability' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${service.colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techPills.map((pill) => (
                      <span
                        key={pill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-foreground border border-border/40"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}