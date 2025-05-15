'use client';

import { Card } from "@/components/ui/card";
import { Rocket, Settings, BookOpen, Globe, GitBranch, LightbulbIcon, ArrowRight, Terminal, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-[2.5rem] font-bold text-center mb-8 md:mb-16">Bringing DevOps to every engineer.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {/* Real-time DevOps Projects */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Rocket className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time DevOps & Cloud Projects</h3>
            <p className="text-muted-foreground mb-6">Hands-on projects with AWS, Azure, Terraform, Kubernetes, Docker & more.</p>
            <a href="https://projects.prodevopsguytech.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>

          {/* Automation Scripts */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Settings className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automation Scripts</h3>
            <p className="text-muted-foreground mb-6">Ready-to-use scripts for tool installations & configurations to streamline your workflow.</p>
            <a href="https://github.com/topics/devops-automation" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>

          {/* Interview Resources */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interview Resources</h3>
            <p className="text-muted-foreground mb-6">In-depth interview questions and cheat sheets for DevOps and Cloud roles.</p>
            <a href="https://roadmap.sh/devops" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>

          {/* Learning Paths */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learning Paths</h3>
            <p className="text-muted-foreground mb-6">Curated learning paths designed for beginners to advanced DevOps engineers.</p>
            <a href="https://learn.microsoft.com/en-us/devops/plan/what-is-devops" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>

          {/* Version Control */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-indigo-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Version Control</h3>
            <p className="text-muted-foreground mb-6">Master Git workflows and best practices for collaborative development.</p>
            <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>

          {/* Open Source */}
          <Card className="group relative overflow-hidden border-border/50 bg-background/50 p-4 md:p-8 transition-all hover:border-foreground">
            <div className="mb-6 size-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <LightbulbIcon className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Open Source Community</h3>
            <p className="text-muted-foreground mb-6">Building a collaborative space for open-source contributions and knowledge sharing.</p>
            <a href="https://opensource.guide/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
        </div>

        {/* Git Deploy and Collaborative Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-8 md:gap-y-16">
          {/* Git Deploy Section */}
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3 md:mb-4">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-medium">Git-connected Deploys</span>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">From localhost to https, in seconds.</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Deploy from Git or your CLI.</p>
            </div>

            <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md overflow-hidden">
              <div className="p-4 font-mono text-sm bg-muted/20">
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <span className="size-3 rounded-full bg-red-500/80"></span>
                  <span className="size-3 rounded-full bg-yellow-500/80"></span>
                  <span className="size-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="space-y-1">
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
          </div>

          {/* Collaborative Section */}
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-3 md:mb-4">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Collaborative Learning</span>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Every deploy is remarkable.</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Chat with your team on real, production-grade projects, not just theory. Learn by doing.</p>
            </div>

            <div className="space-y-4">
              <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md p-4">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-400">P</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">Pranath</p>
                    <div className="inline-block rounded-lg bg-muted/20 px-3 py-2">
                      <p className="text-sm">Swapped out the <code className="text-xs bg-muted/30 rounded px-1">button</code> for some variants we needed.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md p-4">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-red-400">R</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-1">Rauno</p>
                    <div className="inline-block rounded-lg bg-muted/20 px-3 py-2">
                      <p className="text-sm">I like it. Does this work with the brand tweaks @mamuso?</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-12 md:mt-20">
          <div className="flex items-center gap-2 text-muted-foreground mb-3 md:mb-4">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21H4.6c-.6 0-1.1-.5-1.1-1.1V3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 15.5L14.5 11 9.5 16 5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium">Infrastructure Monitoring</span>
          </div>
          
          <div className="mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Real-time Infrastructure Analytics</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Monitor your cloud infrastructure, container health, and deployment metrics in real-time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="col-span-2 border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Infrastructure Health</h3>
                  <span className="text-sm text-emerald-400">98.5% Uptime</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Kubernetes Pods</p>
                    <p className="text-2xl font-bold">45/46</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-emerald-500/80 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">CPU Usage</p>
                    <p className="text-2xl font-bold">67%</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full w-[67%] bg-blue-500/80 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Memory</p>
                    <p className="text-2xl font-bold">78%</p>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-purple-500/80 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="border border-border/50 bg-gradient-to-b from-background/50 to-background/80 shadow-md p-6">
              <div className="h-full space-y-4">
                <h3 className="font-semibold">Deployment Stats</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Successful Deploys</span>
                      <span className="text-emerald-400">156</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Failed Deploys</span>
                      <span className="text-red-400">2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg Deploy Time</span>
                      <span className="text-blue-400">3m 24s</span>
                    </div>
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