import { timingSafeEqual } from "crypto"

class Clock {
  
  constructor (props) {
    this.state = {
      time: null,
      date: null
    }
  }

  render () {

    return `
        <div class="time">${this.state.time}</div>
        <div class="date">${this.state.date}</div>
    `

  }

  update () {
    document.querySelector('#app .date-time').insertAdjacentHTML('afterbegin', this.render())
  }

   displayTime () {
    let d = new Date(),
          h = d.getHours(),
          m = d.getMinutes(),
          s = d.getSeconds()
      // ampm = h >= 12 ? 'pm' : 'am'
  //            h = h % 12

      // Adds zeros to single digit times
      if (h <= 9) {
          h = '0' + h
      }
      if (m <= 9) {
          m = '0' + m
      }
      if (s <= 9) {
          s = '0' + s
      }

      // Assign time format to variable. If you want to change how time is displayed do it here
      // Example time = h + ":" + m
      const time = h + ":" + m + ":" + s

      // Print your clock to an element.
      // document.getElementsByClassName("clock")[0].innerHTML = time

      // Refreshes clock every second. If you're just using minutes change to 60000
      setTimeout(this.displayTime, 1000)

      return time
}

 date () {
    let days = ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    const d = new Date(),
          day = days[d.getDay()] + ' ' + d.getDate(),
          month= d.toLocaleString('de-DE', { month: "long" })
    return day + ' ' + month
}

  showTimer () {
    this.state.time = this.displayTime()
    this.state.date = this.date()
    this.update()
  }
 
}

export default Clock