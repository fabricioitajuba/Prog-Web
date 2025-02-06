<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP na mesma página</title>
</head>
<body>

    <?php
        //$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

        //var_dump($dados);

        /*if(isset($dados['SendDados'])){

            $a = $dados['valor1'];
            $b = $dados['valor2'];
            $c = $a + $b;

            echo $c;
        }*/
        //-------------------------------------------
        //var_dump($_POST);

        if($_POST){

            $a = $_POST["valor1"];
            $b = $_POST["valor2"];
            $c = $a + $b;

            //echo $c;            
        }
    ?>

    <h3>Entre com os seguintes dados:</h3>

    <form method="POST" action="">
        <label for="">Valor 1 = </label>
        <input type="text" name="valor1" value="<?php if(isset($_POST['valor1'])){echo $a;} ?>"><br><br>
        <label for="">Valor 2 = </label>
        <input type="text" name="valor2" value="<?php if(isset($_POST['valor2'])){echo $b;} ?>"><br><br>
        <input type="submit" name="SendDados" value="Calcular a soma">        
    </form>
    <br>
    <span>V1 + V2 = </span>
    <span id="resultado"><?php echo $c ?></span>
</body>
</html>