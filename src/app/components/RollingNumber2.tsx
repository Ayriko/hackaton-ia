'use client';
import React, { useEffect, useState } from "react";

interface RollingNumberProps {
  value: string;
  textStyle: string;
  duration?: number; // en ms
}

export const RollingNumber2: React.FC<RollingNumberProps> = ({
  value,
  textStyle,
  duration = 1100,
}) => {
  const [digits, setDigits] = useState<string[]>([]);

  useEffect(() => {
    const newDigits = value.split("");
    setDigits(newDigits);
  }, [value]);

  const getOffset = (digit: number) => {
    return `-${digit * 2}rem`; // 2.5rem correspond à la hauteur d’un chiffre
  };

  return (
    <div className="flex">
      {digits.map((digit, idx) => (
        <div
          key={idx}
          className="relative h-8 w-6 overflow-hidden text-center"
        >
          <div
            className="absolute transition-transform ease-in-out"
            style={{
              transform: `translateY(${getOffset(parseInt(digit))})`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {isNaN(parseInt(digit)) ? (

              <div className={textStyle}>{digit}</div>
            ) : (
              Array.from({ length: 10 }, (_, i) => (
                <div key={i} className={textStyle}>
                  {i}
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
