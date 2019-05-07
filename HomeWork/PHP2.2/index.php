<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2 Task No 2</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>
    <style>
        tr {
            height: 40px;
            text-align: center;
        }

    </style>

    <?php 
    $cities=[
        'Tokijas'=>['13.6', '1868', 'Japonija'],
        'Vasingtonas'=>['0.6', '1790', 'JAV'],
        'Maskva'=>['11.5', '1147', 'Rusija']
    ];
    $cities['Londonas']=['8.6', '43', 'Anglija'];
    
    ?>
    <ul>
        <?php  
            echo '<li> Gyventoju sakicius: ' . $cities['Londonas'][0] . ' mln. </li>';
            echo '<li> Ikurtas: ' . $cities['Londonas'][1] . ' m. </li>';
            echo '<li> Salis: ' . $cities['Londonas'][2] . '</li>';
        ?>
    </ul>
   

</body>

</html>
