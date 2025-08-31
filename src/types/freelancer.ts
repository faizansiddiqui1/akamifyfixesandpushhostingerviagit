export interface Language {
  language: string;
  level: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Portfolio {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export interface Review {
  clientName: string;
  clientAvatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface WorkHistory {
  projectName: string;
  clientName: string;
  status: string;
  description: string;
  duration: string;
  budget: string;
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  bio: string;
  skills: string[];
  rating: number;
  reviewsCount: number;
  location: string;
  projectsCompleted: number;
  hourlyRate: string;
  experience: string;
  successRate: string;
  certifications: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  website?: string;
  languages: Language[];
  education: Education[];
  portfolio: Portfolio[];
  reviews: Review[];
  workHistory: WorkHistory[];
} 