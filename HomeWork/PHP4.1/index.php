<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP4.1</title>
</head>

<body>


    <?php 
       class Person {
           public $name;
           public $surName;
           
           public function sayHello(){
               echo "Hi, $this->name $this->surName";
           }
           
         
       }
    $andrius = new Person();
    $paulius = new Person();
    
    $andrius->name='Andrius';
    $andrius->surName='Vaitiekunas';
    
    $paulius->name='Paulius';
    $paulius->surName='Paulauskas';
    
    
    $andrius->sayHello();
    echo '</br>';
    $paulius->sayHello();
    
    ?>
    
    


</body>

</html>
