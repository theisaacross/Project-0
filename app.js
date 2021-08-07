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
            if (this.ageNum === 5){
                mascot.removeAttribute('id')
                mascot.setAttribute('id', 'spriteLvl5')
            }
            if (this.ageNum === 10){
                clearInterval(intervalID)
                this.disableButtons()
                return alert("You win!")
            }
            if (this.hungerLevel === 10 || this.tirednessLevel === 10 || this.boredomLevel === 10){
                mascot.setAttribute('class', 'dead')
                clearInterval(intervalID)
                this.disableButtons()
                return alert('Game Over!')
            }
        },750)
     }
}
const blitz = new Tomagotchi(inputName)

const feedClick = hungerButton.addEventListener('click', () => {
    if (blitz.hungerLevel > 0){
        blitz.feed() 
    }
})
const sleepClick = sleepButton.addEventListener('click', () => {
    if(blitz.tirednessLevel > 0){
        blitz.sleep()
    }
})
const playClick = playButton.addEventListener('click',  () => {
    if (blitz.boredomLevel > 0){
        blitz.play()
    }
})

blitz.start()

// make the sprite move