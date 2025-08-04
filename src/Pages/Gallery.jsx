import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import images from assets
import img1 from '../assets/awt1.jpeg';
import img2 from '../assets/awt2.jpeg';
import img3 from '../assets/awt3.jpeg';
import img4 from '../assets/awt4.jpeg';
import img5 from '../assets/awt5.jpeg';


const images = [
  img1, img2, img3, img4, img5,
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
        Photo Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-xl shadow-xl bg-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
