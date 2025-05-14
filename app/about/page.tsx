'use client';

import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LightbulbIcon, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const values = [
    {
      title: 'Practical Knowledge',
      description: 'We believe in learning by doing. All our resources are designed to provide hands-on experience with real-world applications.',
      icon: <LightbulbIcon className="h-6 w-6" />
    },
    {
      title: 'Community First',
      description: 'We foster a collaborative environment where members can share knowledge, contribute to projects, and grow together.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Continuous Learning',
      description: "We're committed to staying current with evolving technologies and continuously updating our resources to reflect industry best practices.",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];

  const focusPoints = [
    'Real-time DevOps & Cloud Projects (AWS, Azure, Terraform, Kubernetes, Docker & more)',
    'Automation scripts for tool installations & configurations',
    'In-depth interview questions and cheat sheets',
    'Curated learning paths for beginners to advanced engineers',
    'Building a collaborative space for open-source contributions and knowledge sharing'
  ];
  
  return (
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">ABOUT US</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ProDevOpsGuy Tech</h1>
          <p className="text-muted-foreground text-lg">
            A passionate community built for DevOps and Cloud enthusiasts, learners, and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              Our mission at ProDevOpsGuy Tech is to empower individuals by providing hands-on, real-world projects, practical learning paths, interview resources, and automation guides tailored for modern infrastructure and deployment practices.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that learning by doing is the most effective approach to mastering DevOps and Cloud technologies. That's why we focus on creating practical, real-world projects and resources that help you build valuable skills for your career.
            </p>
            <p className="text-muted-foreground">
              Whether you're just getting started or leveling up your DevOps journey, ProDevOpsGuy Tech is here to guide you with practical resources and a supportive tech community.
            </p>
          </div>
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What We Focus On</h3>
              <ul className="space-y-4">
                {focusPoints.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 py-16 px-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 