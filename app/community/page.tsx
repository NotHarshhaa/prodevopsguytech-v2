'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, Users, Clock, ArrowRight, Github, MessageSquare, Calendar, Globe, Star } from "lucide-react";
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
              className="inline-flex items-center justify-center px-4 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4"
            >
              JOIN OUR COMMUNITY
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400">
              DevOps Community Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Join a passionate community of DevOps and Cloud enthusiasts, where knowledge sharing and collaboration drive innovation.
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
                    className="p-4 rounded-lg bg-muted/50 backdrop-blur-sm"
                  >
                    <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )}
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
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
                  "border bg-card shadow-sm transition-all duration-300",
                  hoveredCard === option.id ? "transform -translate-y-2 shadow-lg" : "hover:shadow-md"
                )}>
                  <CardContent className="pt-6">
                    <motion.div
                      animate={{
                        rotate: hoveredCard === option.id ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                        option.color === 'blue' && "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
                        option.color === 'green' && "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
                        option.color === 'purple' && "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                      )}
                    >
                      {option.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    
                    {/* Stats */}
                    <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                      {'memberCount' in option && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{option.memberCount} members</span>
                        </div>
                      )}
                      {'activeNow' in option && (
                        <div className="flex items-center">
                          <div className="h-2 w-2 bg-green-500 rounded-full mr-1" />
                          <span>{option.activeNow} online</span>
                        </div>
                      )}
                      {'articleCount' in option && (
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{option.articleCount} articles</span>
                        </div>
                      )}
                      {'projects' in option && (
                        <div className="flex items-center">
                          <Github className="h-4 w-4 mr-1" />
                          <span>{option.projects} projects</span>
                        </div>
                      )}
                    </div>

                    {option.buttonUrl.startsWith('http') ? (
                      <a 
                        href={option.buttonUrl} 
                        className={cn(
                          "inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition-all duration-300",
                          option.color === 'blue' && "bg-blue-600 text-white hover:bg-blue-700",
                          option.color === 'green' && "bg-green-600 text-white hover:bg-green-700",
                          option.color === 'purple' && "bg-purple-600 text-white hover:bg-purple-700"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {option.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <Link 
                        href={option.buttonUrl}
                        className={cn(
                          "inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition-all duration-300",
                          option.color === 'blue' && "bg-blue-600 text-white hover:bg-blue-700",
                          option.color === 'green' && "bg-green-600 text-white hover:bg-green-700",
                          option.color === 'purple' && "bg-purple-600 text-white hover:bg-purple-700"
                        )}
                      >
                        {option.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            className="bg-muted/50 backdrop-blur-sm py-12 md:py-16 px-4 rounded-lg mb-12 md:mb-16"
          >
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center justify-center px-4 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                UPCOMING EVENTS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary to-gray-400">
                Join Our Events
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Join our virtual meetups, workshops, and webinars to learn from experts and connect with fellow community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getTagColorClass(event.tagColor)}>
                          {event.tag}
                        </Badge>
                        <Badge variant="outline">{event.level}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>Speaker: {event.speaker}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/30 px-6 py-3 flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {event.attendees} spots left
                      </span>
                      <Button variant="default" size="sm" className="group">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            className="max-w-3xl mx-auto text-center p-8 md:p-12 border rounded-lg bg-card shadow-sm backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Ready to Join Our Community?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              Connect with like-minded professionals, learn from experts, and contribute to open-source projects.
              Join our growing community of DevOps enthusiasts today!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/join" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto group">
                  Join Community
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a 
                href="https://t.me/prodevopsguy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full md:w-auto group">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Telegram Server
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 