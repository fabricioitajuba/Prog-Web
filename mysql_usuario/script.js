const login = document.getElementById('login');
const senha = document.getElementById('senha');
const resposta = document.getElementById('resposta');

login.addEventListener("click", ()=>{
    login.value = "";
    senha.value = "";
    resposta.innerHTML = "";
})