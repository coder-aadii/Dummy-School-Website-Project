// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the login form and add a submit event listener
    var loginForm = document.querySelector('.login-signup form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Your authentication logic here (e.g., check against a hardcoded username/password)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect to another page or perform further actions here
        } else {
            alert('Invalid username or password.');
        }
    });

    // Example of dynamic content loading (you can replace with your actual dynamic content loading logic)
    var homeSection = document.getElementById('home');
    homeSection.addEventListener('click', function () {
        // Example of changing text content dynamically
        homeSection.innerHTML = '<h3>Updated Home Content</h3><p>This content was dynamically loaded.</p>';
    });
});
