import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TodaysWeather } from './components/TodaysWeather';
import axios from 'axios';


function App() {
  const dayTempAvg = 10
  const hourlyWeather = [
    { hour: '12am', deg: 4, icon: 'fa-solid fa-cloud', prep: 56 },
    { hour: '1am', deg: 6, icon: 'fa-solid fa-sun', prep: 58 },
    { hour: '2am', deg: 7, icon: 'fa-solid fa-sun', prep: 63 },
    { hour: '3am', deg: 6, icon: 'fa-solid fa-cloud', prep: 60 },
    { hour: '4am', deg: 6, icon: 'fa-solid fa-cloud', prep: 54 },
    { hour: '5am', deg: 5, icon: 'fa-solid fa-cloud-bolt', prep: 45 },
    { hour: '6am', deg: 4, icon: 'fa-solid fa-snowflake', prep: 36 }
  ]

  return (
    <>
      <Navbar />
      <Hero hourlyWeather={hourlyWeather} dayTempAvg={dayTempAvg} />
    </>
  )
}

export default App
