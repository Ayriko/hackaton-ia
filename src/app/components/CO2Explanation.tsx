import React, { useEffect } from "react"
import { RollingNumber2 } from "./RollingNumber2"
import { useCO2Grams, useTimer } from "../context/TimerContext"
import { RollingNumber } from "./RollingNumber"


export const CO2Explanation = () => {
  const { CO2grams } = useCO2Grams()
  const { timer } = useTimer()

  return (
    <>

      <div className="flex flex-col items-center justify-center h-screen gap-24">
        <div>
          <h1 className="text-3xl font-bold">Depuis que tu es sur notre page tu as émis 
            <span className="inline-block overflow-hidden top-2 gap-1">
              <RollingNumber2 value={CO2grams.toFixed(3).toString()} textStyle="h-8 w-8 text-3xl font-bold text-green-700" />
            </span>
             g de CO2 </h1>
        </div>
        <p className="text-lg text-center max-w-2/5">
          Le nombre que tu vois défiler en haut de ton écran correspond au
          nombre de grammes de CO2 émis en 
          <span className="inline-block h-4">
            <RollingNumber value={timer.toFixed(0).toString()} textStyle="h-6 text-lg text-center overflow-hidden text-red-700" />
          </span>
          s. Il est estimé en fonction des données de transfert de données.
          Chaque seconde, le nombre de grammes de CO2
          augmente légèrement.
        </p>
      </div>
    </>
  )
}