'use client';

import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { 
  Rocket, 
  Settings, 
  BookOpen, 
  GitBranch, 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Users, 
  Layers, 
  ShieldCheck, 
  CheckCircle2,
  ExternalLink,
  Code2
} from "lucide-react";

export default function Features() {
  const stackTags = [
    { name: "AWS", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { name: "Azure", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "Kubernetes", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    { name: "Docker", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
    { name: "Terraform", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "GitOps (ArgoCD)", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/25 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Engineering Toolset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Everything you need to engineer{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              production-grade systems.
            </span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Practical, zero-fluff architecture blueprints, automated setup scripts, and structured curricula.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Bento Card 1: Wide Featured Project Card (Spans 2 cols on LG) */}
          <div className="lg:col-span-2 rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:border-primary/40 group relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Flagship Blueprint
                </span>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Real-Time DevOps & Cloud Projects
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Step-by-step implementations of complete enterprise stacks: highly available Kubernetes clusters on AWS EKS, automated Terraform provisioning, ArgoCD continuous delivery, and end-to-end monitoring.
                </p>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {stackTags.map((tag) => (
                  <span 
                    key={tag.name}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Full source code & architectural diagrams included
              </span>
              <a 
                href="https://projects.prodevopsguytech.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
              >
                <span>Browse Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Automation Scripts */}
          <div className="rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:border-purple-500/40 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-purple-500 transition-colors">
                  Automation Scripts & CLI Tools
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Battle-tested bash and python scripts to install, configure, and harden DevOps tools in minutes without manual guesswork.
                </p>
              </div>

              {/* Terminal Code Pill */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">curl -sSL get.prodevopsguytech.com/k8s | bash</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/40">
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-purple-500 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Automation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Learning Paths */}
          <div className="rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:border-emerald-500/40 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-emerald-500 transition-colors">
                  Structured Learning Paths
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Curated progression paths from beginner fundamentals (Linux & Git) to advanced Cloud Infrastructure and SRE concepts.
                </p>
              </div>

              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center justify-between p-2 rounded-lg bg-accent/40">
                  <span>DevOps Foundations</span>
                  <span className="font-semibold text-emerald-500">4 Weeks</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-accent/40">
                  <span>Kubernetes & GitOps</span>
                  <span className="font-semibold text-emerald-500">6 Weeks</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/40">
              <Link 
                href="/learning-paths" 
                className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-emerald-500 group-hover:translate-x-1 transition-transform"
              >
                <span>View All Paths</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Card 4: Interview & Cheatsheets */}
          <div className="rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:border-amber-500/40 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-amber-500 transition-colors">
                  Interview Prep & Cheatsheets
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Hundreds of scenario-based technical interview questions, architecture review questions, and quick syntax cheatsheets.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 font-mono">Docker</span>
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 font-mono">Kubernetes</span>
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 font-mono">AWS SRE</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/40">
              <Link 
                href="/resources" 
                className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-amber-500 group-hover:translate-x-1 transition-transform"
              >
                <span>Access Cheatsheets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bento Card 5: Active Community */}
          <div className="rounded-3xl border border-border/60 bg-card/70 hover:bg-card p-6 md:p-8 transition-all duration-200 hover:shadow-xl hover:border-blue-500/40 group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                  Thriving Tech Community
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Join 15,000+ active engineers across Telegram and GitHub. Get unblocked, share architectures, and collaborate on open-source projects.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">H</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">P</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">D</div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-background flex items-center justify-center text-[10px] font-bold text-white">+15k</div>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Engineers active now</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/40">
              <Link 
                href="/community" 
                className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-blue-500 group-hover:translate-x-1 transition-transform"
              >
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}