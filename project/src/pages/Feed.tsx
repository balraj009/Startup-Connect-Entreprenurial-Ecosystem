import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Send, UserCircle } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: string[];
  timestamp: Date;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Sarah Chen",
      content: "Working on a sustainable fashion marketplace that connects eco-conscious consumers with ethical manufacturers. Looking for feedback on market validation strategies!",
      likes: 24,
      comments: ["Great idea! Have you considered B2B partnerships?", "I'd love to connect and share some insights from the fashion industry."],
      timestamp: new Date("2024-03-15T09:30:00")
    },
    {
      id: 2,
      author: "Alex Kumar",
      content: "Developing an AI-powered personal finance advisor for Gen Z. Would love thoughts on monetization strategies while keeping the core product accessible.",
      likes: 18,
      comments: ["Consider a freemium model with advanced features for power users"],
      timestamp: new Date("2024-03-15T08:15:00")
    }
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([
        {
          id: Date.now(),
          author: "You",
          content: newPost.trim(),
          likes: 0,
          comments: [],
          timestamp: new Date()
        },
        ...posts
      ]);
      setNewPost('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <form onSubmit={handlePost}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your startup idea or ask for feedback..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            rows={4}
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Post</span>
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <UserCircle className="h-10 w-10 text-gray-400" />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-900">{post.author}</h3>
                <p className="text-sm text-gray-500">
                  {post.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <MessageSquare className="h-5 w-5 mr-1" />
                <span>{post.comments.length}</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <Share2 className="h-5 w-5 mr-1" />
                <span>Share</span>
              </button>
            </div>

            {post.comments.length > 0 && (
              <div className="mt-4 space-y-3">
                {post.comments.map((comment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-700 text-sm">{comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;