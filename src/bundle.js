import '@babel/polyfill'

import Weather from './components/Weather'
import Clock from './components/Clock'

const weatherWidget = new Weather('München', 'metric')
weatherWidget.showWeather();

const clockWidget = new Clock()
clockWidget.showTimer()