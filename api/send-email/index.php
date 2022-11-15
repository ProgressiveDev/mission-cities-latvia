<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require_once '../vendor/autoload.php';

if (!empty($_POST) && !empty($_POST['email']) && !empty($_POST['firstname']) && !empty($_POST['message']) && !empty($_POST['mobile']) && !empty($_POST['company']))
{
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        $mail->SMTPDebug = SMTP::DEBUG_OFF;
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'zigmunds.laposko@gmail.com';                     //SMTP username
        // $mail->Password   = 'cgpyxzujeysgtytq';                               //SMTP password
        $mail->Password   = 'jflhqexkvlgvatmz';
        $mail->Mailer = 'smtp';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('info@missioncitieslatvia.com', 'Mission Cities Latvia');
        $mail->addAddress('zigmunds.laposko@gmail.com', 'info');
        $mail->addReplyTo($_POST['email'], $_POST['firstname']);

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Mission Cities Latvia';
        $mail->Body    = $_POST['message'] . '<br />---- <br />' .
                        '<br /> Partner: ' . $_POST['partner'] .
                        '<br /> Mobile: ' .  $_POST['mobile'] .
                        '<br /> Name: ' . $_POST['firstname'] .
                        '<br /> Email: ' . $_POST['email'] .
                        '<br /> Company: ' . $_POST['company'];
        // $mail->Body    = 'hello';
        $mail->AltBody = '';

        $mail->send();
        http_response_code(201);
        echo 'Message has been sent';
    } catch (Exception $e) {
        http_response_code(500);
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(500);
    echo " ";
}