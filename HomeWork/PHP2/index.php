<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2 task No 1</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>


    <?php 

    $cities = ['Berlynas', 'Roma', 'Londonas'];
    $cities[] = 'Tokijas';
    print_r($cities);
    ?>
    <ul>
        <li><?php echo $cities[1]?></li>
    </ul>
    <?php 
    $cities2 = [
    'tokijas'=>13.6,
    'vasingtonas'=>0.6,
    'maskva'=>11.5
];
    $cities2['londonas'] = 8.6;
    print_r($cities2);
    ?>

    <ul>
        <?php 
        foreach($cities2 as $city=>$people){
            echo "<li> $city gyventoju skaicius: $people </li>";
        }
        ?>
    </ul>

</body>

</html>
