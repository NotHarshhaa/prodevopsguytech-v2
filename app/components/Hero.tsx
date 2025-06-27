'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Code, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { label: "Active Projects", value: "100+", icon: Code },
    { label: "Community Members", value: "15K+", icon: Users },
    { label: "GitHub Stars", value: "2K+", icon: Star },
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-pulse delay-1000" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10" />
        </div>
      </div>

      <section className="w-full pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="container px-4 mx-auto">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Your DevOps Journey Starts Here</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                Your complete platform for{' '}
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                    DevOps and Cloud.
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent blur-sm" />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl"
              >
                ProDevOpsGuy Tech provides the tools, resources, and community
                to build, learn, and master modern DevOps practices.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4 pt-4 md:pt-6"
              >
                <Link href="https://projects.prodevopsguytech.com/">
                  <Button size="lg" className="group relative overflow-hidden h-12 px-6 text-base">
                    <span className="relative z-10 flex items-center gap-2">
                      Start Deploying
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 transition-transform group-hover:scale-[1.05]" />
                  </Button>
                </Link>
                <Link href="/learning-paths">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-12 px-6 text-base relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get a Demo</span>
                    <span className="absolute inset-0 bg-primary/10 transform translate-y-[101%] transition-transform group-hover:translate-y-0" />
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 md:mt-16"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform" />
                      <div className="relative p-4 rounded-lg border border-border/50 backdrop-blur-sm">
                        <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 