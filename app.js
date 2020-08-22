let bg = document.getElementById('bg')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let hex = document.getElementById('hex')
let random = document.getElementById('random')

changeColor = () => {
    bg.style.background = "linear-gradient(to bottom right, "
    + color1.value
    + ", "
    + color2.value
    +")"
    hex.textContent = bg.style.background + ";"
}

randomColor = () => {
    let randColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randColor2 = Math.floor(Math.random()*16777215).toString(16);
    bg.style.background = "linear-gradient(to bottom right, #"
    + randColor1
    +", #"
    + randColor2
    +")"
    hex.textContent = bg.style.background + ";"
}

changeColor()
color1.addEventListener('input', changeColor)
color2.addEventListener('input', changeColor)
random.addEventListener('click', randomColor)
