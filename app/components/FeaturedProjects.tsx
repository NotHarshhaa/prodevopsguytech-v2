'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  return (
    <section className="py-12 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Main Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-medium">DevOps Projects</span>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">What will you ship?</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Build and deploy real-world DevOps projects. Learn by doing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="group relative overflow-hidden border border-border/50 bg-gradient-to-b from-background/50 to-background shadow-md hover:shadow-lg hover:border-border/80 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 md:p-6 relative">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">CI/CD Pipeline</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Kubernetes Deployment</h3>
                  <p className="text-muted-foreground text-sm mb-3 md:mb-4">Build a complete CI/CD pipeline with GitHub Actions, Docker, and Kubernetes.</p>
                  <Button variant="ghost" className="group/btn px-0">
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>

              <Card className="group relative overflow-hidden border border-border/50 bg-gradient-to-b from-background/50 to-background shadow-md hover:shadow-lg hover:border-border/80 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 md:p-6 relative">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <GitBranch className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium">Infrastructure as Code</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AWS EKS Cluster</h3>
                  <p className="text-muted-foreground text-sm mb-3 md:mb-4">Deploy a production-ready EKS cluster using Terraform and AWS best practices.</p>
                  <Button variant="ghost" className="group/btn px-0">
                    View Project
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="pt-4 md:pt-6">
              <Button className="group" variant="outline">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Terminal Preview */}
          <div className="w-full md:w-[400px] space-y-4 md:space-y-8">
            <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background shadow-md overflow-hidden">
              <div className="p-3 md:p-4 font-mono text-sm bg-muted/50">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <span className="size-3 rounded-full bg-red-500"></span>
                  <span className="size-3 rounded-full bg-yellow-500"></span>
                  <span className="size-3 rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-blue-500">$</span> kubectl get pods</p>
                  <p className="text-muted-foreground">NAME                     READY   STATUS    RESTARTS   AGE</p>
                  <p className="text-muted-foreground">web-7f4b9b6b5-x2jd9    1/1     Running   0          2m</p>
                  <p className="text-muted-foreground">api-6d8f7c9d4-k9p3n    1/1     Running   0          1m</p>
                  <p className="text-muted-foreground">db-5b4c8f3a2-w7v6m     1/1     Running   0          5m</p>
                  <p><span className="text-blue-500">$</span> <span className="animate-pulse">█</span></p>
                </div>
              </div>
            </Card>

            <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background shadow-md p-3 md:p-4">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-sm font-medium text-emerald-500">S</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-1">System</p>
                  <div className="inline-block rounded-lg bg-muted/50 px-3 py-2">
                    <p className="text-sm">All pods are running successfully. Cluster health: 100%</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 