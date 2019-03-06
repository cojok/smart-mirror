import axiso from 'axios'
import { capitalize, removeElement } from '../helpers/HelperFunctions';
class Weather {
  constructor(props) {
      this.state = {
          city: props.city || 'München',
          unit: props.unit || 'metric',
          temp: null,
          icon: null,
          description: null
      }
  }


  render() {
     return `
        <div class="weather-wrapper">
            <div class="today" style="background-image: url(${this.state.icon});">
                Heute: ${this.state.temp} <sup>o</sup>C
                <p class="weather__description">
                  ${this.state.description}
                </p>
                <!--svg class="icon weather-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/svg/sun.svg#Layer_1"></use>
                </svg-->
            </div>
            <!--div class="next-day1">Morgen: 20 <sup>o</sup>
                <svg class="icon weather-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/svg/rain.svg#Layer_1"></use>
                </svg>
            </div>
            <div-- class="next-day1">Über Morgen: 30 <sup>o</sup>
                <svg class="icon weather-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/svg/clouds-sun.svg#Layer_1"></use>
                </svg>
            </div-->
        </div>
      `
  }

  getWeather() {
      const key = '53cd92e70024a2386915fd015fc8d5ed',
            cityId = 2867714,
            units = this.state.unit,
            url= `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=${units}`

       axiso.get(url)
      .then( response => {
        // handle success
        console.log(response.data)
        const data = response.data
        this.state.icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        this.state.temp = Math.round(data.main.temp)
        this.state.description = capitalize(data.weather[0].description)
        this.update()
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
      .then(() => {
        // always executed
      }) 
  }

  update() {
    removeElement(document.querySelector('#app .weather .weather-wrapper'))
    document.querySelector('#app .weather').insertAdjacentHTML('afterbegin',this.render())
  }

  showWeather() {
    this.getWeather()
    setInterval(() => {
      this.getWeather()
    }, 1000 * 60 * 60)
  }
}

export default Weather