'use client';
import { useCO2Grams } from "../context/TimerContext";
import { RollingNumber } from "./RollingNumber";

export const RollingNumberHeader = () => {
  const { CO2grams } = useCO2Grams()

  return (
    <div>
      <div className="flex flex-row w-26 items-center h-8 justify-center bg-gray-600/60 rounded-full">
        <RollingNumber value={CO2grams.toFixed(3).toString()} textStyle="h-6 text-xl font-bold text-center" />
      </div>
    </div>
  );
};