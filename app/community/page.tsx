'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, Users, Clock, ArrowRight, Github, MessageSquare, Calendar, Globe, Star, Sparkles, Rocket, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function CommunityPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { label: 'Active Members', value: '10,000+', icon: Users },
    { label: 'Telegram Members', value: '15,000+', icon: MessageSquare },
    { label: 'GitHub Stars', value: '1,500+', icon: Star },
    { label: 'Countries', value: '50+', icon: Globe },
  ];

  const communityOptions = [
    {
      id: 1,
      title: 'Telegram Community',
      description: 'Join our active Discord server to connect with other members, ask questions, share resources, and participate in discussions.',
      icon: <MessageCircle className="h-6 w-6" />,
      buttonText: 'Join Telegram',
      buttonUrl: 'https://t.me/prodevopsguy',
      color: 'blue',
      memberCount: '15,000+',
      activeNow: '1000+'
    },
    {
      id: 2,
      title: 'Knowledge Base',
      description: 'Access our comprehensive knowledge base with tutorials, guides, and best practices contributed by community members.',
      icon: <BookOpen className="h-6 w-6" />,
      buttonText: 'Browse Resources',
      buttonUrl: '/resources',
      color: 'green',
      articleCount: '500+',
      contributors: '100+'
    },
    {
      id: 3,
      title: 'Contribute',
      description: 'Contribute to open-source projects, share your expertise, and help build valuable tools for the DevOps community.',
      icon: <Users className="h-6 w-6" />,
      buttonText: 'GitHub Projects',
      buttonUrl: 'https://github.com/NotHarshhaa',
      color: 'purple',
      projects: '25+',
      contributors: '250+'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Kubernetes Best Practices',
      description: 'Learn advanced Kubernetes deployment strategies and best practices for production environments.',
      date: 'June 28, 2025',
      time: '2:00 PM - 4:00 PM IST',
      tag: 'Webinar',
      tagColor: 'blue',
      attendees: 150,
      speaker: 'Sarah Johnson',
      level: 'Advanced'
    },
    {
      id: 2,
      title: 'Terraform Infrastructure as Code',
      description: 'Hands-on workshop on building reusable Terraform modules for multi-cloud deployments.',
      date: 'June 29, 2025',
      time: '1:00 PM - 5:00 PM IST',
      tag: 'Workshop',
      tagColor: 'green',
      attendees: 100,
      speaker: 'Mike Chen',
      level: 'Intermediate'
    },
    {
      id: 3,
      title: 'DevSecOps Integration Strategies',
      description: 'Learn how to integrate security practices throughout the DevOps lifecycle with practical examples.',
      date: 'June 30, 2025',
      time: '3:00 PM - 5:00 PM IST',
      tag: 'Meetup',
      tagColor: 'purple',
      attendees: 200,
      speaker: 'Alex Rivera',
      level: 'Intermediate'
    }
  ];

  const getTagColorClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px] -z-10" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full max-w-[50rem] h-[40rem] bg-gradient-to-r from-primary/20 to-primary/30 opacity-30 blur-[128px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-full max-w-[40rem] h-[30rem] bg-gradient-to-r from-primary/20 to-primary/40 opacity-40 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[30rem] h-[20rem] bg-gradient-to-r from-primary/25 to-primary/35 opacity-25 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
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

      <section className="relative pt-16 md:pt-32 pb-6 md:pb-12">
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
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-3 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
            >
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              Join Our Community
              <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
            </motion.span>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
              DevOps Community Hub
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4 md:mb-8">
              Join a passionate community of DevOps and Cloud enthusiasts, where knowledge sharing and collaboration drive innovation.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-8 lg:mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 md:p-4 rounded-2xl md:rounded-3xl bg-background/70 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <Icon className="h-4 w-4 md:h-6 md:w-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1 tracking-tight">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                    </div>
                  </motion.div>
                )}
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-12 lg:mb-16"
          >
            {communityOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(option.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className={cn(
                  "border border-border/30 bg-background/70 backdrop-blur-xl shadow-lg transition-all duration-500 ease-out rounded-2xl md:rounded-3xl relative overflow-hidden group",
                  hoveredCard === option.id ? "transform -translate-y-2 shadow-xl hover:scale-105" : "hover:shadow-xl hover:scale-105"
                )}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    option.color === 'blue' ? 'from-blue-500/20 to-blue-600/20' :
                    option.color === 'green' ? 'from-green-500/20 to-green-600/20' :
                    'from-purple-500/20 to-purple-600/20'
                  } opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardContent className="pt-4 md:pt-6 relative z-10">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === option.id ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300",
                        option.color === 'blue' && "bg-blue-500/15 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
                        option.color === 'green' && "bg-green-500/15 text-green-600 dark:bg-green-900 dark:text-green-400",
                        option.color === 'purple' && "bg-purple-500/15 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                      )}
                    >
                      {option.icon}
                    </motion.div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 tracking-wide group-hover:text-primary transition-colors">{option.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">{option.description}</p>
                    
                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 md:gap-4 text-xs text-muted-foreground mb-3 md:mb-4">
                      {'memberCount' in option && (
                        <div className="flex items-center bg-background/50 px-2 py-1 rounded-full">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{option.memberCount} members</span>
                        </div>
                      )}
                      {'activeNow' in option && (
                        <div className="flex items-center bg-background/50 px-2 py-1 rounded-full">
                          <div className="h-2 w-2 bg-green-500 rounded-full mr-1" />
                          <span>{option.activeNow} online</span>
                        </div>
                      )}
                      {'articleCount' in option && (
                        <div className="flex items-center bg-background/50 px-2 py-1 rounded-full">
                          <BookOpen className="h-3 w-3 mr-1" />
                          <span>{option.articleCount} articles</span>
                        </div>
                      )}
                      {'projects' in option && (
                        <div className="flex items-center bg-background/50 px-2 py-1 rounded-full">
                          <Github className="h-3 w-3 mr-1" />
                          <span>{option.projects} projects</span>
                        </div>
                      )}
                    </div>

                    {option.buttonUrl.startsWith('http') ? (
                      <a 
                        href={option.buttonUrl} 
                        className={cn(
                          "inline-flex items-center px-3 md:px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ease-out",
                          option.color === 'blue' && "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-105",
                          option.color === 'green' && "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:scale-105",
                          option.color === 'purple' && "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 hover:scale-105"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                        {option.buttonText}
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <Link 
                        href={option.buttonUrl}
                        className={cn(
                          "inline-flex items-center px-3 md:px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ease-out",
                          option.color === 'blue' && "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-105",
                          option.color === 'green' && "bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:scale-105",
                          option.color === 'purple' && "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 hover:scale-105"
                        )}
                      >
                        <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                        {option.buttonText}
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background/70 backdrop-blur-xl py-8 md:py-12 px-4 rounded-2xl md:rounded-3xl mb-8 md:mb-12 lg:mb-16 border border-border/30 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center mb-6 md:mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-bold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full mb-3 md:mb-6 border border-primary/30 backdrop-blur-xl shadow-lg shadow-primary/10 tracking-widest uppercase"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                Upcoming Events
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                Join Our Events
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join our virtual meetups, workshops, and webinars to learn from experts and connect with fellow community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border border-border/30 bg-background/70 backdrop-blur-xl overflow-hidden rounded-2xl md:rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getTagColorClass(event.tagColor)}>
                          {event.tag}
                        </Badge>
                        <Badge variant="outline" className="text-xs md:text-sm">{event.level}</Badge>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 tracking-wide">{event.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                          <span>Speaker: {event.speaker}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-background/40 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 flex justify-between items-center border-t border-border/20">
                      <span className="text-xs md:text-sm text-muted-foreground font-medium">
                        {event.attendees} spots left
                      </span>
                      <Button variant="default" size="sm" className="group rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white">
                        <Rocket className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                        <span className="text-xs md:text-sm">Register Now</span>
                        <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-center p-6 md:p-12 border border-border/30 rounded-2xl md:rounded-3xl bg-background/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Heart className="h-4 w-4 md:h-6 md:w-6 text-primary mr-2" />
              <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight leading-tight">
                Ready to Join Our Community?
              </h2>
              <Heart className="h-4 w-4 md:h-6 md:w-6 text-primary ml-2" />
            </div>
            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect with like-minded professionals, learn from experts, and contribute to open-source projects.
              Join our growing community of DevOps enthusiasts today!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
              <Link href="/join" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto group rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Rocket className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
              <a 
                href="https://t.me/prodevopsguy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full md:w-auto group rounded-full border-border/30 bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all duration-300">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Telegram Server</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}