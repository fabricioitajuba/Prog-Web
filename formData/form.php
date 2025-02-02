<?php
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Origin: *");

    //Fazendo o upload do arquivo:
    // //echo json_encode($_FILES);
    // $temp = $_FILES['file']['tmp_name'];
    // $name = $_FILES['file']['name'];

    // if(move_uploaded_file($temp, uniqid().'.txt')){
    //     echo json_encode('uploaded');
    // }

    echo json_encode($_POST);
?>