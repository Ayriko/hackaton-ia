"use client";

import { useState } from "react";
import { motion } from "motion/react";

const questions = [
    {
        optionA: "Utiliser un sèche-linge électrique",
        optionB: "Étendre ton linge à l’air libre",
        explanation:
            "Le sèche-linge consomme jusqu’à 3-5 kWh par cycle. L’étendage = 0 émission."
    },
    {
        optionA: "Chauffage au gaz naturel",
        optionB: "Pompe à chaleur électrique",
        explanation:
            "La pompe à chaleur est plus efficiente et peut être alimentée en énergie verte."
    },
    {
        optionA: "Cuisinière à gaz",
        optionB: "Plaque à induction",
        explanation:
            "Les plaques à induction sont plus efficaces : 90 % de l’énergie est transmise contre 40 % pour le gaz."
    },
    {
        optionA: "Voiture électrique",
        optionB: "Vélo (classique ou électrique)",
        explanation:
            "Le vélo est le moyen de transport le moins carboné. L’électrique reste sobre."
    },
    {
        optionA: "Réseau électrique classique",
        optionB: "Auto-alimentation via panneaux solaires",
        explanation:
            "Les panneaux solaires réduisent fortement l'empreinte carbone domestique."
    },
    {
        optionA: "Ballon d’eau chaude électrique",
        optionB: "Chauffe-eau solaire thermique",
        explanation:
            "Le chauffe-eau solaire couvre jusqu’à 70 % des besoins annuels sans électricité."
    },
    {
        optionA: "PC de bureau gamer",
        optionB: "Ordinateur portable économe",
        explanation:
            "Un PC portable consomme environ 5x moins d’énergie qu’un PC fixe puissant."
    },
    {
        optionA: "Stockage cloud (data centers)",
        optionB: "Disque dur externe local",
        explanation:
            "Le stockage local, bien géré, est plus sobre que les data centers fonctionnant 24/7."
    }
];

const EcoChoices = () => {
    const [step, setStep] = useState(0);
    const { optionA, optionB, explanation } = questions[step];

    const handleNext = () => {
        setStep((prev) => (prev + 1 < questions.length ? prev + 1 : 0));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center"
            >
                Tu préfères...
            </motion.h1>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    onClick={handleNext}
                    className="bg-white shadow-xl rounded-2xl border border-green-300 hover:shadow-2xl transition duration-300 cursor-pointer p-6 text-center text-green-900 text-xl font-medium hover:bg-green-100"
                >
                    {optionA}
                </div>

                <div
                    onClick={handleNext}
                    className="bg-white shadow-xl rounded-2xl border border-blue-300 hover:shadow-2xl transition duration-300 cursor-pointer p-6 text-center text-blue-900 text-xl font-medium hover:bg-blue-100"
                >
                    {optionB}
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-center text-lg text-gray-700 max-w-2xl"
            >
                💡 {explanation}
            </motion.p>
        </div>
    );
};

export default EcoChoices;
