interface Post {
  title: string;
  slug: string;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
  description?: string;
  categories?: string[];
  keywords?: string[];
  content?: string;
  readingTime: number;
  related?: Pick<Post, 'title' | 'slug' | 'publishedAt'>[];
}

export type { Post };
