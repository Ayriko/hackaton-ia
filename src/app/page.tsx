'use client';

import Minigame from '@/app/components/Minigame';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import MainMessage from './components/MainMessage';

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
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <MainMessage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
