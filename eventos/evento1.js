const numero=document.getElementById("numero");

numero.addEventListener("keypress", function(event){

    if(event.key == "Enter")
    {
        var n; //tipo string
    
        n=parseFloat(numero.value.replace(",",".")); //troca ","" por ".

        document.getElementById("resultado").innerHTML = "- Você digitou: "+ n;
    }
});