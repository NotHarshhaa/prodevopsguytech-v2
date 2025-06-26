interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
  topics: {
    id: number;
    title: string;
    type: 'video' | 'reading' | 'exercise';
    duration: string;
    completed?: boolean;
  }[];
}

interface LearningPath {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Specialization';
  duration: string;
  enrolled: number;
  completion_rate: number;
  topics: string[];
  url: string;
  prerequisites: string[];
  learning_objectives: string[];
  modules: Module[];
  skills_gained: string[];
  instructor: {
    name: string;
    role: string;
    image: string;
  };
}

export const learningPathsData: Record<string, LearningPath> = {
  'devops-foundations': {
    id: 1,
    title: 'DevOps Foundations',
    description: 'Get started with the fundamentals of DevOps. Learn the core principles, tools, and practices.',
    level: 'Beginner',
    duration: '4 weeks',
    enrolled: 1234,
    completion_rate: 85,
    topics: [
      'Introduction to DevOps',
      'Git and Version Control',
      'Linux Fundamentals',
      'Basic Shell Scripting'
    ],
    url: '/learning-paths/devops-foundations',
    prerequisites: [
      'Basic understanding of software development',
      'Familiarity with command line interface',
      'Basic knowledge of operating systems'
    ],
    learning_objectives: [
      'Understand DevOps culture and principles',
      'Master version control with Git',
      'Learn Linux system administration',
      'Create and manage shell scripts',
      'Implement basic automation'
    ],
    modules: [
      {
        id: 1,
        title: 'Understanding DevOps',
        duration: '1 week',
        description: 'Learn the fundamental concepts and principles of DevOps methodology.',
        topics: [
          {
            id: 1,
            title: 'What is DevOps?',
            type: 'video',
            duration: '15 min',
            completed: true
          },
          {
            id: 2,
            title: 'DevOps Culture and Principles',
            type: 'reading',
            duration: '20 min',
            completed: true
          },
          {
            id: 3,
            title: 'DevOps Practices and Tools Overview',
            type: 'video',
            duration: '25 min',
            completed: false
          },
          {
            id: 4,
            title: 'Implementing DevOps Practices - Exercise',
            type: 'exercise',
            duration: '45 min',
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'Version Control with Git',
        duration: '1 week',
        description: 'Master Git for version control and collaboration.',
        topics: [
          {
            id: 1,
            title: 'Git Basics',
            type: 'video',
            duration: '20 min',
            completed: false
          },
          {
            id: 2,
            title: 'Branching and Merging',
            type: 'reading',
            duration: '30 min',
            completed: false
          },
          {
            id: 3,
            title: 'Hands-on Git Exercise',
            type: 'exercise',
            duration: '1 hour',
            completed: false
          }
        ]
      }
    ],
    skills_gained: [
      'Git Version Control',
      'Linux Administration',
      'Shell Scripting',
      'DevOps Practices',
      'Automation Basics'
    ],
    instructor: {
      name: 'Sarah Johnson',
      role: 'Senior DevOps Engineer',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=Sarah'
    }
  },
  'cloud-essentials': {
    id: 2,
    title: 'Cloud Computing Essentials',
    description: 'Learn the core concepts and services offered by major cloud providers like AWS, Azure, and GCP.',
    level: 'Beginner',
    duration: '5 weeks',
    enrolled: 2156,
    completion_rate: 78,
    topics: [
      'Cloud Fundamentals',
      'IaaS, PaaS, and SaaS',
      'Storage Solutions',
      'Networking in the Cloud'
    ],
    url: '/learning-paths/cloud-essentials',
    prerequisites: [
      'Basic understanding of IT concepts',
      'Familiarity with virtualization',
      'Basic networking knowledge'
    ],
    learning_objectives: [
      'Understand cloud computing models',
      'Compare major cloud providers',
      'Deploy cloud infrastructure',
      'Manage cloud resources',
      'Implement cloud security basics'
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to Cloud Computing',
        duration: '1 week',
        description: 'Understanding cloud computing fundamentals and service models.',
        topics: [
          {
            id: 1,
            title: 'What is Cloud Computing?',
            type: 'video',
            duration: '20 min',
            completed: true
          },
          {
            id: 2,
            title: 'Cloud Service Models',
            type: 'reading',
            duration: '30 min',
            completed: true
          },
          {
            id: 3,
            title: 'Cloud Deployment Models',
            type: 'video',
            duration: '25 min',
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'Major Cloud Providers',
        duration: '2 weeks',
        description: 'Deep dive into AWS, Azure, and GCP services.',
        topics: [
          {
            id: 1,
            title: 'AWS Core Services',
            type: 'video',
            duration: '45 min',
            completed: false
          },
          {
            id: 2,
            title: 'Azure Fundamentals',
            type: 'reading',
            duration: '40 min',
            completed: false
          },
          {
            id: 3,
            title: 'GCP Basics',
            type: 'video',
            duration: '35 min',
            completed: false
          }
        ]
      }
    ],
    skills_gained: [
      'Cloud Architecture',
      'Multi-cloud Management',
      'Cloud Security',
      'Resource Optimization',
      'Cost Management'
    ],
    instructor: {
      name: 'Michael Chen',
      role: 'Cloud Solutions Architect',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=Michael'
    }
  },
  'cicd-implementation': {
    id: 3,
    title: 'CI/CD Pipeline Implementation',
    description: 'Build automated pipelines for continuous integration and continuous deployment.',
    level: 'Intermediate',
    duration: '6 weeks',
    enrolled: 1876,
    completion_rate: 75,
    topics: [
      'Jenkins, GitLab CI',
      'GitHub Actions',
      'Docker for CI/CD',
      'Testing Strategies'
    ],
    url: '/learning-paths/cicd-implementation',
    prerequisites: [
      'Basic Git knowledge',
      'Understanding of build processes',
      'Basic scripting skills'
    ],
    learning_objectives: [
      'Design CI/CD pipelines',
      'Implement automated testing',
      'Configure deployment strategies',
      'Manage pipeline security',
      'Monitor pipeline performance'
    ],
    modules: [
      {
        id: 1,
        title: 'CI/CD Fundamentals',
        duration: '1 week',
        description: 'Understanding CI/CD concepts and best practices.',
        topics: [
          {
            id: 1,
            title: 'CI/CD Introduction',
            type: 'video',
            duration: '30 min',
            completed: false
          },
          {
            id: 2,
            title: 'Pipeline Components',
            type: 'reading',
            duration: '25 min',
            completed: false
          },
          {
            id: 3,
            title: 'Building Your First Pipeline',
            type: 'exercise',
            duration: '1 hour',
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: 'Jenkins Deep Dive',
        duration: '2 weeks',
        description: 'Master Jenkins for CI/CD implementation.',
        topics: [
          {
            id: 1,
            title: 'Jenkins Setup',
            type: 'video',
            duration: '45 min',
            completed: false
          },
          {
            id: 2,
            title: 'Pipeline as Code',
            type: 'exercise',
            duration: '1.5 hours',
            completed: false
          },
          {
            id: 3,
            title: 'Jenkins Security',
            type: 'reading',
            duration: '40 min',
            completed: false
          }
        ]
      }
    ],
    skills_gained: [
      'Pipeline Design',
      'Jenkins',
      'GitHub Actions',
      'Docker',
      'Automated Testing'
    ],
    instructor: {
      name: 'Emily Rodriguez',
      role: 'DevOps Engineer',
      image: 'https://api.dicebear.com/7.x/avatars/svg?seed=Emily'
    }
  }
};

export type { LearningPath, Module }; 