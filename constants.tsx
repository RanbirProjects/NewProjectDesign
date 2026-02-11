import React from 'react';
import { NavItem, BlogPost, Program } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'IDEN Engine', path: '/iden' },
  { label: 'MindShift', path: '/mindshift' },
  { label: 'Insights', path: '/insights' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of Cognitive Computing in 2025',
    excerpt: 'How the IDEN Engine is redefining the boundaries of human-machine collaboration through neural synchronization.',
    date: 'March 15, 2025',
    author: 'Dr. Sarah Chen',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'MindShift: Rewiring the Entrepreneurial Brain',
    excerpt: 'Exploring the neurobiology behind peak performance and high-impact decision making in uncertain markets.',
    date: 'March 10, 2025',
    author: 'Marcus Thorne',
    category: 'Leadership',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'From Automation to Autonomy',
    excerpt: 'Why the next decade of software is about understanding intent, not just executing commands.',
    date: 'March 05, 2025',
    author: 'Elena Rodriguez',
    category: 'Future of Work',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  }
];

export const PROGRAMS: Program[] = [
  {
    title: 'Cognitive Alpha',
    description: 'A 12-week intensive designed for CEOs and founders to optimize mental frameworks for scale.',
    duration: '12 Weeks',
    focus: ['Neural Efficiency', 'Strategic Clarity', 'Resilience'],
  },
  {
    title: 'Flow State Architecture',
    description: 'Master the art of deep work and persistent focus through bio-hacked cognitive protocols.',
    duration: '8 Weeks',
    focus: ['Deep Work', 'Neuro-feedback', 'Energy Management'],
  },
  {
    title: 'Collective Intelligence',
    description: 'Empower teams to operate as a single, highly-synchronized unit using IDEN-powered insights.',
    duration: 'Ongoing',
    focus: ['Team Sync', 'Distributed Trust', 'Rapid Innovation'],
  }
];