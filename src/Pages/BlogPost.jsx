import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopHero from "../components/TopHero";


const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div className="text-center p-10">
        <p className="text-red-500">Post not found.</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <>
      <TopHero name={post.title} />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          <span>By {post.author}</span> | <span>{post.date}</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
        <button
          onClick={() => navigate("/blog")}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Back to Blog
        </button>
      </div>
    </>
  );
};

export default BlogPost;
