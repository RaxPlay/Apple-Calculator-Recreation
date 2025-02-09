let display = document.querySelector('.display')

function clearDisplay(){
    display.value = ''
}
function appendDisplay(input){
    display.value += input
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = 'Error'
    }
}
function negativePositive(){
    if(display.classList.contains('positive')){
        display.value = `(-${display.value})`
        display.classList.remove('positive')
        display.classList.add('negative')
    }
    else if(display.classList.contains('negative')){
        display.value = `${display.value}`
        display.classList.remove('negative')
        display.classList.add('positive')
    }
}
