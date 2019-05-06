<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 1</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>

    <main id='main'>
        <?php 
            $country = 'Lietuva';
            $city = 'Vilnius';
            $population = 574221;
            $largest_population = true;
            $x = 10;
            $y = 7;
        ?>
        <ul>
            <li><?php echo $country; ?></li>
            <li><?php echo $city; ?></li>
            <li><?php echo $population; ?></li>
        </ul>
        <?php echo $city . ' - ' . 'Lietuvos sostinė';  ?>
        <br />
        <?php echo "$city ir $country sparciai auga";  ?>
        <br />
        <?php 
        $answer = $x + $y;
        echo "$x + $y = $answer"; ?>
        <br />
        <?php 
        $answer = $x - $y;
        echo "$x - $y = $answer"; ?>
        <br />
        <?php 
        $answer = $x * $y;
        echo "$x * $y = $answer"; ?>
        <br />
        <?php 
        $answer = $x / $y;
        echo "$x / $y = $answer"; ?>
        <br />
        <?php 
        $answer = $x % $y;
        echo "$x % $y = $answer"; ?>


    </main>

</body>

</html>
