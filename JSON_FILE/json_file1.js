var dados = { 'um': 1, 'dois': 2, 'tres': 3 };

var dados1 = ["mizuk","programação","animes"];

function baixarArquivo(name) {
    var link = document.createElement('a');
    link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(dados);
    link.download = name;
    link.click();
}