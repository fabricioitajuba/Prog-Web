/*
Interval - Executa algo de tempo em tempo (várias vezes!)

Esse programa é um contador
*/

const msg = document.getElementById("msg")
const btnStop = document.getElementById("btnStop")

//Primeira maneiras
let time = 0

function changeText(){
    msg.innerHTML = `Current value: ${time}`
}

let interval = setInterval(function(){
    changeText()
    time++
}, 1000)

btnStop.addEventListener("click", (evt)=>{
    clearInterval(interval)
})