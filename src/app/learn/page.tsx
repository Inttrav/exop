"use client";

import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { BookOpen, Video, FileText, GraduationCap } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  type: 'article' | 'video' | 'course';
  level: 'beginner' | 'intermediate' | 'advanced';
  url: string;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    title: "Personal Finance 101",
    description: "Learn the fundamentals of budgeting, saving, and investing",
    type: "course",
    level: "beginner",
    url: "https://www.khanacademy.org/college-careers-more/personal-finance",
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    title: "The Psychology of Money",
    description: "Understand how emotions affect financial decisions",
    type: "article",
    level: "intermediate",
    url: "https://www.morganhousel.com/writing",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Investment Strategies",
    description: "Advanced techniques for portfolio management",
    type: "video",
    level: "advanced",
    url: "https://www.youtube.com/watch?v=Gv2k7CFUsDk",
    icon: <Video className="h-5 w-5" />
  },
  {
    title: "Tax Planning Guide",
    description: "Optimize your tax strategy for maximum savings",
    type: "article",
    level: "intermediate",
    url: "https://www.investopedia.com/taxes-4689800",
    icon: <FileText className="h-5 w-5" />
  },
  {
    title: "Retirement Planning",
    description: "Secure your financial future with smart retirement strategies",
    type: "course",
    level: "intermediate",
    url: "https://www.coursera.org/learn/retirement-planning",
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    title: "Real Estate Investing",
    description: "Learn how to build wealth through property investment",
    type: "video",
    level: "advanced",
    url: "https://www.youtube.com/watch?v=Gv2k7CFUsDk",
    icon: <Video className="h-5 w-5" />
  }
];

export default function LearnPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Financial Education</h1>
          <Button>
            <BookOpen className="h-5 w-5 mr-2" />
            Learning Path
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {resource.icon}
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    resource.level === 'beginner' ? 'bg-green-100 text-green-800' :
                    resource.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {resource.level}
                  </span>
                </div>
                <CardTitle className="text-xl mt-2">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 