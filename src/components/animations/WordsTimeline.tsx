'use client';

import * as React from 'react';
import { motion } from 'motion/react';

function WordsTimeline({ words }: { words: string[] }) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const wordAnimationDuration = 0.25;
  const barAnimationDuration = 0.75;

  const handleAnimationComplete = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const getWordColor = (index: number) => {
    return index === 0 ? 'text-slate-400' : 'text-slate-200';
  };

  return (
    <div className="mb-8 flex items-center space-x-1.5 md:mb-12">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.div
            className={`whitespace-nowrap text-base font-bold ${getWordColor(index)}`}
            initial="hidden"
            animate={currentStep >= index * 2 ? 'visible' : 'hidden'}
            variants={{
              hidden: { color: '#334155' /* slate-700 */ },
              visible: {
                color: '#94a3b8' /* slate-400 */,
                transition: { delay: 0.2, duration: wordAnimationDuration },
              },
            }}
            onAnimationComplete={
              currentStep === index * 2 ? handleAnimationComplete : undefined
            }
          >
            {word}
          </motion.div>
          {index < words.length - 1 && (
            <div className="relative h-px w-full overflow-hidden bg-slate-700">
              {currentStep >= index * 2 + 1 && (
                <motion.div
                  className="absolute left-0 top-0 h-0.5 bg-slate-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  onAnimationComplete={
                    currentStep === index * 2 + 1
                      ? handleAnimationComplete
                      : undefined
                  }
                  transition={{
                    duration: barAnimationDuration,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute right-0 top-0 h-px w-8 bg-linear-to-r from-slate-200 to-slate-700"
                    initial={{ x: '0%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: barAnimationDuration,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WordsTimeline;
