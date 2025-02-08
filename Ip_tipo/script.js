
tipo_IP('DHCP');

//Habilita o tipo de ip
function tipo_IP(tipo){

    if(tipo === 'DHCP'){

        document.getElementById('txt_dhcp').checked = true;
        document.getElementById('txt_fixo').checked = false;

        for(var i = 1; i < 5; i++){

            document.getElementById(`ip${i}`).disabled = true;
            document.getElementById(`mask${i}`).disabled = true;
            document.getElementById(`gat${i}`).disabled = true;
        }
    }
    else{

        document.getElementById('txt_dhcp').checked = false;
        document.getElementById('txt_fixo').checked = true;

        for(var i = 1; i < 5; i++){

            document.getElementById(`ip${i}`).disabled = false;
            document.getElementById(`mask${i}`).disabled = false;
            document.getElementById(`gat${i}`).disabled = false;
        }
    }

}