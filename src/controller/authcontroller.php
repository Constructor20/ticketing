<?php 

require_once "model/authModel.php";


class AuthController {

    private $authModel;

    private $email;
    
    private $password;

    public function __construct() {
        $this->authModel = new authModel();
    }

    public function login($email , $password) {
        if((isset($_POST["email"]) || isset($_POST["password"])) == (null || "")) {
            return $_SERVER[""];
            echo"force a toi";
        } else {
            $row = $this->authModel->selectWhereUser($_POST["email"], $_POST["password"]);
        }
    }
}

?>