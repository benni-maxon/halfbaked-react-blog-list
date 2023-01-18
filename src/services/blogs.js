import { checkError, client } from './client.js';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, authors(*)');
  return checkError(resp);
}
