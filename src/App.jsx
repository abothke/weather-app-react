import { useContext, useState } from 'react'
import './App.css'
import { mainContext } from './context/mainProvider'
import './bootstrap.min-vapor.css'
import { Button, Card } from 'react-bootstrap'

function App() {
  const { setCity, data, tempToC, feelsLikeToC } = useContext(mainContext)
  {data ? console.log(data) : null}
  return (
    <>
    <div className="App">
      <Button variant="primary" onClick={() => setCity('Hamburg')}>Hamburg</Button>
      <Button variant="primary" onClick={() => setCity('Berlin')}>Berlin</Button>
      <Button variant="primary" onClick={() => setCity('Köln')}>Köln</Button>
      <Button variant="primary" onClick={() => setCity('Australia')}>Australia</Button>
      </div>
      {data ?
      (
        <Card className="card">
        <Card.Body>
        <Card.Title>Weather in {data.name}, {data.sys.country}</Card.Title>
        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} style={{width: '25%'}}/>
        <Card.Text>
        <h3>{data.weather[0].description}</h3>
        <h4>Temperature: {data.main.temp} °C</h4>
        <h4>Feels like: {data.main.feels_like} °C</h4>
        </Card.Text>
        <details>
          <summary>More info</summary>
          <p>Humidity: {data.main.humidity} %</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Wind: {data.wind.speed} m/s</p>
          <p>Clouds: {data.clouds.all} %</p>
          <p>Visibility: {data.visibility} m</p>
          <p>Longitude: {data.coord.lon}</p>
          <p>Latitude: {data.coord.lat}</p>
        </details>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">Last updated: {new Date(data.dt * 1000).toLocaleString()} </small>
        </Card.Footer>
        </Card>
      )
      :
      (
        <h2>Choose a city</h2>
      )
      }
    </>
  )
}

export default App
