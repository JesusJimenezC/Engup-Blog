import { createDirectus, rest } from '@directus/sdk';

interface Global {
  title: string;
  description: string;
}

interface Author {
  first_name: string;
  last_name: string;
  alias: string;
}

interface Category {
  category_name: string;
}

interface PostCategory {
  categories_id: Category;
}

interface Post {
  id: number;
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  status: string;
  categories: PostCategory[];
  short_description: string;
}

interface Schema {
  posts: Post[];
  global: Global;
  categories: Category[];
}

const directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
const directus = createDirectus<Schema>(directusUrl).with(rest());

export default directus;
