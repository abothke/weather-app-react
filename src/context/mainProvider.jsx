// API Key acf8bf4b4cccf9e8d7a865ecedf740d5
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [city, setCity] = useState()
  const [data, setData] = useState()
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=138b03d4c6bda0d89747a902f3ad0102&units=metric`)
      setData(resp.data)
    }
    {city ? getWeather() : null}
  }, [city])

  return (
    <>
    <mainContext.Provider value={{ setCity, data}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider