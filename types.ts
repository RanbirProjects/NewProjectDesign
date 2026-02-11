
export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

export interface Program {
  title: string;
  description: string;
  duration: string;
  focus: string[];
}
