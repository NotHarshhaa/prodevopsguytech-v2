'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function LearningPathsPage() {
  const learningPaths = [
    {
      id: 1,
      title: 'DevOps Foundations',
      description: 'Get started with the fundamentals of DevOps. Learn the core principles, tools, and practices.',
      level: 'Beginner',
      duration: '4 weeks',
      topics: [
        'Introduction to DevOps',
        'Git and Version Control',
        'Linux Fundamentals',
        'Basic Shell Scripting'
      ],
      url: '/learning-paths/devops-foundations'
    },
    {
      id: 2,
      title: 'Cloud Computing Essentials',
      description: 'Learn the core concepts and services offered by major cloud providers like AWS, Azure, and GCP.',
      level: 'Beginner',
      duration: '5 weeks',
      topics: [
        'Cloud Fundamentals',
        'IaaS, PaaS, and SaaS',
        'Storage Solutions',
        'Networking in the Cloud'
      ],
      url: '/learning-paths/cloud-essentials'
    },
    {
      id: 3,
      title: 'CI/CD Pipeline Implementation',
      description: 'Build automated pipelines for continuous integration and continuous deployment.',
      level: 'Intermediate',
      duration: '6 weeks',
      topics: [
        'Jenkins, GitLab CI',
        'GitHub Actions',
        'Docker for CI/CD',
        'Testing Strategies'
      ],
      url: '/learning-paths/cicd-implementation'
    },
    {
      id: 4,
      title: 'Kubernetes Mastery',
      description: 'Become proficient in deploying, managing, and scaling containerized applications with Kubernetes.',
      level: 'Intermediate',
      duration: '8 weeks',
      topics: [
        'Kubernetes Architecture',
        'Deployments and Services',
        'ConfigMaps and Secrets',
        'Persistent Storage'
      ],
      url: '/learning-paths/kubernetes-mastery'
    },
    {
      id: 5,
      title: 'Infrastructure as Code',
      description: 'Learn to provision and manage infrastructure using code with tools like Terraform and CloudFormation.',
      level: 'Intermediate',
      duration: '6 weeks',
      topics: [
        'Terraform Fundamentals',
        'AWS CloudFormation',
        'Azure Resource Manager',
        'IaC Best Practices'
      ],
      url: '/learning-paths/infrastructure-as-code'
    },
    {
      id: 6,
      title: 'Advanced Cloud Security',
      description: 'Master security best practices for cloud-native applications and infrastructure.',
      level: 'Advanced',
      duration: '7 weeks',
      topics: [
        'Identity and Access Management',
        'Network Security',
        'Data Protection',
        'Security Automation'
      ],
      url: '/learning-paths/cloud-security'
    },
    {
      id: 7,
      title: 'Site Reliability Engineering',
      description: 'Learn the principles and practices of SRE to build reliable and scalable systems.',
      level: 'Advanced',
      duration: '9 weeks',
      topics: [
        'Service Level Objectives',
        'Error Budgets',
        'Monitoring and Observability',
        'Incident Response'
      ],
      url: '/learning-paths/sre'
    },
    {
      id: 8,
      title: 'DevSecOps Implementation',
      description: 'Integrate security into your DevOps pipeline and practices.',
      level: 'Advanced',
      duration: '7 weeks',
      topics: [
        'Security as Code',
        'Vulnerability Management',
        'Compliance as Code',
        'Threat Modeling'
      ],
      url: '/learning-paths/devsecops'
    },
    {
      id: 9,
      title: 'Multi-Cloud Architecture',
      description: 'Design and implement solutions that leverage multiple cloud providers effectively.',
      level: 'Specialization',
      duration: '10 weeks',
      topics: [
        'Multi-Cloud Strategy',
        'Abstraction Layers',
        'Data Management',
        'Cost Optimization'
      ],
      url: '/learning-paths/multi-cloud'
    }
  ];

  const getLevelBadgeClass = (level: string): string => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Specialization':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      default:
        return '';
    }
  };

  const getPathCardClass = (level: string): string => {
    switch (level) {
      case 'Beginner':
        return 'border-l-4 border-green-500';
      case 'Intermediate':
        return 'border-l-4 border-blue-500';
      case 'Advanced':
        return 'border-l-4 border-purple-500';
      case 'Specialization':
        return 'border-l-4 border-amber-500';
      default:
        return '';
    }
  };
  
  return (
    <section className="pt-28 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-2">LEARNING PATHS</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            DevOps & Cloud Learning Paths
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Structured courses designed to take you from beginner to expert
          </p>
          <p className="text-muted-foreground">
            Our carefully crafted learning paths will guide you through the skills and knowledge you need to excel in DevOps and cloud technologies, with hands-on projects and practical examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPaths.map((path) => (
            <Card key={path.id} className={`shadow-sm hover:shadow-md transition-all ${getPathCardClass(path.level)}`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getLevelBadgeClass(path.level)}>
                    {path.level}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{path.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {path.title}
                </h3>
                <p className="text-muted-foreground mb-4">{path.description}</p>
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Topics Covered:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {path.topics.map((topic, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 inline-block"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-0">
                <Link 
                  href={path.url} 
                  className="w-full p-3 text-center font-medium text-primary hover:text-primary-foreground hover:bg-primary transition-colors rounded-b-lg"
                >
                  Explore Path
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 