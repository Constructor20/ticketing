<?php

require_once("config/Database.php");

class Authmodel  {
    private $email;
    private $password;

    private $PDO;

    public function __construct() {
        $this->PDO = new Database($_ENV['host'], $_ENV['MARIADB_DATABASE'],$_ENV['MARIADB_USER'],$_ENV['MARIADB_PASSWORD']);
    }
    
    public function selectWhereUser($email, $password) {
        $request = "select * from user where :email='" . $email ."' and :password = '". $password ."'";
        $exec = $this->PDO->getPDO();
        $row = $exec->prepare($request);
        $row->execute(array(':email'=> $email, ':password'=> $password));
        $row->fetch(PDO::FETCH_ASSOC);

    }
}
?>