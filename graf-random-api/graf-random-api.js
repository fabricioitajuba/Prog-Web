/**
 * Este exemplo, gera um gráfico com números randômicos atualizados
 * a cada segundo utilizando a api do site
 */

var vetorTempo = []
var vetorNumero = []

var valorMaximo = 0
var valorMinimo = 100
var valorMedio = 0

var tempo = 0
var numero

const endpoint = "https://dev-py4flr.pantheonsite.io/api";

//Cria o gráfico
const ctx = document.getElementById('grafico');
  
let grafico = new Chart(ctx, {
  type: 'line',
  data: {
    labels: vetorTempo,
    datasets: [{
      label: 'Números aleatórios',
      data: vetorNumero,
      borderWidth: 2,
      //tension: 0.3,
      pointRadius: 0, //Retira o ponto
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//Vefifica valores máximos e mínimos
function verificaMaximoMinimo(){

    //Verifica valor mínimo
    if(numero < valorMinimo){
        valorMinimo = numero
        document.getElementById('labelNumeroMinimo').innerHTML = `${valorMinimo}, no tempo = ${tempo}`
    }

    //Verifica valor máximo
    if(numero > valorMaximo){
        valorMaximo = numero
        document.getElementById('labelNumeroMaximo').innerHTML = `${valorMaximo}, no tempo = ${tempo}`
    }

    valorMedio = (valorMaximo + valorMinimo) / 2
    document.getElementById('labelNumeroMedio').innerHTML = valorMedio
}

//Atualiza dados da tabela
function atualizaTela(){
    document.getElementById('labelTempo').innerHTML = tempo
    document.getElementById('labelNumero').innerHTML = numero
}

//Atualiza valores no gráfico
const atualizaValores=()=>{

  fetch(endpoint)
  .then(res=>res.json())
  .then(data=>{

      numero = data.number;
      verificaMaximoMinimo();
      atualizaTela();
      
      vetorTempo.push(tempo);
      vetorNumero.push(numero);

      tempo++;

      grafico.data.labels = vetorTempo;
      grafico.data.datasets[0].data = vetorNumero;
      grafico.update();
  });
}

let intervado = setInterval(atualizaValores, 1000)