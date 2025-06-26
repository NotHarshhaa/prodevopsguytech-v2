'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Trophy,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
  PlayCircle,
  FileText,
  Code2,
  GraduationCap,
  Target
} from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { learningPathsData } from '../data/paths';
import type { LearningPath, Module } from '../data/paths';

export default function LearningPathPage() {
  const params = useParams();
  const slug = params.slug as string;
  const path = learningPathsData[slug];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    setProgress(35);
  }, []);

  if (!path) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
          <Link href="/learning-paths">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Paths
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTopicIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-4 w-4" />;
      case 'reading':
        return <FileText className="h-4 w-4" />;
      case 'exercise':
        return <Code2 className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-32 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/learning-paths"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Paths
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="outline">{path.level}</Badge>
              <h1 className="text-4xl font-bold mb-6">{path.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{path.description}</p>

              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{path.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{path.enrolled.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Enrolled</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{path.completion_rate}%</div>
                    <div className="text-sm text-muted-foreground">Completion</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{path.skills_gained.length}</div>
                    <div className="text-sm text-muted-foreground">Skills Gained</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 mr-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Course Progress</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <Button size="lg" className="px-8">
                  {progress > 0 ? 'Continue Learning' : 'Start Learning'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="curriculum" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 gap-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-6">
                <div className="space-y-2">
                  {path.modules.map((module) => (
                    <Accordion type="single" collapsible key={module.id}>
                      <AccordionItem value={`module-${module.id}`}>
                        <AccordionTrigger>
                          <div className="flex items-start">
                            <div>
                              <div className="font-medium text-left">{module.title}</div>
                              <div className="text-sm text-muted-foreground text-left">
                                {module.duration} • {module.topics.length} lessons
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            {module.topics.map((topic) => (
                              <div
                                key={topic.id}
                                className="flex items-center justify-between p-4 rounded-lg border bg-card"
                              >
                                <div className="flex items-center">
                                  {getTopicIcon(topic.type)}
                                  <div className="ml-4">
                                    <div className="font-medium">{topic.title}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {topic.type} • {topic.duration}
                                    </div>
                                  </div>
                                </div>
                                {topic.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : (
                                  <Button variant="outline" size="sm">
                                    Start
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {path.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {path.learning_objectives.map((objective, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Skills You'll Gain</h3>
                  <div className="flex flex-wrap gap-2">
                    {path.skills_gained.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={path.instructor.image}
                      alt={path.instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{path.instructor.name}</h3>
                    <p className="text-muted-foreground">{path.instructor.role}</p>
                    <p className="mt-4">
                      An experienced DevOps professional with a passion for teaching and helping others succeed in their DevOps journey.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-2">Course Materials</h3>
                    <p className="text-muted-foreground mb-4">
                      Access all course materials, including slides, code samples, and additional resources.
                    </p>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Download Materials
                    </Button>
                  </div>

                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
                    <p className="text-muted-foreground mb-4">
                      Join our community forum to discuss course topics and get help from fellow learners.
                    </p>
                    <Button variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Join Forum
                    </Button>
                  </div>

                  <div className="p-6 rounded-lg border bg-card">
                    <h3 className="text-lg font-semibold mb-2">Certificate</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete the course to earn your certificate in DevOps Foundations.
                    </p>
                    <Button variant="outline">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      View Sample Certificate
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
} 