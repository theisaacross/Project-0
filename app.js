const hunger = document.querySelector('#hunger')
const tiredness = document.querySelector('#tiredness')
const boredom = document.querySelector('#boredom')

const hungerButton = document.querySelector('#feed')
const sleepButton = document.querySelector('#sleep')
const playButton = document.querySelector('#play')

class Tomagotchi{
    constructor(name, hunger, tiredness, boredom){
        this.name = name
        this.hungerLevel = 0
        this.tirednessLevel = 0
        this.boredomLevel = 0
    }
}
const blitz = new Tomagotchi('Blitz')
function feed(){
    blitz.hungerLevel--
    hunger.innerText = `Hunger: ${blitz.hungerLevel}/10`
}
function sleep(){
    blitz.tirednessLevel--
    tiredness.innerText = `Tiredness: ${blitz.tirednessLevel}/10`
}
function play(){
    blitz.boredomLevel--
    boredom.innerText = `Boredom: ${blitz.boredomLevel}/10`
}
const feedClick = hungerButton.addEventListener('click', feed)
const sleepClick = sleepButton.addEventListener('click', sleep)
const playClick = playButton.addEventListener('click', play)

