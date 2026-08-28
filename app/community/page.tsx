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
    <div className="min-h-screen overflow-x-hidden relative">
      <section className="relative pt-8 md:pt-14 pb-20">
        <div className="container max-w-7xl px-4 sm:px-6 mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Global Developer Network</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground leading-tight">
              DevOps Community{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                Hub
              </span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Connect with 15,000+ DevOps and Cloud practitioners worldwide. Share architectures, ask questions, and collaborate on open-source toolchains.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm text-center"
                  >
                    <Icon className="h-4 w-4 mx-auto mb-1.5 text-primary" />
                    <div className="text-xl sm:text-2xl font-bold text-foreground mb-0.5">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Community Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {communityOptions.map((option) => (
              <div
                key={option.id}
                className="rounded-3xl border border-border/60 bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center border",
                    option.color === 'blue' && "bg-blue-500/10 text-blue-500 border-blue-500/20",
                    option.color === 'green' && "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                    option.color === 'purple' && "bg-purple-500/10 text-purple-500 border-purple-500/20"
                  )}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  
                  {/* Channel Stats */}
                  <div className="flex flex-wrap gap-1.5 pt-1 text-xs text-muted-foreground">
                    {'memberCount' in option && (
                      <span className="px-2 py-0.5 rounded-md bg-secondary/80 text-foreground font-mono text-[11px] border border-border/40">
                        {option.memberCount} members
                      </span>
                    )}
                    {'activeNow' in option && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 font-mono text-[11px] border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                        {option.activeNow} online
                      </span>
                    )}
                    {'articleCount' in option && (
                      <span className="px-2 py-0.5 rounded-md bg-secondary/80 text-foreground font-mono text-[11px] border border-border/40">
                        {option.articleCount} guides
                      </span>
                    )}
                    {'projects' in option && (
                      <span className="px-2 py-0.5 rounded-md bg-secondary/80 text-foreground font-mono text-[11px] border border-border/40">
                        {option.projects} repositories
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-border/40">
                  <a 
                    href={option.buttonUrl}
                    target={option.buttonUrl.startsWith('http') ? "_blank" : undefined}
                    rel={option.buttonUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-full h-10 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>{option.buttonText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Events Section */}
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-10 mb-16 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-2 border border-primary/20">
                <Calendar className="h-3.5 w-3.5" />
                <span>Live Community Sessions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Upcoming Community Events
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mt-2">
                Join our interactive architecture reviews, live demos, and AMA sessions with industry specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="rounded-2xl border border-border/60 bg-background/50 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={getTagColorClass(event.tagColor)}>
                        {event.tag}
                      </Badge>
                      <span className="text-[11px] font-mono text-muted-foreground">{event.level}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground leading-snug">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{event.description}</p>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground pt-1 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      Speaker: <strong className="text-foreground">{event.speaker}</strong>
                    </span>
                    <Button size="sm" className="h-8 px-3 rounded-lg text-xs font-semibold">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join CTA Section */}
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 border border-border/60 rounded-3xl bg-card shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
              Ready to collaborate with DevOps engineers?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
              Join our active community discussions, get help with real-world infrastructure errors, and build your cloud network.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://t.me/prodevopsguy" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-10 px-6 rounded-full bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Join Telegram Group</span>
                </Button>
              </a>
              <Link href="/learning-paths">
                <Button variant="outline" className="h-10 px-6 rounded-full text-xs font-semibold border-border/70 bg-card">
                  Browse Roadmaps
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}