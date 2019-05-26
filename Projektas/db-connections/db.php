<?php
define("DB_SERVER", "localhost");
define("DB_USER","root");
define("DB_PASSWORD","");
define("DB_NAME","food_book");

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
if($mysqli->connect_error){
    echo "<script> console.log('error')</script>";
    exit();
} 

// $foreignID = 4;
// $Ingredient = "salt";
// $quantity = "2 spoons";

// mysqli_query($mysqli, "INSERT INTO ingredients (foreignID, ingredient, quantity) VALUES('$foreignID', '$Ingredient', '$quantity')");

// $sql = "SELECT * FROM foodbook_users";
// $result = $mysqli->query($sql);
// $array = $result->fetch_assoc();
// var_export($array);
// echo $array;
?>