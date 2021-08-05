const hunger = document.querySelector('#hunger')
const tiredness = document.querySelector('#tiredness')
const boredom = document.querySelector('#boredom')
const age = document.querySelector('#age')
const mascot = document.querySelector('#header-h1')
const inputName = prompt("Rename the Seahawks Mascot")
mascot.innerText = inputName

const hungerButton = document.querySelector('#feed')
const sleepButton = document.querySelector('#sleep')
const playButton = document.querySelector('#play')

class Tomagotchi{
    constructor(name, hungerLevel, tirednessLevel, boredomLevel, ageNum){
        this.name = name
        this.hungerLevel = 0
        this.tirednessLevel = 0
        this.boredomLevel = 0
        this.ageNum = 0
    }
    feed(){
        this.hungerLevel--
        hunger.innerText = `Hunger: ${this.hungerLevel}/10`
    }
    sleep(){
        this.tirednessLevel--
        tiredness.innerText = `Tiredness: ${this.tirednessLevel}/10`
    }
    play(){
        this.boredomLevel--
        boredom.innerText = `Boredom: ${this.boredomLevel}/10`
    }
    ageSprite(){
        this.ageNum++
        age.innerText = `Age: ${this.ageNum}`
    }
}

const blitz = new Tomagotchi(inputName)

const feedClick = hungerButton.addEventListener('click', () => blitz.feed())
const sleepClick = sleepButton.addEventListener('click', () => blitz.sleep())
const playClick = playButton.addEventListener('click',  () => blitz.play())

// setInterval(ageSprite, 5000)



//make the sprite move randomly or when you click a button
//have the levels increase over a certain time period
// maybe add a start game button/function 
// turn off the lights 
// can't go below 0 

// function start(){
//     // setInterval(() => blitz.ageSprite(), 5000)
//     setInterval()
//     setInterval()
//     setInterval()
//     setInterval()
// }
// start()