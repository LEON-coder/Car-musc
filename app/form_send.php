<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$messageArea = $_POST['.form_questions'];

$name = trim($name);
$email = trim($email);
$phone = trim[$phone];
$messageArea = trim[$messageArea];


$to = "leonid.spb2015@yandex.ru"; // емайл получателя данных из формы
$tema = "Форма обратной связи на PHP на сайте 'Car Musc'"; // тема полученного емайла
$name = "Ваше имя: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$email  .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$phone .= "Номер телефона: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$messageArea .= "Сообщение: ".$_POST['form_questions']."<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $name, $email, $phone, $messageArea, $headers ); //отправляет получателю на емайл значения переменных

if (mail($to, $name, $email, $phone, $messageArea,"From:  \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>

