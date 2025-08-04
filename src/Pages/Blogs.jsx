import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import local images
import GuwahatiShillong from "../assets/in1.jpg";
import ArunachalPradeshKonarkTemple from "../assets/in2.jpg";
import SikkimDarjeeling from "../assets/in3.jpg";
import TopHero from "../components/TopHero";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Guwahati to Shillong: Scenic Drive & Travel Guide",
      description:
        "Plan the perfect road trip from Guwahati to Shillong. Discover hidden gems, food stops, and breathtaking viewpoints along this mesmerizing hill drive.",
      imageUrl: GuwahatiShillong,
      date: "July 15, 2024",
      author: "Highway Explorer",
      content: `The journey from Guwahati to Shillong is more than just a road trip—it's a scenic adventure through lush hills, winding roads, waterfalls, and tribal villages.

This 100 km stretch takes around 3 hours, but with so many stops like Umiam Lake, Elephant Falls, and local Khasi food stalls, it's best enjoyed slow. Rent a car and cruise through the foggy highlands at your own pace.

With every turn, the air gets cooler and fresher. Stop at Nongpoh for snacks, capture pictures at the viewpoint near Barapani, and enjoy a picnic by the lake. Shillong welcomes you with colonial charm, music cafes, and a lively market culture. A self-drive car makes it all easy and flexible.`,
    },
    {
      id: 2,
      title: "Konark Sun Temple & Arunachal: Culture Meets Nature",
      description:
        "Explore India’s northeast starting from Arunachal's scenic drives to Odisha’s majestic Konark Sun Temple. A road trip filled with spirituality and beauty.",
      imageUrl: ArunachalPradeshKonarkTemple,
      date: "July 10, 2024",
      author: "Culture Explorer",
      content: `Arunachal Pradesh, with its misty mountains and tribal culture, offers a soul-stirring road trip experience. Drive through Tawang, Ziro, and Bomdila to soak in untouched Himalayan beauty.

Contrast this with Odisha’s architectural marvel—the Konark Sun Temple. This UNESCO World Heritage site tells ancient stories through stone carvings. The Marine Drive from Puri to Konark is a treat with sea breeze and smooth tarmac.

Blend both journeys for an India-wide cultural experience—from Buddhist monasteries to Hindu temples. Renting a car allows you to plan a flexible and scenic route between nature and heritage.`,
    },
    {
      id: 3,
      title: "Sikkim to Darjeeling: Himalayan Road Trip Adventure",
      description:
        "Explore the best of North Bengal & Sikkim in a self-drive trip from Gangtok to Darjeeling. Enjoy tea gardens, snow-capped peaks & mountain monasteries.",
      imageUrl: SikkimDarjeeling,
      date: "July 05, 2024",
      author: "Mountain Nomad",
      content: `A self-drive journey through Sikkim and Darjeeling is like driving through postcards. Begin in Gangtok and head toward Tsomgo Lake, then take the scenic road to Darjeeling via Kalimpong.

Stop at monasteries, taste hot momos at roadside stalls, and sip tea at plantations. Whether it's the sunrise at Tiger Hill or a walk on MG Marg, these towns blend colonial charm with Tibetan influence.

With a rental car, you control the pace—take detours to secluded viewpoints, spend extra time in bustling bazaars, or discover hidden waterfalls. The freedom of driving in the hills makes this trip unforgettable.`,
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
