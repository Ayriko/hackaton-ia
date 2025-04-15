"use client";

import { useState } from "react";
import Minigame from "@/app/components/Minigame";

export default function Home() {
    const [currentStage, setCurrentStage] = useState<number>(1);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100">
            <div className="w-full h-full">
                {currentStage === 1 && (
                    <Minigame currentStage={currentStage} setCurrentStage={setCurrentStage} />
                )}
                {currentStage === 2 && (
                    <div className="text-center mt-10 text-3xl font-bold text-green-800">
                        🎯 Étape 2 débloquée !
                    </div>
                )}
            </div>
        </main>
    );
}
