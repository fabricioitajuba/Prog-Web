<?php
    /*
    Sessions - Seções

    Armazena variáveis no navegador através de arquivos sobre a forma de cookies.
    Esses arquivos possuem o nome 'id' esses arquivos são apagados quando fechamos
    o navegador. Utilizamos seções para pegarmos valores em qualquer parte do 
    sistema.
    As seções são armazenadas sobre a forma de array.

    Com o javascript podemos "roubar" a seção através do comando: document.cookie

    Podemos desabilitar a cópia de cookies através do "HttpOnly"
    */

    session_set_cookie_params(['lifetime' => 5, 'httponly' => true]); //Atera as configurações do cookie (opcional)
    /*
    lifetime - cria o arquivo com os cookies e espera um tempo (segundos), caso o outro navegador não
                 carregue os cookies dentro do tempo configurado, o arquivo é deletado.
    httponly - não permite a cópia do arquivo contendo as seções.  
    save_path - altera o caminho onde os cookies são salvos
    */


    session_start(); //Para trabalharmos com sessions primeiro devemos iniciar
                     //Cria o arquivo

    var_dump(session_id()); //Mostra o nome do arquivo dom o id criado

    //session_regenerate_id(true); //Cria outro arquivo com nome id diferente. apaga o anterior

    $_SESSION['nome'] = 'Fabricio'; //Para usa-lá usamos a super global
    $_SESSION['dados'] = [
        'idade' => 48,
        'profissão' => 'engenheiro'
    ];

    $_SESSION['logged_in'] = true;
?>