'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="absolute left-0 right-0 top-1/4 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>
      <div className="absolute right-0 top-1/4 -z-10 h-[310px] w-[310px] rounded-full bg-secondary/20 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>

      <section className="pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="container px-4 mx-auto">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your complete platform for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/80 via-primary to-primary/80">
                DevOps and Cloud.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl">
              ProDevOpsGuy Tech provides the tools, resources, and community
              to build, learn, and master modern DevOps practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="https://projects.prodevopsguytech.com/">
                <Button size="lg" className="gap-2 h-10 md:h-12 px-4 md:px-6 text-sm md:text-base bg-primary hover:bg-primary/90">
                  Start Deploying
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learning-paths">
                <Button size="lg" variant="outline" className="h-10 md:h-12 px-4 md:px-6 text-sm md:text-base">
                  Get a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 