<?php

    // //header("Access-Control-Allow-Headers: Content-Type");
    // header("Access-Control-Allow-Headers:Access-Control-Allow-Mehtods,Content-Type,Access-Control-Allow-Mehtods,Authorization,X-Requested-With");  
    // header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // header("Access-Control-Allow-Origin: *");
    // header("Content-Type: application/json"); 

    //echo json_encode($_SERVER['REQUEST_METHOD']);

    if($_SERVER['REQUEST_METHOD'] === 'GET'){

        header('Content-Type: application/json');
        echo json_encode("Método GET");
    }
    else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $data = json_decode(file_get_contents('php://input'), true);

        header('Content-Type: application/json');
        echo json_encode($data);
    }
    else if($_SERVER['REQUEST_METHOD'] === 'PUT'){

        $data = json_decode(file_get_contents('php://input'), true);

        header('Content-Type: application/json');
        echo json_encode($data);
    }
    else if($_SERVER['REQUEST_METHOD'] === 'DELETE'){

        //não retorna nada, somente executa
        $id = $_GET['id'];        

        //echo json_encode(array('id' => $id));

        $error = false;

        if($error){
            echo json_encode(array('delete' => 'failed'));
        }
        else{
            echo json_encode(array('delete' => 'success'));            
        }
    }        
    else{
        echo json_encode("Método Desconhecido!");
    }

?>