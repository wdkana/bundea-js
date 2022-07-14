import Computer from "./classes/Computer/Main.js"
import Time from "./classes/Computer/Time.js"

const cuyOS = new Computer()
const cuyOSTime = new Time(cuyOS)

cuyOSTime.start()

//taskbar menu button clicked
cuyOS.menuButton.addEventListener("click", () => {
  cuyOS.menu.style.display == "flex" ? cuyOS.menu.style.display = "none" : cuyOS.menu.style.display = "flex"
})

//triggering shutdown pc
cuyOS.shutdown.addEventListener("click", () => powerOff())

//shutdown function
const powerOff = () => {
  console.log('pc turned off!')
  //turning off the clock first
  cuyOSTime.stop()

  cuyOS.container.style.background = "black"
  cuyOS.menu.style.display = "none"
  cuyOS.taskbar.style.display = "none"
  cuyOS.peripheralContainer.style.display = "none"
  cuyOS.hwContainer.style.display = "none"
  cuyOS.myComputerContainer.style.display = "none"

  //create new html element for turning on pc
  let turnOn = document.createElement("p")
  turnOn.innerHTML = "Power On"
  turnOn.style.color = "white"
  turnOn.style.background = "black"
  turnOn.style.textAlign = "center"
  turnOn.style.fontSize = "30px"
  turnOn.style.cursor = "pointer"
  turnOn.id = "powerOn"

  //put this new element to the parent element
  cuyOS.turnOnContainer.appendChild(turnOn)

  //initiating state for turning on PC
  powerOn()
}

//function for turning on the pc
const powerOn = () => {
  console.log('pc ready to use again')
  document.getElementById("powerOn").addEventListener("click", () => {
    console.log('this pc will start soon')
    setTimeout(() => {
      location.reload()
    }, 1000)
  }
  )
}

//opening my computer window menu
cuyOS.myComputerButton.addEventListener("click", () => {
  cuyOS.myComputerContainer.style.display = "flex"
  cuyOS.menu.style.display = "none"
})

//closing my computer window menu
cuyOS.myComputerClose.addEventListener("click", () => {
  cuyOS.myComputerContainer.style.display = "none"
})


//opening peripheral window menu
cuyOS.peripheralButton.addEventListener("click", () => {
  cuyOS.peripheralContainer.style.display = "flex"
  cuyOS.menu.style.display = "none"
})

//closing peripheral window menu
cuyOS.peripheralClose.addEventListener("click", () => {
  cuyOS.peripheralContainer.style.display = "none"
})

//opening hardware window menu
cuyOS.hwButton.addEventListener("click", () => {
  cuyOS.hwContainer.style.display = "flex"
  cuyOS.menu.style.display = "none"
})

//closing hardware window menu
cuyOS.hwClose.addEventListener("click", () => {
  cuyOS.hwContainer.style.display = "none"
})