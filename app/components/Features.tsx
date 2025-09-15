'use client';

import { Card } from "@/components/ui/card";
import { Rocket, Settings, BookOpen, Globe, GitBranch, LightbulbIcon, ArrowRight, Terminal, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
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
    <section className="py-16 md:py-24 px-4 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 mb-4">
            <LightbulbIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Features & Capabilities</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 tracking-tight leading-tight">
            Bringing DevOps to every engineer.
          </h2>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24"
        >
          {/* Real-time DevOps Projects */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-blue-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors tracking-wide">Real-time DevOps & Cloud Projects</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Hands-on projects with AWS, Azure, Terraform, Kubernetes, Docker & more.</p>
              <a href="https://projects.prodevopsguytech.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-blue-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>

          {/* Automation Scripts */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-purple-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition-colors tracking-wide">Automation Scripts</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Ready-to-use scripts for tool installations & configurations to streamline your workflow.</p>
              <a href="https://github.com/topics/devops-automation" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-purple-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>

          {/* Interview Resources */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-green-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-500 transition-colors tracking-wide">Interview Resources</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">In-depth interview questions and cheat sheets for DevOps and Cloud roles.</p>
              <a href="https://roadmap.sh/devops" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-green-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>

          {/* Learning Paths */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-orange-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors tracking-wide">Learning Paths</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Curated learning paths designed for beginners to advanced DevOps engineers.</p>
              <a href="https://learn.microsoft.com/en-us/devops/plan/what-is-devops" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-orange-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>

          {/* Version Control */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-indigo-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GitBranch className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-500 transition-colors tracking-wide">Version Control</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Master Git workflows and best practices for collaborative development.</p>
              <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-indigo-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>

          {/* Open Source */}
          <motion.div variants={fadeInUp}>
            <Card className="group relative overflow-hidden border-border/20 bg-background/60 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 size-12 rounded-full bg-yellow-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <LightbulbIcon className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-500 transition-colors tracking-wide">Open Source Community</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Building a collaborative space for open-source contributions and knowledge sharing.</p>
              <a href="https://opensource.guide/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-yellow-500 transition-colors font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Card>
          </motion.div>
        </motion.div>

        {/* Git Deploy and Collaborative Sections */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20"
        >
          {/* Git Deploy Section */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 text-primary mb-4 md:mb-6">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Git-connected Deploys</span>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
                From localhost to https, in seconds.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">Deploy from Git or your CLI.</p>
            </div>

            <Card className="border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg overflow-hidden rounded-2xl">
              <div className="p-6 font-mono text-sm bg-muted/20">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <span className="size-3 rounded-full bg-red-500/80"></span>
                  <span className="size-3 rounded-full bg-yellow-500/80"></span>
                  <span className="size-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="space-y-2">
                  <p><span className="text-blue-400">~</span> prodevopsguy-site/ git push</p>
                  <p className="text-muted-foreground">Enumerating objects: 1, done.</p>
                  <p className="text-muted-foreground">Counting objects: 100% (1/1), done.</p>
                  <p className="text-muted-foreground">Writing objects: 100% (1/1), 72 bytes</p>
                  <p className="text-muted-foreground">Total 1 (delta 0), reused 0 (delta 0)</p>
                  <p>To github.com:prodevopsguy/site.git</p>
                  <p><span className="text-primary">21326a9..8</span> <span className="text-muted-foreground">main → main</span></p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Collaborative Section */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 text-primary mb-4 md:mb-6">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Collaborative Learning</span>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
                Every deploy is remarkable.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">Chat with your team on real, production-grade projects, not just theory. Learn by doing.</p>
            </div>

            <div className="space-y-4">
              <motion.div
                variants={fadeInUp}
                className="transform hover:translate-y-[-2px] transition-transform"
              >
                <Card className="border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center ring-2 ring-blue-500/20">
                      <span className="text-sm font-medium text-blue-400">P</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">Pranath</p>
                      <div className="inline-block rounded-lg bg-muted/20 px-4 py-2 backdrop-blur-sm">
                        <p className="text-sm">Swapped out the <code className="text-xs bg-primary/20 rounded px-1.5 py-0.5">button</code> for some variants we needed.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="transform hover:translate-y-[-2px] transition-transform"
              >
                <Card className="border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-red-500/20 flex items-center justify-center ring-2 ring-red-500/20">
                      <span className="text-sm font-medium text-red-400">R</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-2">Rauno</p>
                      <div className="inline-block rounded-lg bg-muted/20 px-4 py-2 backdrop-blur-sm">
                        <p className="text-sm">I like it. Does this work with the brand tweaks <span className="text-primary">@mamuso</span>?</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Analytics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <div className="flex items-center gap-2 text-primary mb-4 md:mb-6">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21H4.6c-.6 0-1.1-.5-1.1-1.1V3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 15.5L14.5 11 9.5 16 5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium">Infrastructure Monitoring</span>
          </div>
          
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
              Real-time Infrastructure Analytics
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Monitor your cloud infrastructure, container health, and deployment metrics in real-time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="col-span-2 border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Infrastructure Health</h3>
                  <span className="text-sm text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">98.5% Uptime</span>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Kubernetes Pods</p>
                    <p className="text-2xl font-bold">45/46</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500/80 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">CPU Usage</p>
                    <p className="text-2xl font-bold">65%</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-blue-500/80 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">Memory</p>
                    <p className="text-2xl font-bold">82%</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "82%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-purple-500/80 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg p-8 rounded-2xl">
              <div className="h-full flex flex-col">
                <h3 className="font-semibold mb-6">Active Deployments</h3>
                <div className="flex-1 space-y-4">
                  <div className="p-3 rounded-lg bg-muted/20 flex items-center gap-3">
                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <p className="text-sm font-medium">Production</p>
                      <p className="text-xs text-muted-foreground">v2.1.0 - 2m ago</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/20 flex items-center gap-3">
                    <div className="size-2 rounded-full bg-blue-500 animate-pulse" />
                    <div>
                      <p className="text-sm font-medium">Staging</p>
                      <p className="text-xs text-muted-foreground">v2.1.1 - 30s ago</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/20 flex items-center gap-3">
                    <div className="size-2 rounded-full bg-purple-500 animate-pulse" />
                    <div>
                      <p className="text-sm font-medium">Development</p>
                      <p className="text-xs text-muted-foreground">v2.2.0 - 5s ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 