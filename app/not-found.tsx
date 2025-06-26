"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
        </motion.div>

        {/* Animated Space Explorer */}
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
          <div className="relative w-48 h-48 mx-auto">
            {/* You can replace this with an actual SVG or image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/50 rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-br from-primary to-primary/50 rounded-full opacity-40 animate-pulse delay-75" />
            <div className="absolute inset-8 bg-gradient-to-br from-primary to-primary/50 rounded-full opacity-60 animate-pulse delay-150" />
            <div className="absolute inset-12 bg-gradient-to-br from-primary to-primary/50 rounded-full opacity-80 animate-pulse delay-300" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Houston, We Have a Problem!</h2>
          <p className="text-muted-foreground mb-2">
            The page you're looking for has drifted into deep space.
          </p>
          <p className="text-muted-foreground">
            Don't worry though, our space crew is here to help you navigate back to safety.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-x-4"
        >
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            ← Go Back
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/">
              Return Home 🚀
            </Link>
          </Button>
        </motion.div>

        {/* Easter Egg - Click Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          <p>
            Lost in space? Try exploring our{" "}
            <Link href="/resources" className="text-primary hover:underline">
              resources
            </Link>
            {" "}or{" "}
            <Link href="/learning-paths" className="text-primary hover:underline">
              learning paths
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
} 