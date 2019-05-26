<?php
// $regstration = $_POST['registration'];
// $name= $_POST['name'];
// $email= $_POST['email'];

// if ($registration == "success"){
//  // some action goes here under php
//  echo json_encode(array("abc"=>'successfuly registered'));
//}

// if(isset($_POST['action']) && !empty($_POST['action'])) {
//     $action = $_POST['action'];
//     switch($action) {
//         case 'test' : echo "<script> console.log('test')</script>";break;
//         case 'blah' : echo "<script> console.log('blah')</script>";break;
//         // ...etc...
//     }
// }

include('db.php');

$sql = "SELECT * FROM foodbook_users";
$storeArray = Array();
$result = $mysqli->query($sql);
//$json = json_encode(($result->fetch_assoc()));
//var_export($json);
while($result->fetch_assoc()){
    $json = $result->fetch_assoc();
    array_push($storeArray,$json);

}

var_export(json_encode($storeArray));
exit();
?>