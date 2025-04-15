'use client';

import Minigame from '@/app/components/Minigame';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import EnhancementMessage from './components/EnhancementMessage';
import MainMessage from './components/MainMessage';
import NewsMessage from './components/NewsMessage';
import ScrollArrow from './components/ScrollArrow';
import { CO2Explanation } from './components/CO2Explanation';
import { RollingNumberHeader } from './components/RollingNumberHeader';

export default function Home() {
  const [currentStage, setCurrentStage] = useState<number>(2);

  return (
    <>
      <main className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
        {currentStage != 2 && (
          <div className={"top-10 min-h-10 z-50 min-w-full flex flex-col absolute justify-center" + (currentStage == 2 ? " items-end pr-30" : " items-center")}>
            <RollingNumberHeader />
          </div>
        )}
        <AnimatePresence mode="wait">
          {currentStage === 1 && (
            <motion.div
              key="minigame"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center"
            >
              <Minigame
                currentStage={currentStage}
                setCurrentStage={setCurrentStage}
              />
            </motion.div>
          )}

          {currentStage === 2 && (
            <motion.div
              key="co2explanation"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center"
            >
              <CO2Explanation />
              <ScrollArrow stageNumber={3} setCurrentStage={setCurrentStage} />
            </motion.div>
          )}

          {currentStage === 3 && (
            <motion.div
              key="mainmessage"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-4"
            >
              <MainMessage />
              <ScrollArrow stageNumber={4} setCurrentStage={setCurrentStage} />
            </motion.div>
          )}

          {currentStage === 4 && (
            <motion.div
              key="newsmessage"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen flex items-center justify-center p-4"
            >
              <NewsMessage />
              <ScrollArrow stageNumber={5} setCurrentStage={setCurrentStage} />
            </motion.div>
          )}

          {currentStage === 5 && (
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
    </>
  );
}
