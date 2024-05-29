/*
Timeout - Executa algo depois de um tempo (uma única vez!)

Esse programa, escreve uma mensagem na tela após 3 segundos
*/

const msg1 = document.getElementById("msg1")
const msg2 = document.getElementById("msg2")
const msg3 = document.getElementById("msg3")

//primeira maneira
setTimeout(function(){
    msg1.innerHTML = "Essa é a primeira mensagem!"
}, 3000)

//segunda maneira
function changeText2(){
    msg2.innerHTML = "Essa é a segunda mensagem!"
}

setTimeout(function() {
    changeText2()
}, 4000)

//terceira maneira
function changeText3(){
    msg3.innerHTML = "Essa é a terceira mensagem!"
}

setTimeout(changeText3, 5000)

//quarta maneira
setTimeout(() => {
    msg4.innerHTML = "Essa é a quarta mensagem!"
}, 6000)