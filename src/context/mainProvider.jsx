// API Key acf8bf4b4cccf9e8d7a865ecedf740d5
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [city, setCity] = useState()
  const [data, setData] = useState()
  const [tempToC, setTempToC] = useState(0)
  const [feelsLikeToC, setFeelsLikeToC] = useState(0)
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=acf8bf4b4cccf9e8d7a865ecedf740d5&units=metric`)
      setData(resp.data)
    }
    {city ? getWeather() : null}
  }, [city])

  return (
    <>
    <mainContext.Provider value={{ setCity, data, tempToC, feelsLikeToC}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider