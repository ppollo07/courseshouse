export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  order: number;
}

export interface ModuleContent {
  id: number;
  module_id: number;
  content: string;
  examples: string;
  images_descriptions: string;
  tests: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  module_id: number;
  completed: boolean;
  test_score?: number;
  last_accessed: string;
}

export interface TestQuestion {
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  type: 'truefalse' | 'multiple';
}

export interface TestResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
}
