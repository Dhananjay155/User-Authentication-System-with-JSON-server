document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                errorMessage.style.display = 'none';
                alert('Login successful!');
                // Redirect to dashboard or any other logic
            } else {
                errorMessage.textContent = 'Invalid credentials. Please try again.';
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            errorMessage.textContent = 'An error occurred. Please try again later.';
            errorMessage.style.display = 'block';
        });
});
