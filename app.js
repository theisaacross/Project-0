const hunger = document.querySelector('#hunger')
const tiredness = document.querySelector('#tiredness')
const boredom = document.querySelector('#boredom')
const age = document.querySelector('#age')
const mascot = document.querySelector('#sprite')
const inputName = prompt("Rename the Seahawks Mascot")
const nameTag = document.querySelector('#header-h1')
nameTag.innerHTML = inputName
const screen = document.querySelector('#sprite-div')

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
        screen.classList.toggle('night-time')
        setTimeout(() => screen.classList.remove('night-time'),1000)
    }
    play(){
        this.boredomLevel--
        boredom.innerText = `Boredom: ${this.boredomLevel}/10`
    }
    makeHungry(){
        this.hungerLevel++
        hunger.innerText = `Hunger: ${this.hungerLevel}/10`
    }
    makeSleepy(){
        this.tirednessLevel++
        tiredness.innerText = `Tiredness: ${this.tirednessLevel}/10`
    }
    makeBored(){
        this.boredomLevel++
        boredom.innerText = `Boredom: ${this.boredomLevel}/10`
    }
    ageSprite(){
        this.ageNum++
        age.innerText = `Age: ${this.ageNum}`
        this.hungerLevel++
        this.tirednessLevel++
        this.boredomLevel++
    }
    disableButtons(){
        document.querySelector("#feed").disabled = true;
        document.querySelector("#sleep").disabled = true;
        document.querySelector("#play").disabled = true;
    }
    start(){
        let timer = 0
        const intervalID = setInterval(()=>{
            timer++
        // this.hungerLevel
        // this.tirednessLevel
        // this.boredomLevel 
        this.makeHungry()
        if (timer % 2 === 0){
            this.makeBored()
        }
        if (timer % 3 === 0){
            this.makeSleepy()
        }
        if (timer % 10 === 0){
            this.ageSprite()
        }
        if (this.hungerLevel === 10 || this.tirednessLevel === 10 || this.boredomLevel === 10){
            mascot.setAttribute('class', 'dead')
            clearInterval(intervalID)
            return alert('Game Over!')
        }
        },1000)
        this.disableButtons()
    }
}
const blitz = new Tomagotchi(inputName)

const feedClick = hungerButton.addEventListener('click', () => blitz.feed())
const sleepClick = sleepButton.addEventListener('click', () => blitz.sleep())
const playClick = playButton.addEventListener('click',  () => blitz.play())

blitz.start()
document.querySelector("#feed").disabled = true;
document.querySelector("#sleep").disabled = true;
document.querySelector("#play").disabled = true;

//make the sprite move randomly or when you click a button
// can't go above 10 and below 0
// dead animation
// get bigger by age