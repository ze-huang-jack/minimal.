import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto py-12 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">About</h1>
      <div className="prose prose-gray prose-lg">
        <p>
          Hello. I'm a digital creator passionate about minimalism and functional design. 
          This blog serves as a digital garden where I cultivate ideas about technology, 
          aesthetics, and human behavior.
        </p>
        <p>
          I believe that good software should be quiet. It should respect the user's attention 
          and provide utility without demanding engagement. In my work, I strive to remove 
          friction and enhance clarity.
        </p>
        <p className="text-gray-500 text-base mt-8">
          Built with React, Tailwind CSS, and a love for whitespace.
        </p>
      </div>
    </div>
  );
};