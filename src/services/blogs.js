import { checkError, client } from './client.js';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}

// export async function fetchAuthors() {
//   const resp = await client.from('authors').select('*');
//   return checkError(resp);
// }
