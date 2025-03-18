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
<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Überprüfen, ob das Cookie bereits gesetzt ist
        if (!getCookie("cookies_accepted")) {
            document.getElementById("cookie-banner").style.display = "block";
        }

        // Event-Listener für den Akzeptieren-Button
        document.getElementById("accept-cookies").addEventListener("click", function() {
            setCookie("cookies_accepted", "true", 30); // Cookie für 30 Tage setzen
            document.getElementById("cookie-banner").style.display = "none"; // Banner ausblenden
        });
    });

    // Funktion zum Setzen eines Cookies
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Funktion zum Abrufen eines Cookies
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
</script>
