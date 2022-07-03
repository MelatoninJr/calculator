
const container = document.querySelector('.container')
let header = document.createElement('div')
header.classList.add('header')
container.appendChild(header)
header.innerText = 'CALC-YOU-LATER'

let buttonContainer = document.createElement('div')
buttonContainer.classList.add('buttonContainer')
container.appendChild(buttonContainer)

let calcContainer = document.createElement('div')
calcContainer.classList.add('calcontainer')
buttonContainer.appendChild(calcContainer)

let footer = document.createElement('div')
footer.classList.add('footer')
container.appendChild(footer)
footer.innerText = 'COPYRIGHT © 2022 MELATONINJR'

let display = document.createElement('div')
display.classList.add('display')
calcContainer.appendChild(display)
display.innerText = ""

let buttonDisplay = document.createElement('div')
buttonDisplay.classList.add('buttondisplay')
calcContainer.appendChild(buttonDisplay)


let clear = document.createElement('button')
clear.classList.add('clear')
buttonDisplay.appendChild(clear)
clear.innerText = 'CLEAR'

let back = document.createElement('button')
back.classList.add('back')
buttonDisplay.appendChild(back)
back.innerText = 'BACK'

let subbutton = document.createElement('button')
subbutton.classList.add('button')
buttonDisplay.appendChild(subbutton)
subbutton.innerText = '-'



    let buttonone = document.createElement('button')
    buttonone.classList.add('button')
    buttonone.innerText = "7"
    buttonDisplay.appendChild(buttonone)

    let buttontwo = document.createElement('button')
    buttontwo.classList.add('button')
    buttontwo.innerText = "8"
    buttonDisplay.appendChild(buttontwo)

    let buttonthree = document.createElement('button')
    buttonthree.classList.add('button')
    buttonthree.innerText = "9"
    buttonDisplay.appendChild(buttonthree)

    let buttonfour = document.createElement('button')
    buttonfour.classList.add('button')
    buttonfour.innerText = "/"
    buttonDisplay.appendChild(buttonfour)



    let buttonfive = document.createElement('button')
    buttonfive.classList.add('button')
    buttonfive.innerText = "4"
    buttonDisplay.appendChild(buttonfive)

    let buttonsix = document.createElement('button')
    buttonsix.classList.add('button')
    buttonsix.innerText = "5"
    buttonDisplay.appendChild(buttonsix)

    let buttonseven = document.createElement('button')
    buttonseven.classList.add('button')
    buttonseven.innerText = "6"
    buttonDisplay.appendChild(buttonseven)

    let buttoneight = document.createElement('button')
    buttoneight.classList.add('button')
    buttoneight.innerText = "*"
    buttonDisplay.appendChild(buttoneight)






    let buttonnine = document.createElement('button')
    buttonnine.classList.add('button')
    buttonnine.innerText = "1"
    buttonDisplay.appendChild(buttonnine)

    let buttonten = document.createElement('button')
    buttonten.classList.add('button')
    buttonten.innerText = "2"
    buttonDisplay.appendChild(buttonten)

    let buttoneleven = document.createElement('button')
    buttoneleven.classList.add('button')
    buttoneleven.innerText = "3"
    buttonDisplay.appendChild(buttoneleven)

    let buttontwelve = document.createElement('button')
    buttontwelve.classList.add('button')
    buttontwelve.innerText = "+"
    buttonDisplay.appendChild(buttontwelve)




    let buttonthirteen = document.createElement('button')
    buttonthirteen.classList.add('zero')
    buttonthirteen.innerText = "0"
    buttonDisplay.appendChild(buttonthirteen)

    let buttonfourteen = document.createElement('button')
    buttonfourteen.classList.add('button')
    buttonfourteen.innerText = "."
    buttonDisplay.appendChild(buttonfourteen)

    let buttonfifteen = document.createElement('button')
    buttonfifteen.classList.add('button')
    buttonfifteen.innerText = "="
    buttonDisplay.appendChild(buttonfifteen)

    let showDisplay = ''
    let equation = ''

    const add = function(a, b) {
        return Number(a) + Number(b)
    };
    
    const subtract = function(a, b) {
        return a - b
    };
    
    const multiply = function(a, b) {
        return a * b
      };
    
      const divide = function(a, b) {
        return a / b
      };
      
    
    
     


//operate function checks for what the stored operator is then executes the proper
//equation on a and b
      const operate = (operator, a, b) => {
        if (operator === '+') {
            return add(a, b)
        } else if( operator === '-') {
            return subtract(a, b)
        } else if(operator === '*') {
            return multiply(a, b)
        } else if(operator === '/') {
            return divide(a, b)
        }
      }

      
//Variables for operate() function
let operation = ''
let one = ''
let two = ''


//linking all buttons to a string and displaying them on calc
buttonnine.onclick = function(event) {
    showDisplay = showDisplay + '1'
    display.innerText = showDisplay
}
buttonten.onclick = function(event) {
    showDisplay = showDisplay + '2'
    display.innerText = showDisplay
}
buttoneleven.onclick = function(event) {
    showDisplay = showDisplay + '3'
    display.innerText = showDisplay
    console.log(showDisplay)
}

buttonfive.onclick = function(event) {
    showDisplay = showDisplay + '4'
    display.innerText = showDisplay
}
buttonsix.onclick = function(event) {
    showDisplay = showDisplay + '5'
    display.innerText = showDisplay
}

buttonseven.onclick = function(event) {
    showDisplay = showDisplay + '6'
    display.innerText = showDisplay
}
buttonone.onclick = function(event) {
    showDisplay = showDisplay + '7'
    display.innerText = showDisplay
}

buttontwo.onclick = function(event) {
    showDisplay = showDisplay + '8'
    display.innerText = showDisplay

}

buttonthree.onclick = function(event) {
    showDisplay = showDisplay + '9'
    display.innerText = showDisplay
}

buttonthirteen.onclick = function(event) {
    showDisplay = showDisplay + '0'
    display.innerText = showDisplay
}

buttonfourteen.onclick = function(event) {
    showDisplay = showDisplay + '.'
    display.innerText = showDisplay
}

back.onclick = function(event) {
    let slice = showDisplay.slice(0, -1)
    console.log(slice)
    showDisplay = slice
    display.innerText = showDisplay
}

buttontwelve.onclick = function(event) {
    operation = '+'
    one = showDisplay
    console.log(showDisplay)
    showDisplay = ''
    display.innerText = '+'
   
}

buttonfour.onclick = function(event) {
    operation = '/'
    one = showDisplay
    console.log(showDisplay)
    showDisplay = ''
    display.innerText = '/'
   
}

buttoneight.onclick = function(event) {
    operation = '*'
    one = showDisplay
    console.log(showDisplay)
    showDisplay = ''
    display.innerText = '*'
   
}

subbutton.onclick = function(event) {
    operation = '-'
    one = showDisplay
    console.log(showDisplay)
    showDisplay = ''
    display.innerText = '-'
   
}

clear.onclick = function(event) {
    showDisplay = ''
    display.innerText = ''
    console.log(showDisplay)


}
//Button fifteen is the = button. Can't seem to get display inner Text to show number.
//It shows undefined but the number is correctly displayed in console.
buttonfifteen.onclick = function(event) {
    two = showDisplay
    let testt = operate(operation, one, two)
    showDisplay = testt
    display.innerText = testt.toString()
}


let num = '12'







console.log(Number(num))
