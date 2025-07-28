import directus from '../../lib/directus.ts';
import { readItem, readItems, readSingleton } from '@directus/sdk';

async function getPosts() {
  try {
    return await directus.request(
      readItems('posts', {
        fields: [
          'id',
          'image',
          'published_date',
          'slug',
          'short_description',
          'title',
          { author: ['alias'] },
          { categories: [{ categories_id: ['category_name'] }] },
        ],
        sort: '-published_date',
        filter: {
          status: {
            _eq: 'published',
          },
        },
      }),
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

async function getPost(id: number) {
  try {
    return await directus.request(
      readItem('posts', id, {
        fields: [
          'id',
          'image',
          'published_date',
          'slug',
          'short_description',
          'title',
          'content',
          { author: ['alias'] },
          { categories: [{ categories_id: ['category_name'] }] },
        ],
        filter: {
          status: {
            _eq: 'published',
          },
        },
      }),
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

async function getGlobal() {
  try {
    return await directus.request(readSingleton('global'));
  } catch (error) {
    console.error('Error fetching global:', error);
    throw error;
  }
}

export {
  getPosts,
  getPost,
  getGlobal,
};