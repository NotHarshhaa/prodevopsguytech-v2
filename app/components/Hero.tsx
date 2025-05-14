'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon, Cpu, FileCode, BookOpen, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="pt-28 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ProDevOpsGuy <span className="text-primary">Tech</span> Community
          </h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals. We empower individuals through hands-on projects, learning paths, and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="https://projects.prodevopsguytech.com/">
              <Button size="lg" className="gap-2">
                Explore Projects
                <ChevronRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/learning-paths">
              <Button size="lg" variant="outline">
                Learning Paths
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-blue-100 text-blue-600",
                isDark && "bg-blue-950 text-blue-400"
              )}>
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time DevOps Projects</h3>
              <p className="text-muted-foreground">Work on industry-relevant projects to build your skills and portfolio.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-green-100 text-green-600",
                isDark && "bg-green-950 text-green-400"
              )}>
                <FileCode className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automation Scripts</h3>
              <p className="text-muted-foreground">Save time with our collection of automation scripts and tools.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-purple-100 text-purple-600",
                isDark && "bg-purple-950 text-purple-400"
              )}>
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview Resources</h3>
              <p className="text-muted-foreground">Prepare for DevOps and Cloud job interviews with our resources.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-card hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-amber-100 text-amber-600",
                isDark && "bg-amber-950 text-amber-400"
              )}>
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Paths</h3>
              <p className="text-muted-foreground">Follow structured paths to master DevOps and Cloud engineering skills.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 