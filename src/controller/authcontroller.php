<?php 

require_once("model/authModel.php");


class AuthController {
    public function login()
    {
        if(isset($_POST["email"]) || isset($_POST["password"]) == null || "") {
            echo"force a toi";
        }
    }
}

?>