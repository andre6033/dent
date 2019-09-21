<?php
    $name=$_POST['name'];
    $num_tel='Номер телефона:'.$_POST['num_tel'];
    $to="andred@localhost.com";
    $headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to,$name,$num_tel,$headers)
?>