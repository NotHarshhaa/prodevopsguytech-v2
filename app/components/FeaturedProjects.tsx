'use client';

import { useTheme } from '../context/ThemeContext';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: 'AWS EKS Cluster with Terraform',
    description: 'Deploy a production-ready Kubernetes cluster on AWS using Terraform and best practices.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'DevOps'],
    url: 'https://projects.prodevopsguytech.com/aws-eks-terraform'
  },
  {
    id: 2,
    title: 'CI/CD Pipeline with GitHub Actions',
    description: 'Build an end-to-end CI/CD pipeline using GitHub Actions for Docker containerized applications.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'DevOps'],
    url: 'https://projects.prodevopsguytech.com/github-actions-cicd'
  },
  {
    id: 3,
    title: 'Infrastructure Monitoring with Prometheus & Grafana',
    description: 'Set up comprehensive infrastructure monitoring using Prometheus and Grafana dashboards.',
    tags: ['Monitoring', 'Prometheus', 'Grafana', 'DevOps'],
    url: 'https://projects.prodevopsguytech.com/prometheus-grafana-monitoring'
  },
  {
    id: 4,
    title: 'Azure Kubernetes Service (AKS) Deployment',
    description: 'Deploy and manage applications on Azure Kubernetes Service following cloud-native best practices.',
    tags: ['Azure', 'Kubernetes', 'Cloud', 'DevOps'],
    url: 'https://projects.prodevopsguytech.com/azure-aks-deployment'
  }
];

export default function FeaturedProjects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our real-world DevOps and Cloud projects to enhance your skills with hands-on experience.
          </p>
        </div>
        
        {/* Mobile Carousel View */}
        <div className="lg:hidden mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2">
                  <ProjectCard project={project} isDark={isDark} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mb-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <a 
            href="https://projects.prodevopsguytech.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="default" className="gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0], isDark: boolean }) {
  return (
    <a 
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className={cn(
        "h-full border overflow-hidden transition-all", 
        "hover:shadow-md hover:border-primary/50"
      )}>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0 px-6 pb-6">
          <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Project
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </a>
  );
} 