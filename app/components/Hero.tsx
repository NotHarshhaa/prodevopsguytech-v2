'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Rocket, 
  Code2, 
  Users, 
  Star, 
  Sparkles, 
  Terminal, 
  Check, 
  Copy, 
  Layers, 
  Cloud, 
  GitBranch,
  ShieldCheck,
  Zap
} from "lucide-react";

interface CodeSnippet {
  id: string;
  tabLabel: string;
  filename: string;
  language: string;
  icon: typeof Terminal;
  code: string;
  statusText: string;
}

const snippets: CodeSnippet[] = [
  {
    id: 'terraform',
    tabLabel: 'Terraform',
    filename: 'main.tf',
    language: 'hcl',
    icon: Cloud,
    code: `module "eks_cluster" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "prodevops-prod"
  cluster_version = "1.30"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    spot_nodes = {
      min_size     = 2
      max_size     = 10
      desired_size = 3
      instance_types = ["t3.medium", "t3a.medium"]
    }
  }
}`,
    statusText: 'Plan: 8 to add, 0 to change. Cluster online in us-east-1'
  },
  {
    id: 'kubernetes',
    tabLabel: 'Kubernetes',
    filename: 'deployment.yaml',
    language: 'yaml',
    icon: Layers,
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: cloud-api
  namespace: production
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: web
        image: registry.prodevopsguytech.com/api:v2.4
        resources:
          limits: { memory: "512Mi", cpu: "500m" }`,
    statusText: '5/5 pods healthy. 0 restarts in last 72 hours'
  },
  {
    id: 'docker',
    tabLabel: 'Docker',
    filename: 'Dockerfile',
    language: 'dockerfile',
    icon: Code2,
    code: `# Multi-stage lightweight production container
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
EXPOSE 3000
CMD ["server.js"]`,
    statusText: 'Image size: 38.2MB (Optimized with distroless)'
  },
  {
    id: 'cicd',
    tabLabel: 'CI/CD Pipeline',
    filename: '.github/workflows/deploy.yml',
    language: 'yaml',
    icon: GitBranch,
    code: `name: Production GitOps Deploy
on:
  push:
    branches: [main]
jobs:
  validate-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Trivy Vulnerability Scan
        run: trivy config ./k8s/ --severity HIGH,CRITICAL
      - name: Sync ArgoCD Application
        run: argocd app sync production-cluster --prune`,
    statusText: 'Pipeline passed: Lint ✓ Security ✓ GitOps Sync ✓'
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(snippets[0].id);
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets.find(s => s.id === activeTab) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Production Blueprints", value: "100+", icon: Rocket },
    { label: "DevOps Engineers", value: "15,000+", icon: Users },
    { label: "GitHub Community Stars", value: "2,000+", icon: Star },
    { label: "Production Uptime", value: "99.99%", icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* High-Tech Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen DevOps & Cloud Engineering</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Master Real-World{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400">
                DevOps, Cloud & GitOps.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Step-by-step infrastructure projects, zero-lag architectures, and production-tested guides for AWS, Azure, Docker, Kubernetes, and Terraform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link 
                href="https://projects.prodevopsguytech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="h-12 px-6 rounded-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Start Deploying</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="/learning-paths">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-12 px-6 rounded-full font-semibold border-border/80 bg-card/80 hover:bg-accent text-foreground transition-all hover:scale-[1.02] flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>Browse Learning Paths</span>
                </Button>
              </Link>
            </div>

            {/* Key Value Checks */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero fluff, 100% hands-on</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Production ready IaC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Free community access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive DevOps Terminal Simulator */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border/80 bg-slate-950/95 text-slate-100 shadow-2xl shadow-black/30 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    {currentSnippet.filename}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  type="button"
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors bg-slate-800/80 px-2 py-1 rounded-md"
                  aria-label="Copy snippet code"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Tool Tabs */}
              <div className="flex items-center gap-1 px-3 py-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto">
                {snippets.map((snippet) => {
                  const Icon = snippet.icon;
                  const isActive = snippet.id === activeTab;
                  return (
                    <button
                      key={snippet.id}
                      onClick={() => setActiveTab(snippet.id)}
                      type="button"
                      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all whitespace-nowrap ${
                        isActive 
                          ? 'bg-primary/20 text-cyan-300 border border-primary/40' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{snippet.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display Area */}
              <div className="p-4 font-mono text-[12px] leading-relaxed text-slate-300 overflow-x-auto min-h-[250px]">
                <pre className="selection:bg-cyan-500/30">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Live Simulated Status Bar */}
              <div className="px-4 py-2.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2 text-emerald-400 truncate">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="truncate">{currentSnippet.statusText}</span>
                </div>
                <span className="text-slate-500 shrink-0 hidden sm:inline">LIVE SIM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/40">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="p-4 rounded-2xl border border-border/50 bg-card/60 hover:bg-card transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}