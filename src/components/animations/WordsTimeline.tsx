'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

function WordsTimeline({ words }: { words: string[] }) {
  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1 } },
  };

  const wordVariants = {
    hidden: { color: '#000' },
    visible: { color: '#fff', transition: { duration: 1 } },
  };

  return (
    <div className="mb-8 flex items-center md:mb-12">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            transition={{ delay: index * 2 }} // Stagger the word animation
            className="mr-2.5 text-base font-bold" // Tailwind classes for font size and margin
          >
            {word}
          </motion.div>
          {index < words.length - 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              transition={{ delay: index * 2 + 1 }} // Stagger the line animation
              className="mr-2.5 h-0.5 flex-grow bg-white" // Tailwind classes for height, background color, flex grow and margin
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WordsTimeline;
