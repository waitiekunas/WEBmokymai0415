<?php
include('db.php');
$sql = "SELECT * FROM ingredients";
$storeArray = Array();
$result = $mysqli->query($sql);
while($result->fetch_assoc()){
    $json = $result->fetch_assoc();
    array_push($storeArray,$json);
}
var_export(json_encode($storeArray));
exit();
?>