/**
 * Operações CRUD simples
 * Autor: Fabrício de Lima Ribeiro
 * Data: 02/02/25
 * Status: Não Concluído
 */

const form = document.getElementById("form");

form.addEventListener("submit", async event =>{
           
    event.preventDefault();
    var formData = new FormData(form);    
        
    //Recupera os dados do formData e coloca em um objeto
    const data = {}
    for(const [name, value] of formData){
        data[name] = value;
    }                

    const resp = await sendAPI("api-rest.php", "POST", data);
    console.log(resp);           
})

//Envia dados para a API
async function sendAPI(url, type, data){

    if(type === "GET"){

        const response = await fetch(url, {
            method: type,
            headers: {
                "Content-type": "application/json; charset=utf-8",            
            }
        })
        return await response.json();
    }       
    else if(type === "POST" || type === "PUT"){

        const response = await fetch(url, {
            method: type,
            headers: {
                "Content-type": "application/json; charset=utf-8",            
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }
    else if(type === "DELETE"){
        
        const new_url = url + "?" + data; 

        const response = await fetch(new_url, {
            method: type,
        })
        return await response.json();
    }     
    else{
        console.log("Método não implementado!")
    } 
}