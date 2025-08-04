"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import airplane from '../assets/plane.png';

const titleText = "JetSetGo Holidays";
const subtitleText = "Travel. Feel. Remember. ✈️";

const AirportFlySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <div
      ref={sectionRef}
      className="h-[30vh] w-full relative overflow-hidden bg-gradient-to-b from-sky-300 to-white dark:bg-black flex items-center justify-start px-8"
    >
      {/* Animated title text */}
      <div className="absolute left-1 md:left-10 z-0">
        <div className="flex gap-1 text-4xl md:text-6xl font-bold text-red-500 dark:text-white">
          {[...titleText].reverse().map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: isInView ? 0.5 + index * 0.1 : 0,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              {char}
            </motion.span>
          )).reverse()}
        </div>

        {/* Subtitle tagline */}
        <motion.div
          className="mt-2 text-end text-lg md:text-2xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.6, ease: 'easeOut' }}
        >
          {subtitleText}
        </motion.div>
      </div>

      {/* Flying plane */}
      <motion.img
        src={airplane}
        alt="Plane"
        initial={{ x: '-150px' }}
        animate={isInView ? { x: '60vw' } : {}}
        transition={{ duration: 5, ease: 'easeOut' }}
        className="w-32 md:w-48 lg:w-70 z-10"
      />
    </div>
  );
};

export default AirportFlySection;