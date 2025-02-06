<?php
    //Destroi todas as variáveis do php
    unset($login);
    unset($senha);
    unset($senha_hash);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP na mesma página</title>
</head>
<body>

    <?php
        if($_POST){
            
            $login = $_POST["login"];
            $senha = $_POST["senha"];

            if($_POST["senha"]){
                $senha_hash = password_hash($senha, PASSWORD_DEFAULT);       
            }
        }
    ?>

    <h3>Entre com os seguintes dados:</h3>

    <form method="POST" action="">
        <label for="">Login:</label>
        <input type="text" name="login"><br><br>
        <label for="">Senha:</label>
        <input type="password" name="senha"><br><br>
        <input type="submit" value="Enviar">        
    </form>
    <br>
    <span>Login:</span>
    <span><?php echo $login ?></span>
    <br></br>
    <span>Senha hash:</span>
    <span><?php echo $senha_hash ?></span>
</body>
</html>