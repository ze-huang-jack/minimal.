import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export const PostList: React.FC = () => {
  return (
    <div className="py-8 animate-in fade-in duration-500">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Articles</h1>
        <p className="text-gray-500 mt-2">Thoughts, tutorials, and essays.</p>
      </div>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group flex flex-col items-start">
            <span className="text-sm text-gray-400 mb-2 font-medium">{post.date}</span>
            <Link to={`/posts/${post.slug}`} className="block">
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <Link 
              to={`/posts/${post.slug}`}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};