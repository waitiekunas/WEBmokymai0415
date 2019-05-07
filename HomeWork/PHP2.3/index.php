<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2 Task No 3</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>


    <?php 
    $cities3=[
        'Tokijas'=>['13.6', '1868', 'Japonija'],
        'Vasingtonas'=>['0.6', '1790', 'JAV'],
        'Maskva'=>['11.5', '1147', 'Rusija']
    ];
    $metai = 1774;
    if($metai >= $cities3['Vasingtonas'][1]){
        echo 'Vasingtonas yra JAV sostine';
    } elseif($metai === 1774){
        echo 'JAV sostine vis dar Filadelfijoje';
    } else {
        $x = $cities3['Vasingtonas'][1];
        $y = $metai;
        $skirtumas = $x-$y;
        echo "Liko $skirtumas metai \(u\) iki Vasigtono ikurimo";
    }
    
    ?>


</body>

</html>
