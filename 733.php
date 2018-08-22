<?php
    $contents = file_get_contents('https://www.fantasyseriea.com/api/classic_table.php?lid=733');
    $res = file_put_contents($filename, $contents);
?>
