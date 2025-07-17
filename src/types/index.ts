export interface Language {
  code: 'uz' | 'en';
  name: string;
  flag: string;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  scholarship: string;
  image: string;
  quote: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}