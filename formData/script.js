//const form = document.querySelector('form');
const form = document.getElementById('form');

form.addEventListener('submit', async event =>{

    event.preventDefault();
    
    const formData = new FormData(form);

    console.log(formData);
    
    //formData.append('firstName', document.querySelector('#firstName').value);
    
    const data = await fetch("form.php", {
        method: 'POST',
        mode: 'cors',
        body: formData
    });

    const response = await data.json();
    console.log(response);
    
    //Recupera os dados do formData e coloca em um objeto
    const data1 = {}
        for(const [name, value] of formData){
        data1[name] = value;
    }     
    console.log(data1);

    //Outra maneiroa de recuperar os dados do formData e coloca em um objeto
    const data2 = Object.fromEntries(formData);
    console.log(data2);

    //console.log(form.firstName.value);
})
