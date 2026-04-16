import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ReactNode;
  category: 'Agentic AI & Systems' | 'AI & Machine Learning' | 'Data & Databases' | 'Web & Backend' | 'Cloud & DevOps' | 'Programming & Tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}