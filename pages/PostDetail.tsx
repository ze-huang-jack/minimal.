import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { ArrowLeft } from 'lucide-react';

export const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
        <Link to="/posts" className="text-blue-600 hover:underline">Back to articles</Link>
      </div>
    );
  }

  return (
    <article className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link 
        to="/posts" 
        className="inline-flex items-center text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </Link>
      
      <header className="mb-10">
        <span className="text-sm font-medium text-gray-500 block mb-3">{post.date}</span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          {post.title}
        </h1>
      </header>
      
      <div className="prose prose-slate prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link 
          to="/posts" 
          className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
        >
          ← Read other articles
        </Link>
      </div>
    </article>
  );
};