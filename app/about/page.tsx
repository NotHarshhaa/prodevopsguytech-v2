'use client';

import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, Users, BookOpen, Code, Target, Rocket, ArrowRight, Globe, Award, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const stats = [
    { label: 'Projects Completed', value: '100+', icon: Code },
    { label: 'Community Members', value: '15,000+', icon: Users },
    { label: 'Countries Reached', value: '50+', icon: Globe },
    { label: 'Success Stories', value: '500+', icon: Award },
  ];

  const values = [
    {
      title: 'Practical Knowledge',
      description: 'We believe in learning by doing. All our resources are designed to provide hands-on experience with real-world applications.',
      icon: <LightbulbIcon className="h-6 w-6" />,
      color: 'blue'
    },
    {
      title: 'Community First',
      description: 'We foster a collaborative environment where members can share knowledge, contribute to projects, and grow together.',
      icon: <Users className="h-6 w-6" />,
      color: 'green'
    },
    {
      title: 'Continuous Learning',
      description: "We're committed to staying current with evolving technologies and continuously updating our resources to reflect industry best practices.",
      icon: <BookOpen className="h-6 w-6" />,
      color: 'purple'
    }
  ];

  const focusPoints = [
    {
      title: 'Real-time DevOps & Cloud Projects',
      description: 'AWS, Azure, Terraform, Kubernetes, Docker & more',
      icon: <Code className="h-5 w-5" />
    },
    {
      title: 'Automation Scripts',
      description: 'Tool installations & configurations made easy',
      icon: <Rocket className="h-5 w-5" />
    },
    {
      title: 'Interview Preparation',
      description: 'In-depth questions and cheat sheets',
      icon: <Target className="h-5 w-5" />
    },
    {
      title: 'Learning Paths',
      description: 'Curated paths from beginner to advanced',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: 'Open Source',
      description: 'Collaborative space for contributions',
      icon: <Users className="h-5 w-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
        <div className="absolute inset-auto w-full max-w-[50rem] h-[40rem] bg-primary/30 opacity-20 blur-[128px] rounded-full animate-pulse" />
      </div>

      <section className="relative pt-28 md:pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16 pt-8 md:pt-0"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide"
            >
              ABOUT US
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
              About ProDevOpsGuy Tech
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-xl md:text-2xl font-bold text-primary mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                  </motion.div>
                )}
              )}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                Our Mission
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our mission at ProDevOpsGuy Tech is to empower individuals by providing hands-on, real-world projects, practical learning paths, interview resources, and automation guides tailored for modern infrastructure and deployment practices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that learning by doing is the most effective approach to mastering DevOps and Cloud technologies. That's why we focus on creating practical, real-world projects and resources that help you build valuable skills for your career.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're just getting started or leveling up your DevOps journey, ProDevOpsGuy Tech is here to guide you with practical resources and a supportive tech community.
                </p>
                <div className="pt-4">
                  <Link href="/get-started">
                    <Button className="group rounded-full">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 ease-out rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 tracking-wide">What We Focus On</h3>
                  <div className="space-y-6">
                    {focusPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="p-2 rounded-full bg-primary/15 text-primary group-hover:scale-110 transition-transform duration-300">
                          {point.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors tracking-wide">
                            {point.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background/60 backdrop-blur-xl py-8 sm:py-16 px-4 sm:px-8 rounded-2xl border border-border/20 shadow-lg"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-primary/15 text-primary rounded-full mb-4 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-wide">
                OUR VALUES
              </span>
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-background/60 backdrop-blur-xl border border-border/20 shadow-lg h-full hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out rounded-2xl">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                          value.color === 'blue' ? 'bg-blue-500/15 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                          value.color === 'green' ? 'bg-green-500/15 text-green-600 dark:bg-green-900 dark:text-green-400' :
                          'bg-purple-500/15 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                        }`}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 tracking-wide">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center mt-16"
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
              <Coffee className="h-5 w-5" />
              <span>Let's build something amazing together</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started">
                <Button size="lg" className="group rounded-full">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="rounded-full">
                  Join Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 