let initialNumber   =   document.getElementById('initial-number')
let resultNumber    =   document.getElementById('result-number')
let switchUnits     =   document.getElementsByName('switch')
initialNumber.addEventListener('input', convertTemperature)
switchUnits.forEach(button => {
    button.addEventListener('click', convertTemperature)
})
function convertTemperature() {
    for (let i = 0; i < switchUnits.length; i++) {
        if (switchUnits[i].checked) {
            currentUnits = switchUnits[i].value
        }
    }
    switch(currentUnits) {
        case 'C':
            convertedNumber = (initialNumber.value * 1.8) + 32
            resultNumber.innerText = Math.floor(convertedNumber) + 'Â°F'
        break
        case 'F':
            convertedNumber = (initialNumber.value - 32) / 1.8
            resultNumber.innerText = Math.floor(convertedNumber) + 'Â°C'
        break
        default:
            resultNumber.innerText = 'Error'
    }
    if (convertedNumber < -1000) {
        resultNumber.innerText = "Cold af"
    } else if (convertedNumber > 1000) {
        resultNumber.innerText = "Hot af"
    }

}
initialNumber.value = 25
convertTemperature()