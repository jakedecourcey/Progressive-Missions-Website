<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
    $interest = $_POST['interest'];
		$from = 'Progressive Missions Website';
		$to = 'jakedecourcey@gmail.com';
		$subject = 'Contact Request from PMI Website';

		$body = "From: $name\n E-Mail: $email\n Message:\n $message";

		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}

// If there are no errors, send the email
if (!$errName) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
	}
}
	}
?>