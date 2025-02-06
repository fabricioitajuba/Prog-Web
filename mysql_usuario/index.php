<?php
    //Destroi todas as variáveis do php
    unset($login);
    unset($senha);
    unset($tasks);
    unset($resposta);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar usuário</title>
</head>
<body>

    <?php
        if($_POST){
            //Verifica se o login está cadastrado            
            $login = $_POST["login"];
            $senha = $_POST["senha"];

            include_once 'conecta.php'; //inclui apenas uma vez
            //require 'conecta.php';
            $query = "SELECT login FROM usuarios WHERE login = '".$login."' LIMIT 1";
            $stmt = $conn->query($query);
            $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

            //var_dump($tasks[0]["login"]);

            if($tasks[0]["login"]){
                $resposta = "<span style='color: #ff0000'>usuário já existe!</span>";
            }
            else{
                $senha_hash = password_hash($senha, PASSWORD_DEFAULT);
                $query = "INSERT INTO usuarios (login, senha) VALUES ('".$login."', '".$senha_hash."')";   
                $stmt = $conn->prepare($query);
                $stmt->execute();

                $resposta = "<span style='color: #ff0000'>usuário cadastrado!</span>";
                $login = null;
                $senha = null;
            }
        }
    ?>

    <h3>Entre com os seguintes dados:</h3>

    <form method="POST" action="">
        <label for="">Login:</label>
        <input type="text" name="login" id="login" value="<?php echo $login ?>"><br><br>
        <label for="">Senha:</label>
        <input type="password" name="senha" id="senha" value="<?php echo $senha ?>"><br><br>
        <input type="submit" value="Enviar">      
        <span id="resposta"><?php echo $resposta ?></span>  
    </form>

    <script src="script.js"></script>
</body>
</html>