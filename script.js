document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
    this.reset(); // Formular zurücksetzen
});
