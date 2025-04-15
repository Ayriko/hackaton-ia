"use client"

import { useState } from "react"
import Minigame from "@/app/components/Minigame";

export default function Home() {
  const [currentStage, setCurrentStage] = useState<number>(1)

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="w-full max-w-4xl mx-auto rounded-xl shadow-lg bg-white overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Interactive Experience</h1>

            <div className="transition-all duration-500 ease-in-out">
              {currentStage === 1 && <Minigame />}
            </div>
          </div>
        </div>
      </main>
  )
}
