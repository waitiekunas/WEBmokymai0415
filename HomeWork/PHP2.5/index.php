<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2 Task No 5</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>


    <?php 
        $temp = [4, 3, 9, 19, 19, 9, 12, 20, 24, 20, 12, 14, 18, 21, 20, 23, 16, 16, 15, 19, 19, 17, 17, 15, 12, 13, 13, 15, 19, 21];
        echo 'Vidutine temp.'.round(array_sum($temp)/count($temp));
        echo '<br/>'; 
    
        rsort($temp);
        $firstFive = array_slice($temp,0,5);
        echo '5ios Silciausios: ';
    $firstFive = array_unique($firstFive);
        foreach($firstFive as $temW){
            echo $temW.' ';
            
        }
        echo '<br/>';
    
        sort($temp);
        $lastFive = array_slice($temp,0,5);
        $lastFive = array_unique($lastFive);
        echo '5ios salciausios: ';
        foreach($lastFive as $temC){
            echo $temC.' ';
            
        }
    
    ?>


</body>

</html>
