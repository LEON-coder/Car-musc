<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode[$phone];

$name = trim($name);
$email = trim($email);
$phone = trim[$phone];


echo $name ;
echo "<br>";
echo $email;
echo "<br>";
echo $phone;

if (mail("leonid.spb2015@yandex.ru", "Заказ с сайта "Car Musc", "ФИО:".$name.". E-mail: ".$email . phone: ".$phone,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>

