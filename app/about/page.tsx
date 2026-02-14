'use client';

import { useTheme } from '../context/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, Users, BookOpen, Code, Target, Rocket, ArrowRight, Globe, Award, Coffee, Zap, Shield, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const stats = [
    { label: 'Projects Completed', value: '100+', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { label: 'Community Members', value: '15,000+', icon: Users, color: 'from-green-500 to-emerald-500' },
    { label: 'Countries Reached', value: '50+', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { label: 'Success Stories', value: '500+', icon: Award, color: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      title: 'Practical Knowledge',
      description: 'We believe in learning by doing. All our resources are designed to provide hands-on experience with real-world applications.',
      icon: <LightbulbIcon className="h-6 w-6" />,
      color: 'blue',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-blue-500/15 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      title: 'Community First',
      description: 'We foster a collaborative environment where members can share knowledge, contribute to projects, and grow together.',
      icon: <Users className="h-6 w-6" />,
      color: 'green',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-green-500/15 text-green-600 dark:bg-green-900 dark:text-green-400'
    },
    {
      title: 'Continuous Learning',
      description: "We're committed to staying current with evolving technologies and continuously updating our resources to reflect industry best practices.",
      icon: <BookOpen className="h-6 w-6" />,
      color: 'purple',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-purple-500/15 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    }
  ];

  const focusPoints = [
    {
      title: 'Real-time DevOps & Cloud Projects',
      description: 'AWS, Azure, Terraform, Kubernetes, Docker & more',
      icon: <Code className="h-5 w-5" />,
      color: 'text-blue-500'
    },
    {
      title: 'Automation Scripts',
      description: 'Tool installations & configurations made easy',
      icon: <Rocket className="h-5 w-5" />,
      color: 'text-purple-500'
    },
    {
      title: 'Interview Preparation',
      description: 'In-depth questions and cheat sheets',
      icon: <Target className="h-5 w-5" />,
      color: 'text-green-500'
    },
    {
      title: 'Learning Paths',
      description: 'Curated paths from beginner to advanced',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'text-orange-500'
    },
    {
      title: 'Open Source',
      description: 'Collaborative space for contributions',
      icon: <Users className="h-5 w-5" />,
      color: 'text-pink-500'
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-primary/20 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
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

      <section className="relative pt-16 md:pt-32 pb-8 md:pb-16">
        <div className="container px-3 sm:px-4 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-6 md:mb-12 lg:mb-16 pt-2 md:pt-0"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-4 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
            >
              <Sparkles className="w-3 h-3 mr-2" />
              ABOUT US
              <Sparkles className="w-3 h-3 ml-2" />
            </motion.span>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
              About ProDevOpsGuy Tech
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 md:mb-12 max-w-2xl mx-auto">
              A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-3 md:p-6 rounded-2xl md:rounded-3xl bg-background/70 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <Icon className="h-5 w-5 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" />
                      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-1 md:mb-2 tracking-tight">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                Our Mission
              </h2>
              <div className="space-y-2 md:space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Our mission at ProDevOpsGuy Tech is to empower individuals by providing hands-on, real-world projects, practical learning paths, interview resources, and automation guides tailored for modern infrastructure and deployment practices.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  We believe that learning by doing is the most effective approach to mastering DevOps and Cloud technologies. That's why we focus on creating practical, real-world projects and resources that help you build valuable skills for your career.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  Whether you're just getting started or leveling up your DevOps journey, ProDevOpsGuy Tech is here to guide you with practical resources and a supportive tech community.
                </p>
                <div className="pt-2 md:pt-4">
                  <Link href="/get-started">
                    <Button className="group rounded-full text-sm md:text-base">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background/70 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out rounded-2xl md:rounded-3xl overflow-hidden group relative">
                <CardContent className="p-4 md:p-8 lg:p-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Zap className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 text-primary" />
                    <h3 className="text-lg md:text-3xl font-semibold tracking-wide bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">What We Focus On</h3>
                  </div>
                  <div className="space-y-3 md:space-y-6">
                    {focusPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 md:gap-4 group"
                      >
                        <div className={`p-1.5 md:p-3 rounded-full bg-gradient-to-r ${point.color}/15 to-transparent group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <div className={point.color}>
                            {point.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 group-hover:text-primary transition-colors tracking-wide">
                            {point.title}
                          </h4>
                          <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
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
            className="bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-xl py-8 md:py-20 px-4 md:px-12 rounded-2xl md:rounded-3xl border border-border/30 shadow-2xl relative overflow-hidden"
          >
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-4 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase">
                <Heart className="w-3 h-3 mr-2" />
                OUR VALUES
                <Heart className="w-3 h-3 ml-2" />
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400 tracking-tight leading-tight">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-background/70 backdrop-blur-xl border border-border/30 shadow-lg h-full hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out rounded-2xl md:rounded-3xl overflow-hidden group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardContent className="p-6 md:p-8 text-center relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6 ${value.iconBg} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 tracking-wide">{value.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
            className="max-w-3xl mx-auto text-center mt-12 md:mt-16"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 text-muted-foreground mb-8 md:mb-12">
              <Shield className="h-4 w-4 md:h-6 md:w-6 text-primary" />
              <span className="text-sm md:text-lg font-medium">Let's build something amazing together</span>
              <Shield className="h-4 w-4 md:h-6 md:w-6 text-primary" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/get-started">
                <Button size="lg" className="group rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-3 w-3 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="rounded-full px-6 py-4 md:px-8 md:py-6 text-sm md:text-base font-semibold border-2 hover:bg-primary/10 transition-all duration-300">
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