document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht!');
    this.reset(); // Formular zurücksetzen
});
function initMap() {
    // Der Standort von Uluru
    const position = { lat: -25.344, lng: 131.031 };

    // Die Karte, zentriert auf Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
    });

    // Die Markierung, positioniert auf Uluru
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "Uluru",
    });
}
