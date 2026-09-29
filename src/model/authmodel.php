<?php

require_once("config/Database.php");

class Authmodel  {
    private $email;
    private $password;
    
    public function selectWhereUser($email, $password) {
        $request = "select from user where email='" . $email ." and password = ". $password ."";
        $exec =  $this->PDO->prepare($request);
        $exec->execute();


    }


}
?>