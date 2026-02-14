'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Code, Users, Star, Sparkles, Heart, TrendingUp } from "lucide-react";
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
        {/* Original Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Enhanced Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 -z-10 w-full max-w-[50rem] h-[40rem] bg-gradient-to-r from-primary/20 to-primary/30 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute right-1/4 top-1/3 -z-10 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-primary/20 to-primary/40 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 -z-10 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-primary/25 to-primary/35 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <section className="w-full pt-16 md:pt-32 pb-6 md:pb-12">
        <div className="container px-3 sm:px-4 mx-auto">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 md:space-y-8"
            >
              {/* Enhanced Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                Your DevOps Journey Starts Here
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              </motion.div>

              {/* Enhanced Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
              >
                Your complete platform for{' '}
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
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
                className="text-base md:text-lg lg:text-xl text-muted-foreground mx-auto max-w-2xl leading-relaxed tracking-wide"
              >
                ProDevOpsGuy Tech provides the tools, resources, and community
                to build, learn, and master modern DevOps practices.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 pt-2 md:pt-6"
              >
                <Link href="https://projects.prodevopsguytech.com/">
                  <Button size="lg" className="group relative overflow-hidden h-10 md:h-12 px-4 md:px-8 text-sm md:text-base rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 ease-out border-0">
                    <span className="relative z-10 flex items-center gap-2 font-medium">
                      <Rocket className="h-4 w-4 md:h-5 md:w-5" />
                      Start Deploying
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Button>
                </Link>
                <Link href="/learning-paths">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-base relative overflow-hidden group rounded-full border-border/30 bg-background/50 hover:bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
                  >
                    <span className="relative z-10 font-medium">Get a Demo</span>
                  </Button>
                </Link>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-20"
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
                      <div className="relative p-3 md:p-6 rounded-2xl border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <div className="relative flex flex-col items-center text-center">
                          <div className="p-2 md:p-3 rounded-full bg-primary/15 mb-2 md:mb-3 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                            <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                          </div>
                          <div className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-1 tracking-tight">{stat.value}</div>
                          <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                        </div>
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