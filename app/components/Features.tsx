'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Server, Terminal, FileCheck, BookOpen, Users, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Features() {
  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: 'DevOps Projects & Templates',
      description: 'Access real-world DevOps project templates to enhance your skills and build an impressive portfolio.'
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: 'Ready-to-use Scripts',
      description: 'Save time with our collection of automation scripts, infrastructure templates, and deployment tools for DevOps and Cloud.'
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'DevOps Best Practices',
      description: 'Learn industry-standard practices for CI/CD, infrastructure as code, and cloud-native architectures to advance your career.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Comprehensive Documentation',
      description: 'Access our extensive library of guides, tutorials, and reference materials for DevOps tools and cloud platforms.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Support',
      description: 'Join our thriving community of DevOps professionals, cloud engineers, and tech enthusiasts to share knowledge and grow together.'
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: 'Open Contributions',
      description: 'We welcome new ideas and contributions to our platform. Whether you have project suggestions, want to contribute code, or share insights.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What you get with ProDevOpsGuy Tech</h2>
          <p className="text-lg text-muted-foreground">
            Elevate your DevOps and cloud engineering skills with our comprehensive resources, projects, and supportive community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={cn(
              "border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow",
              "overflow-hidden"
            )}>
              <CardHeader className="pb-2">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-3",
                  "bg-primary/10 text-primary"
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="px-0 text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 