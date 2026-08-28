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
  ArrowRight,
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
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12 pb-12">
        <div className="container max-w-5xl px-4 sm:px-6 mx-auto">
          <div>
            <Link 
              href="/learning-paths"
              className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-primary mb-6 group"
            >
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Learning Paths</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3 border border-primary/20">
                {path.level}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight leading-tight text-foreground">{path.title}</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">{path.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-card border border-border/60 shadow-sm">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-primary shrink-0" />
                    <div>
                      <div className="font-bold text-foreground">{path.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/60 shadow-sm">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-primary shrink-0" />
                    <div>
                      <div className="font-bold text-foreground">{path.enrolled.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Enrolled</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/60 shadow-sm">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-3 text-amber-500 shrink-0" />
                    <div>
                      <div className="font-bold text-foreground">{path.completion_rate}%</div>
                      <div className="text-xs text-muted-foreground">Completion</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/60 shadow-sm">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 mr-3 text-emerald-500 shrink-0" />
                    <div>
                      <div className="font-bold text-foreground">{path.skills_gained.length} Skills</div>
                      <div className="text-xs text-muted-foreground">Competencies</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium tracking-wide">Course Progress</span>
                    <span className="text-sm text-muted-foreground font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <Button size="lg" className="px-8 rounded-full font-medium group">
                  {progress > 0 ? 'Continue Learning' : 'Start Learning'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              <TabsList className="grid w-full grid-cols-4 gap-4 bg-background/60 backdrop-blur-sm border-border/30 rounded-full p-1">
                <TabsTrigger value="curriculum" className="rounded-full">Curriculum</TabsTrigger>
                <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
                <TabsTrigger value="instructor" className="rounded-full">Instructor</TabsTrigger>
                <TabsTrigger value="resources" className="rounded-full">Resources</TabsTrigger>
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
                                className="flex items-center justify-between p-4 rounded-2xl border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
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
                                  <Button variant="outline" size="sm" className="rounded-full">
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
                <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 tracking-wide">Prerequisites</h3>
                  <ul className="space-y-2">
                    {path.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 tracking-wide">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {path.learning_objectives.map((objective, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 tracking-wide">Skills You'll Gain</h3>
                  <div className="flex flex-wrap gap-2">
                    {path.skills_gained.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-6">
                <div className="bg-background/60 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-lg">
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
                      <h3 className="text-xl font-semibold tracking-wide">{path.instructor.name}</h3>
                      <p className="text-muted-foreground font-medium">{path.instructor.role}</p>
                      <p className="mt-4 leading-relaxed">
                        An experienced DevOps professional with a passion for teaching and helping others succeed in their DevOps journey.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-6 rounded-2xl border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                    <h3 className="text-lg font-semibold mb-2 tracking-wide">Course Materials</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Access all course materials, including slides, code samples, and additional resources.
                    </p>
                    <Button variant="outline" className="rounded-full font-medium group">
                      <FileText className="mr-2 h-4 w-4" />
                      Download Materials
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="p-6 rounded-2xl border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                    <h3 className="text-lg font-semibold mb-2 tracking-wide">Community Forum</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Join our community forum to discuss course topics and get help from fellow learners.
                    </p>
                    <Button variant="outline" className="rounded-full font-medium group">
                      <Users className="mr-2 h-4 w-4" />
                      Join Forum
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="p-6 rounded-2xl border border-border/20 bg-background/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
                    <h3 className="text-lg font-semibold mb-2 tracking-wide">Certificate</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Complete the course to earn your certificate in DevOps Foundations.
                    </p>
                    <Button variant="outline" className="rounded-full font-medium group">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      View Sample Certificate
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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