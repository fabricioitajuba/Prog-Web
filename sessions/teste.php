<?php
    //Recuperando as variáveis criadas no index.php
    //Primeiro devemos executar index.php
    session_start();
    
    if(isset($_SESSION['nome'])){
        var_dump($_SESSION['nome']);
        var_dump($_SESSION['dados']);
    }

    if($_SESSION['logged_in']){
        echo "logado";
    }
    else{
        echo "Não logado";
    }
?>