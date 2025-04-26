document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = "Thanks for your feedback, " + name + "!";
        this.reset(); // Reset form after submission
    } else {
        document.getElementById('responseMessage').textContent = "Please fill out all fields.";
    }
});
