import { useEffect } from 'react';
import { useState } from 'react';
import { fetchBlogs } from '../services/blogs.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}

// export function useAuthors() {
//   const [authors, setAuthors] = useState([]);
// }
