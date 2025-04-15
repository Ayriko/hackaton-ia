'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
      optionA: "Regarder des vidéos en 4K en streaming",
      optionB: "Télécharger les vidéos en HD",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Le streaming en 4K consomme énormément de données et d’énergie.",
      feedbackB: "✅ Bonne alternative : Le téléchargement en HD réduit la bande passante et les émissions.",
      image: "downloading.jpeg",
      explanation:
          "La 4K en streaming mobilise plus longtemps les serveurs et réseaux, augmentant la consommation énergétique."
  },
  {
      optionA: "Laisser son PC allumé H24",
      optionB: "Éteindre ou mettre en veille quand non utilisé",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Un PC allumé en continu gaspille inutilement de l’énergie.",
      feedbackB: "✅ Bonne alternative : L’extinction permet d’économiser beaucoup d’électricité.",
      explanation:
          "Même en veille, un PC consomme de l’énergie. L’éteindre totalement reste la solution la plus sobre."
  },
  {
      optionA: "Utiliser un moteur de recherche classique",
      optionB: "Utiliser un moteur éco-responsable (type Ecosia)",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Les moteurs classiques ne compensent pas leur empreinte carbone.",
      feedbackB: "✅ Bonne alternative : Certains moteurs financent la reforestation ou sont plus sobres.",
      image: "trees.png",
      explanation:
          "Un moteur comme Ecosia reverse une partie de ses revenus pour planter des arbres et compense ses émissions."
  },
  {
      optionA: "Multiplier les onglets ouverts en permanence",
      optionB: "Fermer les onglets inutilisés",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Garder de nombreux onglets actifs sollicite davantage de mémoire et d’énergie.",
      feedbackB: "✅ Bonne alternative : Fermer les onglets limite l’usage de RAM et la consommation.",
      explanation:
          "Les onglets ouverts sollicitent le processeur et empêchent la machine d’entrer en mode d’économie d’énergie."
  },
  {
      optionA: "Changer de smartphone tous les 2 ans",
      optionB: "Garder son smartphone 5 ans ou plus",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Changer souvent augmente l’empreinte carbone liée à la fabrication.",
      feedbackB: "✅ Bonne alternative : Allonger la durée de vie limite l’extraction de ressources.",
      image: "oldphone.jpeg",
      explanation:
          "La fabrication d’un smartphone représente jusqu’à 80 % de son impact environnemental total."
  },
  {
      optionA: "Utiliser un écran externe 32 pouces 4K",
      optionB: "Utiliser l’écran intégré d’un ordinateur portable",
      correctAnswer: "B",
      feedbackA: "❌ Mauvais choix : Les grands écrans haute résolution consomment beaucoup plus d’électricité.",
      feedbackB: "✅ Bonne alternative : L’écran intégré est souvent suffisant et bien plus économe.",
      explanation:
          "Un grand écran externe peut consommer 2 à 3 fois plus qu’un écran intégré, surtout en usage prolongé."
  },
  {
    optionA:
      'Utiliser des objets connectés inutiles (réveil WiFi, brosse à dents connectée...)',
    optionB: 'Limiter les objets connectés au strict nécessaire',
    correctAnswer: 'B',
    feedbackA:
      '❌ Mauvais choix : Chaque objet connecté nécessite de l’électricité et des serveurs pour fonctionner.',
    feedbackB:
      '✅ Bonne alternative : Moins d’objets = moins d’énergie utilisée en continu.',
    explanation:
      'Les objets connectés créent un usage permanent de données, même lorsqu’ils ne sont pas utilisés.',
  },
  {
    optionA: 'Conserver tous ses mails et fichiers indéfiniment',
    optionB: 'Faire régulièrement le tri dans ses données',
    correctAnswer: 'B',
    feedbackA:
      '❌ Mauvais choix : Stocker trop d’infos mobilise les serveurs en continu.',
    feedbackB:
      '✅ Bonne alternative : Supprimer les fichiers inutiles allège les infrastructures numériques.',
    image: 'servers.png',
    explanation:
      'Le stockage cloud consomme de l’énergie pour faire tourner les serveurs et maintenir la disponibilité 24/7.',
  },
];

type Props = {
  setCurrentStage: (val: number) => void;
};

const EcoChoices = ({ setCurrentStage }: Props) => {
  const [step, setStep] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsCorrect(option === questions[step].correctAnswer);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (step + 1 < questions.length) {
      setStep((prev) => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      setCurrentStage(2);
    }
  };

  const { optionA, optionB, feedbackA, feedbackB, explanation } =
    questions[step];

  return (
    <div className="min-h-screen w-full flex items-stretch justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="relative w-full h-screen flex">
        <div
          onClick={() => handleOptionClick('A')}
          className={`w-1/2 flex items-center justify-center cursor-pointer transition duration-300 text-2xl font-medium p-10 ${
            selectedOption === 'A'
              ? isCorrect
                ? 'bg-green-100 text-green-900'
                : 'bg-red-100 text-red-900'
              : 'bg-white hover:bg-green-100 text-green-800'
          }`}
        >
          {optionA}
        </div>

        <div className="w-px bg-gray-300 h-full absolute left-1/2 top-0" />

        <div
          onClick={() => handleOptionClick('B')}
          className={`w-1/2 flex items-center justify-center cursor-pointer transition duration-300 text-2xl font-medium p-10 ${
            selectedOption === 'B'
              ? isCorrect
                ? 'bg-green-100 text-green-900'
                : 'bg-red-100 text-red-900'
              : 'bg-white hover:bg-blue-100 text-blue-800'
          }`}
        >
          {optionB}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0.3, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-8 py-6 text-center text-gray-900 max-w-2xl z-50 ${
                isCorrect ? 'border-green-500' : 'border-red-500'
              } border-4`}
            >
              {questions[step].image && (
                <img
                  src={`/generatedImages/${questions[step].image}`}
                  alt="illustration"
                  className="mb-4 rounded-xl mx-auto max-h-64 object-contain"
                />
              )}
              <p className="mb-6 text-lg leading-relaxed font-medium text-gray-900">
                {isCorrect ? feedbackB : feedbackA}
              </p>
              <p className="mb-6 text-lg leading-relaxed font-medium text-gray-900">
                {explanation}
              </p>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
              >
                Suivant
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EcoChoices;
