'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, GitBranch, Terminal, Database, Cloud, Sparkles, Heart, TrendingUp, Star, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProjects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const particles = Array.from({ length: 6 }, (_, i) => ({
    left: `${(i * 23.19 + 11.3) % 100}%`,
    top: `${(i * 26.47 + 8.9) % 100}%`,
    animationDelay: `${(i * 0.67) % 5}s`,
    animationDuration: `${3 + ((i * 1.43) % 4)}s`
  }));

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-8 md:py-20 px-3 sm:px-4 overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
      </div>
      <div className="absolute left-0 right-0 top-1/2 -z-10 h-[400px] w-full">
        <div className="absolute left-1/4 w-full max-w-[50rem] h-[40rem] bg-gradient-to-r from-primary/20 to-primary/30 opacity-30 blur-[128px] rounded-full animate-pulse -translate-y-1/2"></div>
        <div className="absolute right-1/4 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-primary/20 to-primary/40 opacity-40 blur-[100px] rounded-full animate-pulse -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={particle}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4 md:space-y-6 lg:space-y-8"
          >
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-3 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
              >
                <Code2 className="h-3 w-3 md:h-4 md:w-4" />
                DevOps Projects
                <Code2 className="h-3 w-3 md:h-4 md:w-4" />
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                What will you ship?
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Build and deploy real-world DevOps projects. Learn by doing.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6"
            >
              <motion.div variants={fadeInUp}>
                <Card className="group relative overflow-hidden border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-500 ease-out rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="p-3 md:p-4 lg:p-6 relative">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="size-8 md:size-10 lg:size-12 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Terminal className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-medium text-primary tracking-wide">CI/CD Pipeline</span>
                        <h3 className="text-base md:text-lg font-semibold mt-1 group-hover:text-primary transition-colors tracking-wide">Kubernetes Deployment</h3>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">Build a complete CI/CD pipeline with GitHub Actions, Docker, and Kubernetes.</p>
                    <Button variant="ghost" className="group/btn px-0 hover:bg-transparent rounded-full">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium text-xs md:text-sm">View Project</span>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group relative overflow-hidden border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-500 ease-out rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <div className="p-3 md:p-4 lg:p-6 relative">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <div className="size-8 md:size-10 lg:size-12 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Cloud className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-medium text-primary tracking-wide">Infrastructure as Code</span>
                        <h3 className="text-base md:text-lg font-semibold mt-1 group-hover:text-primary transition-colors tracking-wide">AWS EKS Cluster</h3>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">Deploy a production-ready EKS cluster using Terraform and AWS best practices.</p>
                    <Button variant="ghost" className="group/btn px-0 hover:bg-transparent rounded-full">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors font-medium text-xs md:text-sm">View Project</span>
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-2 md:pt-4"
            >
              <Link href="https://projects.prodevopsguytech.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="group relative overflow-hidden rounded-full" 
                  variant="outline"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center font-medium">
                    <Rocket className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    View All Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="absolute inset-0 bg-primary/10 transform translate-y-[101%] transition-transform group-hover:translate-y-0 rounded-full" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Terminal Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[350px] lg:w-[400px] space-y-3 md:space-y-4 lg:space-y-6"
          >
            <Card className="border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg overflow-hidden rounded-2xl">
              <div className="p-2 md:p-3 lg:p-4 font-mono text-xs md:text-sm bg-muted/20">
                <div className="flex items-center gap-2 text-muted-foreground mb-2 md:mb-4">
                  <span className="size-2 md:size-3 rounded-full bg-red-500/80"></span>
                  <span className="size-2 md:size-3 rounded-full bg-yellow-500/80"></span>
                  <span className="size-2 md:size-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs ml-2 text-muted-foreground">Terminal</span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <p><span className="text-blue-400">$</span> kubectl get pods</p>
                  <div className="bg-muted/10 rounded-md p-2 md:p-3 my-2 md:my-3">
                    <p className="text-muted-foreground font-medium mb-1 md:mb-2 text-xs md:text-sm">NAME                     READY   STATUS    RESTARTS   AGE</p>
                    <p className="text-emerald-400 text-xs md:text-sm">web-7f4b9b6b5-x2jd9    1/1     Running   0          2m</p>
                    <p className="text-emerald-400 text-xs md:text-sm">api-6d8f7c9d4-k9p3n    1/1     Running   0          1m</p>
                    <p className="text-emerald-400 text-xs md:text-sm">db-5b4c8f3a2-w7v6m     1/1     Running   0          5m</p>
                  </div>
                  <p><span className="text-blue-400">$</span> <span className="animate-pulse">█</span></p>
                </div>
              </div>
            </Card>

            <Card className="border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg p-3 md:p-4 lg:p-6 rounded-2xl">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="size-8 md:size-10 rounded-full bg-emerald-500/15 flex items-center justify-center ring-2 ring-emerald-500/20">
                  <span className="text-xs md:text-sm font-medium text-emerald-500">S</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">System Status</p>
                  <div className="space-y-2 md:space-y-3">
                    <div className="inline-block rounded-full bg-muted/20 px-3 md:px-4 py-1 md:py-2 backdrop-blur-sm">
                      <p className="text-xs md:text-sm">All pods are running successfully. Cluster health: 100%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 md:size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs text-muted-foreground">Live Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg p-3 md:p-4 lg:p-6 rounded-2xl">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm md:text-base">Cluster Metrics</h3>
                  <span className="text-xs text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-full">Healthy</span>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <div>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="text-muted-foreground">CPU Usage</span>
                      <span>45%</span>
                    </div>
                    <div className="h-1 md:h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "45%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-blue-500/80 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="text-muted-foreground">Memory</span>
                      <span>68%</span>
                    </div>
                    <div className="h-1 md:h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "68%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-purple-500/80 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs md:text-sm mb-1">
                      <span className="text-muted-foreground">Network I/O</span>
                      <span>32%</span>
                    </div>
                    <div className="h-1 md:h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "32%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-emerald-500/80 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 