<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-Mail-Adresse, an die die Nachricht gesendet werden soll
    $to = "rs.ambi@icloud.com"; // Ersetzen Sie dies durch Ihre E-Mail-Adresse
    $subject = "Neue Nachricht von Kontaktformular";
    $body = "Name: $name\nE-Mail: $email\nNachricht:\n$message";

    // E-Mail-Header
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
