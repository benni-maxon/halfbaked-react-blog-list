import React from 'react';
import { useBlogs } from '../../hooks/blogs.js';
import BlogCard from '../BlogCard/BlogCard.js';

export default function Main() {
  return (
    <main>
      {useBlogs().map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
    </main>
  );
}
