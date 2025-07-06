import { createDirectus, rest } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
};

type Author = {
  first_name: string;
  last_name: string;
  alias: string;
};

type Category = {
  category_name: string;
};

type PostCategory = {
  categories_id: Category;
};

type Post = {
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  categories: PostCategory[];
  short_description: string;
};

type Schema = {
  posts: Post[];
  global: Global;
  categories: Category[];
};

const directus = createDirectus<Schema>('http://localhost:8055').with(rest());

export default directus;
