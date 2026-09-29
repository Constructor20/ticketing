<?php


class Database{
    private $PDO;
    private $db;
    private $user;
    private $password;
    private $host;



    public function __construct($host, $db, $user, $password){
        try {    

            $this->PDO = new PDO("mysql:host=$host;dbname=$db", $user, $password);
            $this->PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->PDO->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $this->PDO->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    
    }

    


    /**
     * Get the value of PDO
     */ 
    public function getPDO()
    {
        return $this->PDO;
    }
}


?>