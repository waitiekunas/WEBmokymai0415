<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP4</title>
</head>

<body>


    <?php 
      
    $creationDate = 2020;
    
    
    function dateToShow($date){
        $currentDate = date('Y');
        
        if($date<$currentDate){
            echo "&copy; $date - $currentDate";
        }
        if($date>=$currentDate){
            echo "&copy; $currentDate";
        }
        
    }
    echo '</br>';
    dateToShow($creationDate);
    
    ?>
    
    


</body>

</html>
