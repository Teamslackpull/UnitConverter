

/*Unit Converter
when user presses button, generate
length in meter and feet
Volume in Liters and gallons
Mass in Kilograms and pounds
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
round the numbers down to 3 decimals places
*/

const InputEL = document.getElementById("Input-box")
const convertBtn = document.getElementById("convert-Btn")
const clearBtn = document.getElementById("clear-btn")
let FormulaLength = document.getElementById("formula-Length")
let FormulaVolume = document.getElementById("formula-Volume")
let FormulaMass = document.getElementById("formula-Mass")




//const LiterConversion  = 0.264
//const KiloConversion = 2.204
//let Feet = Meter * MeterConversion
//let Gallon = Liter * LiterConversion
//let Pound = Kilo * KiloConversion



let MeterConversion = 3.281
let LiterConversion = 0.264
let KiloConversion = 1000


convertBtn.addEventListener("click", function (){

    FormulaLength.innerHTML += ` ${InputEL.value} meters = ${InputEL.value * MeterConversion.toFixed(3)} feet | ${InputEL.value} feet = ${Math.round(InputEL.value / MeterConversion.toFixed(3))} meters`
    FormulaVolume.innerHTML += ` ${InputEL.value} Liters = ${InputEL.value * LiterConversion.toFixed(3)} Gallons | ${InputEL.value} Gallons = ${Math.round(InputEL.value / LiterConversion.toFixed(3))} Liters `
    FormulaMass.innerHTML += `   ${InputEL.value} Kilos  = ${InputEL.value * KiloConversion.toFixed(3)} pounds | ${InputEL.value} Pounds = ${Math.round(InputEL.value * KiloConversion.toFixed(3))} kilos `
})

 clearBtn.addEventListener("dblclick", function (){
     FormulaLength.textContent = " "
     FormulaVolume.textContent = " "
     FormulaMass.textContent = " "
     InputEL.value = " "
 })
