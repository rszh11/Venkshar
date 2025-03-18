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

document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';

        // Simulieren Sie eine Antwort des Chatbots
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
});

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scrollen Sie nach unten
}

function getBotResponse(input) {
    // Einfache Logik für die Bot-Antwort
    if (input.toLowerCase() === 'hallo' || input.toLowerCase() === 'hi') {
        return 'Hallo! Wie kann ich Ihnen helfen?';
    } else if (input.toLowerCase() === 'hilfe') {
        return 'Was genau benötigen Sie Hilfe mit?';
    } else {
        return 'Es tut mir leid, ich kann Ihnen dabei nicht helfen.';
    }
}
