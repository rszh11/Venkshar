document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
    this.reset(); // Formular zurücksetzen
});
const footer = document.getElementById('footer');
const originalHeight = footer.offsetHeight; // Ursprüngliche Höhe des Footers

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Aktuelle Scroll-Position
    const newHeight = Math.max(originalHeight - scrollPosition / 2, 50); // Berechnung der neuen Höhe (max. 50px)
    footer.style.height = newHeight + 'px'; // Setzen der neuen Höhe
    footer.style.padding = newHeight > 50 ? '20px 0' : '10px 0'; // Anpassen des Paddings
});
