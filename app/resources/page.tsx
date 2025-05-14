'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const resources = [
    {
      id: 1,
      title: 'Real-Time Projects Hub',
      description: 'Work on real-world DevOps/Cloud projects.',
      url: 'https://projects.prodevopsguytech.com/',
      icon: '💻',
    },
    {
      id: 2,
      title: 'Ultimate Docs Portal',
      description: '900+ curated learning materials.',
      url: 'https://docs.prodevopsguytech.com/',
      icon: '📚',
    },
    {
      id: 3,
      title: 'Repositories Central',
      description: 'Scripts, infra, prep content, and more.',
      url: 'https://repos.prodevopsguytech.com/',
      icon: '📦',
    },
    {
      id: 4,
      title: 'Jobs Portal',
      description: 'Find your next opportunity in DevOps or Cloud.',
      url: 'https://jobs.prodevopsguytech.com/',
      icon: '🧭',
    },
    {
      id: 5,
      title: 'DevOps Blog',
      description: 'Learn from deep dives and practical guides.',
      url: 'https://blog.prodevopsguytech.com/',
      icon: '📰',
    },
    {
      id: 6,
      title: 'Cloud Blog',
      description: 'Learn from deep dives and practical guides.',
      url: 'https://cloud.prodevopsguytech.com/',
      icon: '☁️',
    },
    {
      id: 7,
      title: 'DevOps Tools Installations Hub',
      description: 'Guides for installing various DevOps tools.',
      url: 'https://devopsguides.site',
      icon: '🛠️',
    },
    {
      id: 8,
      title: 'DevOps Tools Cheatsheet',
      description: 'Quick reference guides for DevOps tools.',
      url: 'https://cheatsheet.prodevopsguytech.com',
      icon: '📋',
    },
  ];

  return (
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">RESOURCES</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            DevOps & Cloud Resources
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Empowering DevOps & Cloud Learners — One Resource at a Time
          </p>
          <p className="text-muted-foreground">
            I've created an ecosystem for DevOps enthusiasts, job-seekers, and practitioners — designed to make learning practical and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource) => (
            <Card 
              key={resource.id} 
              className="flex flex-col shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 flex-grow">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter className="p-0 mt-auto">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full p-3 text-center font-medium text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded-b-lg flex items-center justify-center gap-2"
                >
                  Visit Resource
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-card border rounded-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Never Stop Learning</h2>
          <p className="text-muted-foreground mb-6">
            These resources are continuously updated to reflect the latest industry trends and practices.
            Check back regularly for new content and learning opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://projects.prodevopsguytech.com/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg">Explore Projects</Button>
            </a>
            <Link href="/">
              <Button variant="outline" size="lg">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 