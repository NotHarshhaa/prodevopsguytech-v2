'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code2, 
  GitBranch, 
  Terminal, 
  Sparkles, 
  Star, 
  ExternalLink,
  Check,
  Copy,
  FolderGit2,
  Cpu,
  Layers
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  difficultyColor: string;
  description: string;
  tags: string[];
  githubUrl: string;
  cloneCmd: string;
  stars: string;
}

const projects: Project[] = [
  {
    id: 'k8s-gitops',
    title: 'End-to-End GitOps with ArgoCD & Kubernetes',
    difficulty: 'Advanced',
    difficultyColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    description: 'Zero-downtime microservices delivery pipeline running on Amazon EKS with automated Helm values syncing, canary deployments, and Slack alerting.',
    tags: ['Kubernetes', 'AWS EKS', 'ArgoCD', 'Helm', 'Prometheus'],
    githubUrl: 'https://projects.prodevopsguytech.com/',
    cloneCmd: 'git clone https://github.com/NotHarshhaa/k8s-gitops-production.git',
    stars: '620+'
  },
  {
    id: 'terraform-ha',
    title: 'High-Availability AWS Multi-Tier Web Architecture',
    difficulty: 'Intermediate',
    difficultyColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    description: 'Production-ready Terraform modules provisioning a multi-AZ VPC, ALB, Auto-scaling EC2 cluster, and encrypted Aurora PostgreSQL database.',
    tags: ['Terraform', 'AWS VPC', 'Aurora RDS', 'AutoScaling'],
    githubUrl: 'https://projects.prodevopsguytech.com/',
    cloneCmd: 'git clone https://github.com/NotHarshhaa/terraform-aws-multi-tier.git',
    stars: '480+'
  },
  {
    id: 'docker-security',
    title: 'Hardened Docker Container Pipeline & CVE Scanning',
    difficulty: 'Beginner',
    difficultyColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    description: 'Lightweight multi-stage Docker build pipeline integrated with GitHub Actions, Trivy security vulnerability scans, and distroless runtime images.',
    tags: ['Docker', 'GitHub Actions', 'Trivy', 'Distroless'],
    githubUrl: 'https://projects.prodevopsguytech.com/',
    cloneCmd: 'git clone https://github.com/NotHarshhaa/docker-hardened-pipeline.git',
    stars: '350+'
  },
  {
    id: 'observability-stack',
    title: 'Full-Stack Observability with Prometheus, Grafana & Loki',
    difficulty: 'Intermediate',
    difficultyColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    description: 'Complete centralized monitoring, distributed log collection, and pre-configured Grafana dashboards for cluster metrics and application SLOs.',
    tags: ['Prometheus', 'Grafana', 'Loki', 'Node Exporter'],
    githubUrl: 'https://projects.prodevopsguytech.com/',
    cloneCmd: 'git clone https://github.com/NotHarshhaa/cloud-observability-stack.git',
    stars: '410+'
  }
];

export default function FeaturedProjects() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Repositories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Featured DevOps{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Deployments.
              </span>
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">
              Production-ready, cloneable repositories with architecture blueprints, test suites, and deployment manifests.
            </p>
          </div>

          <a 
            href="https://projects.prodevopsguytech.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button 
              variant="outline" 
              className="h-10 px-5 rounded-full border-border/80 bg-card hover:bg-accent text-xs font-semibold flex items-center gap-2"
            >
              <span>Explore All 100+ Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const isCopied = copiedId === project.id;
            return (
              <div 
                key={project.id}
                className="rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-7 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Top bar: Difficulty & Stars */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${project.difficultyColor}`}>
                      {project.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-secondary/80 text-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Clone command preview */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                    <div className="flex items-center gap-2 truncate mr-2">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{project.cloneCmd}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(project.id, project.cloneCmd)}
                      className="text-slate-400 hover:text-slate-200 transition-colors p-1"
                      aria-label="Copy clone command"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-mono">
                    Open Source MIT
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Project Guide</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}