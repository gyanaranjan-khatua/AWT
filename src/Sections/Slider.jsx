import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import vertical videos
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';

const videos = [video1, video2, video3, video4, video5];

const VideoReelRow = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="flex gap-4 justify-center items-center w-full max-w-screen overflow-x-auto scrollbar-hide">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0"
          >
            <video
              src={video}
              className="h-[500px] w-[280px] object-cover rounded-xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoReelRow;
