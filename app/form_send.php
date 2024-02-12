<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>succesfull page</title>
	<link rel="stylesheet" href="../app/css/styles.css">
</head>

<body>
	<div class="form-send-succesfull">
		<a class="back" href="/index.html">назад</a>
		<span class="form-send-succesfull__message"> Сообщение успешно отправлено !</span>
	</div>

	<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$messageAreaText = $_POST['textarea'];

$to = "leonid.spb2015@yandex.ru"; // емайл получателя данных из формы
$tema = "Форма обратной связи на PHP на сайте 'Car Musc'"; // тема полученного емайла
$message = "Ваше имя: " . $_POST['name'] . "<br>"; //присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефона: " . $_POST['phone'] . "<br>"; //полученное из формы name=phone
$message .= "Сообщение: " . $_POST['textarea'] . "<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, "Сайт Car Musc"); //отправляет получателю на емайл значения переменных


?>
</body>

</html>