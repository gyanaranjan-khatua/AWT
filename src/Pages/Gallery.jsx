import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import images from assets
import img1 from '../assets/gallery/pic1.jpeg';
import img2 from '../assets/gallery/pic2.jpeg';
import img3 from '../assets/gallery/pic3.jpeg';
import img4 from '../assets/gallery/pic4.jpeg';
import img5 from '../assets/gallery/pic5.jpeg';
import img6 from '../assets/gallery/pic6.jpeg';
import img7 from '../assets/gallery/pic7.jpeg';
import img8 from '../assets/gallery/pic8.jpeg';
import img9 from '../assets/gallery/pic9.jpeg';
import img10 from '../assets/gallery/pic10.jpeg';
import img11 from '../assets/gallery/pic11.jpeg';
import img12 from '../assets/gallery/pic12.jpeg';
import img13 from '../assets/gallery/pic13.jpeg';
import img14 from '../assets/gallery/pic14.jpeg';
import img15 from '../assets/gallery/pic15.jpeg';
import img16 from '../assets/gallery/pic16.jpeg';
import img17 from '../assets/gallery/pic17.jpeg';
import img18 from '../assets/gallery/pic18.jpeg';
import img19 from '../assets/gallery/pic19.jpeg';
import img20 from '../assets/gallery/pic20.jpeg';
import img21 from '../assets/gallery/pic21.jpeg';
import img22 from '../assets/gallery/pic22.jpeg';
import img23 from '../assets/gallery/pic23.jpeg';
import img24 from '../assets/gallery/pic24.jpeg';
import img25 from '../assets/gallery/pic25.jpeg';
import img26 from '../assets/gallery/pic26.jpeg';
import img27 from '../assets/gallery/pic27.jpeg';
import img29 from '../assets/gallery/pic29.jpeg';
import img30 from '../assets/gallery/pic30.jpeg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img29, img30
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
