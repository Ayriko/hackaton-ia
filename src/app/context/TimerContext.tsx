'use client';
import React, { createContext, useContext, useEffect, useState } from "react";

interface TimerContextType {
  timer: number;
}

interface CO2GramsContextType {
  CO2grams: number;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);
const CO2GramsContext = createContext<CO2GramsContextType | undefined>(undefined);

function getTotalTransferredBytes(): number {
  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  const totalBytes = resources.reduce((acc, res) => {
    return acc + (res.transferSize || 0); // parfois 0 si CORS ou cache
  }, 0);
  return totalBytes; // en octets
}

function estimateCO2FromTransfer(bytes: number): number {
  const bytesInMb = bytes / (1024 * 1024);
  const CO2_PER_MB = 0.5; // gCO₂/Mo (valeur moyenne)
  return parseFloat((bytesInMb * CO2_PER_MB).toFixed(4));
}

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [CO2grams, setCO2grams] = useState(0);

  useEffect(() => {
    const initialCO2 = estimateCO2FromTransfer(getTotalTransferredBytes());
    setCO2grams(initialCO2);

    const interval = setInterval(() => {
      setTimer((s) => s + 1);
      setCO2grams((prev) => (parseFloat((prev + 0.0308).toFixed(4))));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContext.Provider value={{ timer }}>
      <CO2GramsContext.Provider value={{ CO2grams }}>
        {children}
      </CO2GramsContext.Provider>
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};

export const useCO2Grams = (): CO2GramsContextType => {
  const context = useContext(CO2GramsContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }

  return context;
};