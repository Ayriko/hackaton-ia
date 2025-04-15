'use client';

import Minigame from '@/app/components/Minigame';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import EnhancementMessage from './components/EnhancementMessage';
import MainMessage from './components/MainMessage';
import NewsMessage from './components/NewsMessage';
import ScrollArrow from './components/ScrollArrow';

export default function Home() {
  const [currentStage, setCurrentStage] = useState<number>(1);

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      <AnimatePresence mode="wait">
        {currentStage === 1 && (
          <motion.div
            key="minigame"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <Minigame
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
            />
          </motion.div>
        )}

        {currentStage === 2 && (
          <motion.div
            key="mainmessage"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <MainMessage />
            <ScrollArrow stageNumber={3} setCurrentStage={setCurrentStage} />
          </motion.div>
        )}

        {currentStage === 3 && (
          <motion.div
            key="newsmessage"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <NewsMessage />
            <ScrollArrow stageNumber={4} setCurrentStage={setCurrentStage} />
          </motion.div>
        )}

        {currentStage === 4 && (
          <motion.div
            key="enhancementmessage"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <EnhancementMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
