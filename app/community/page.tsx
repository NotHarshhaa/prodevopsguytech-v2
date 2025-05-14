'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BookOpen, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CommunityPage() {
  const communityOptions = [
    {
      id: 1,
      title: 'Discord Community',
      description: 'Join our active Discord server to connect with other members, ask questions, share resources, and participate in discussions.',
      icon: <MessageCircle className="h-6 w-6" />,
      buttonText: 'Join Discord',
      buttonUrl: 'https://discord.gg/prodevopsguy',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Knowledge Base',
      description: 'Access our comprehensive knowledge base with tutorials, guides, and best practices contributed by community members.',
      icon: <BookOpen className="h-6 w-6" />,
      buttonText: 'Browse Resources',
      buttonUrl: '/resources',
      color: 'green'
    },
    {
      id: 3,
      title: 'Contribute',
      description: 'Contribute to open-source projects, share your expertise, and help build valuable tools for the DevOps community.',
      icon: <Users className="h-6 w-6" />,
      buttonText: 'GitHub Projects',
      buttonUrl: 'https://github.com',
      color: 'purple'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Kubernetes Best Practices',
      description: 'Learn advanced Kubernetes deployment strategies and best practices for production environments.',
      date: 'June 15, 2023',
      time: '2:00 PM - 4:00 PM EDT',
      tag: 'Webinar',
      tagColor: 'blue'
    },
    {
      id: 2,
      title: 'Terraform Infrastructure as Code',
      description: 'Hands-on workshop on building reusable Terraform modules for multi-cloud deployments.',
      date: 'June 22, 2023',
      time: '1:00 PM - 5:00 PM EDT',
      tag: 'Workshop',
      tagColor: 'green'
    },
    {
      id: 3,
      title: 'DevSecOps Integration Strategies',
      description: 'Learn how to integrate security practices throughout the DevOps lifecycle with practical examples.',
      date: 'June 30, 2023',
      time: '3:00 PM - 5:00 PM EDT',
      tag: 'Meetup',
      tagColor: 'purple'
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
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">COMMUNITY</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Community</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Join a passionate community of DevOps and Cloud enthusiasts, where knowledge sharing and collaboration drive innovation.
          </p>
          <p className="text-muted-foreground">
            Our community brings together professionals, beginners, and enthusiasts from around the world to share knowledge, collaborate on projects, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {communityOptions.map((option) => (
            <Card key={option.id} className="border bg-card shadow-sm hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                  option.color === 'blue' && "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
                  option.color === 'green' && "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
                  option.color === 'purple' && "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
                )}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                {option.buttonUrl.startsWith('http') ? (
                  <a 
                    href={option.buttonUrl} 
                    className={cn(
                      "inline-flex items-center px-4 py-2 rounded-md font-medium text-sm",
                      option.color === 'blue' && "bg-blue-600 text-white hover:bg-blue-700",
                      option.color === 'green' && "bg-green-600 text-white hover:bg-green-700",
                      option.color === 'purple' && "bg-purple-600 text-white hover:bg-purple-700"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {option.buttonText}
                  </a>
                ) : (
                  <Link 
                    href={option.buttonUrl}
                    className={cn(
                      "inline-flex items-center px-4 py-2 rounded-md font-medium text-sm",
                      option.color === 'blue' && "bg-blue-600 text-white hover:bg-blue-700",
                      option.color === 'green' && "bg-green-600 text-white hover:bg-green-700",
                      option.color === 'purple' && "bg-purple-600 text-white hover:bg-purple-700"
                    )}
                  >
                    {option.buttonText}
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 py-16 px-4 rounded-lg mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Upcoming Community Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our virtual meetups, workshops, and webinars to learn from experts and connect with fellow community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <Card key={event.id} className="border overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getTagColorClass(event.tagColor)}>
                      {event.tag}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 px-6 py-3">
                  <a href="#" className="text-primary font-medium hover:underline">
                    Register Now
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center p-8 border rounded-lg bg-card shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-muted-foreground mb-6">
            Connect with like-minded professionals, learn from experts, and contribute to open-source projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/join">
              <Button size="lg">Join Community</Button>
            </Link>
            <a 
              href="https://discord.gg/prodevopsguy" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">Discord Server</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 