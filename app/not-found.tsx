"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10">
            <Search className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide">Page Not Found</span>
          </div>
        </motion.div>

        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary tracking-tight leading-tight">404</h1>
        </motion.div>

        {/* Floating Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg flex items-center justify-center">
              <Compass className="h-16 w-16 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Message Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">Lost in the Digital Void</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The page you're looking for seems to have wandered off into the digital wilderness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Don't worry though, our navigation systems are here to guide you back to familiar territory.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
            Go Back
          </Button>
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 ease-out group"
          >
            <Link href="/">
              <Home className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
              Return Home
            </Link>
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-background/60 backdrop-blur-xl rounded-2xl border border-border/20 shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Need Direction?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/resources" 
              className="group flex items-center justify-center gap-2 p-4 rounded-full bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-border/20 hover:border-primary/30"
            >
              <Search className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <span className="font-medium">Browse Resources</span>
            </Link>
            <Link 
              href="/learning-paths" 
              className="group flex items-center justify-center gap-2 p-4 rounded-full bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border border-border/20 hover:border-primary/30"
            >
              <Compass className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <span className="font-medium">Learning Paths</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 