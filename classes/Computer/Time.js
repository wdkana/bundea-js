//time class
export default class {
  constructor(cuyOS) {
    this.cuyOS = cuyOS
    cuyOS.clock.textContent = 'loading...'
  }

  //render the clock time
  clock() {
    //initializing date object
    this.date = new Date()
    this.hour = this.date.getHours()
    this.minute = this.date.getMinutes()
    this.second = this.date.getSeconds()

    //validating ampm
    if (this.hour < 10) this.hour = '0' + this.hour;
    if (this.minute < 10) this.minute = '0' + this.minute;
    if (this.second < 10) this.second = '0' + this.second;

    //last time output
    this.cuyOS.clock.textContent = `${this.hour}:${this.minute}:${this.second}`
  }

  //stoping the time interval
  stop() {
    clearInterval(this.timer)
  }

  //starting time main function
  start() {
    this.timer = setInterval(() => this.clock(this.cuyOs), 1000)
  }
}