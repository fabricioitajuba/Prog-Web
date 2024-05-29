const div_data = document.getElementById("div_data");
const div_relogio = document.getElementById("div_relogio");

const data = new Date();

//console.log(data);

//console.log(Date.now()); //Timestamp

//console.log("Hora: " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
//console.log("Data: " + data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear());

let dia = data.getDate();
dia = dia<10?"0"+dia:dia;

let mes = data.getMonth();
mes = mes<10?"0"+mes:mes;

const data_r = dia+"/"+mes+"/"+data.getFullYear();

div_data.innerHTML = data_r;

const relogio=()=>{

    const data = new Date();

    let Hora = data.getHours();
    Hora = Hora<10?"0"+Hora:Hora;

    let Minuto = data.getMinutes();
    Minuto = Minuto<10?"0"+Minuto:Minuto;

    let Segundo = data.getSeconds();
    Segundo = Segundo<10?"0"+Segundo:Segundo;    

    const hora_completa = Hora + ":" + Minuto + ":" + Segundo

    div_relogio.innerHTML = hora_completa;
}

const intervalo = setInterval(relogio, 1000);