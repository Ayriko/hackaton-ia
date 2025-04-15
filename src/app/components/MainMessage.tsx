import { motion } from 'framer-motion';

export default function MainMessage() {
  const message = [
    'Chaque clic compte.',
    'Le numérique, invisible mais puissant, pollue plus que les avions.',
    'Et toi, combien d’émissions en scrollant ?',
  ];

  const letterDelay = 0.015;

  return (
    <div className="space-y-3">
      {message.map((text, index) => {
        const totalDelayBefore = message
          .slice(0, index)
          .reduce((acc, curr) => acc + curr.length * letterDelay, 0);

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: totalDelayBefore,
              duration: 0.3,
            }}
            className="text-xl font-semibold"
          >
            {text.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: totalDelayBefore + i * letterDelay,
                  duration: 0.3,
                }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.p>
        );
      })}
    </div>
  );
}
