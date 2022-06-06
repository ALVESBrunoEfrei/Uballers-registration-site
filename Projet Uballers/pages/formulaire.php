
<?php
  
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "Uballers";
    
    $firstname = $_POST["firstname"]; 
    $lastname = $_POST["lastname"]; 
    $mail-numb = $_POST["number"]; 
    $mail-numb2 = $_POST["input_number2"];
    $password = $_POST["password"]; 

    if (!isset($firstname)){
      die("S'il vous plaît entrez votre prénom");
    }
    if (!isset($lastname)){
      die("S'il vous plaît entrez votre nom");
    }  

    if (!isset($mail_numb)){
      die("S'il vous plaît entrez votre e-mail ou numéro");
    }  
    if (!isset($mail_numb2)){
      die("S'il vous plaît confirmer votre e-mail ou numéro");
    }  
    if (!isset($password)){
      die("S'il vous plaît entrez votre mot de passe");
    }  
   
    if (($mail_numb) != ($mail_numb2)){
      die("il y a une erreur dans la confirmation de votre e-mail ou numéro");}
    
    
    $mysqli = new mysqli($host, $username, $password, $database);
    
   
    if ($mysqli->connect_error) {
      die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }  
    
    
    $statement = $mysqli->prepare("INSERT INTO User (firstname, lastname, mail_numb, password) VALUES(?, ?, ?, ?)"); 
    
    $statement->bind_param('ss', $name, $lastname, $mail_numb, $password); 
    
   
  }
?>