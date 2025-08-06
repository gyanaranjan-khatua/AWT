import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import local images
import blog1 from "../assets/id1.jpg";
import blog2 from "../assets/in7.webp";
import blog3 from "../assets/in11.jpg";
import TopHero from "../components/TopHero";

function Blog() {
  const blogPosts = [
  {
    id: 1,
    title: "Australia Road Trip: Beaches, Outback & Cities",
    description:
      "Uncover the magic of Australia with a self-drive trip through Sydney, the Great Ocean Road, and the Red Centre. Discover vibrant cities, coastal beauty, and rugged wilderness.",
    imageUrl: blog1,
    date: "August 01, 2024",
    author: "Global Wanderer",
    content: `Australia is a vast canvas of natural wonders and urban delights. Start your journey in Sydney, exploring iconic spots like the Opera House and Bondi Beach. Then rent a car and head out on the Great Ocean Road for dramatic coastal views and charming seaside towns.

Drive inland to experience the rugged Outback and witness Uluru at sunrise—a truly spiritual moment. Don’t miss Melbourne's coffee culture or the wildlife on Kangaroo Island.

Whether you're chasing waves, kangaroos, or starlit desert skies, Australia offers the freedom to explore at your own pace. A road trip here is both diverse and unforgettable.`,
  },
  {
    id: 2,
    title: "Simanchal Temple Trail: Visakhapatnam's Sacred Secrets",
    description:
      "Discover the spiritual side of Visakhapatnam with a temple trail covering the lesser-known Simanchal hills. A divine drive through coastal Andhra’s cultural heritage.",
    imageUrl: blog2,
    date: "July 28, 2024",
    author: "Temple Voyager",
    content: `Visakhapatnam, known for its beaches and port, also hides a spiritual treasure in the Simanchal Hills. The Simhachalam Temple, dedicated to Lord Varaha Narasimha, is an architectural marvel with centuries of devotion etched in stone.

A scenic drive through green valleys and hilly curves takes you to this hilltop temple. En route, explore ancient shrines and stop for panoramic views of the city and sea.

The atmosphere is serene—perfect for reflection. A self-drive route allows you to explore at your own rhythm, stopping for coastal snacks or temple rituals. Visakhapatnam’s sacred side is a hidden gem waiting to be explored.`,
  },
  {
    id: 3,
    title: "Gateway of India: Drive Through Mumbai’s Heritage Heart",
    description:
      "Take a self-drive exploration through Mumbai’s colonial past, starting with the Gateway of India. Discover historic landmarks, bustling markets, and coastal charm.",
    imageUrl: blog3,
    date: "July 20, 2024",
    author: "City Historian",
    content: `Mumbai’s Gateway of India stands proudly overlooking the Arabian Sea—a symbol of colonial history and modern resilience. Begin your journey here and let the city unfold around you.

Drive past the Taj Mahal Palace Hotel, through Colaba Causeway, and toward Marine Drive. Explore British-era architecture, visit art galleries, and relax at Chowpatty Beach. Each stop reveals a different shade of Mumbai’s personality.

With a rental car, you’re free to explore old bazaars, hidden cafes, or sea-facing promenades at your leisure. Mumbai is more than a city—it’s an experience best savored on your own terms.`,
  },
];


  // Individual blog card component
  const BlogPostCard = ({ post }) => {
    return (
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </div>
          <Link
            to={`/blog/${post.id}`}
            state={{ post }}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <TopHero name="Blog" />
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Travel Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
