function validateForm(event) 
{
    event.preventDefault(); 
    const fullName = document.querySelector('input[placeholder="Enter Name"]');
    const username = document.querySelector('input[placeholder="Enter Username"]');
    const email = document.querySelector('input[placeholder="Enter Email"]');
    const phone = document.querySelector('input[placeholder="Enter Number"]');
    const password = document.querySelector('input[placeholder="Enter Password"]');
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]');
    const nameRegex = /^[A-Za-z\s]{1,15}$/;
    const usernameRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{10,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!nameRegex.test(fullName.value))
    {
        alert("Full Name must be less than or equal to 15 characters and contain only alphabets.");
        return;
    }
    if (!usernameRegex.test(username.value))
     {
        alert("Username must be at least 10 characters long and contain both alphabets and numbers.");
        return;
    }
    if (!emailRegex.test(email.value)) 
    {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phoneRegex.test(phone.value)) 
    {
        alert("Phone Number must contain only numbers.");
        return;
    }
    if (password.value !== confirmPassword.value) 
    {
        alert("Passwords do not match.");
        return;
    }
    alert("Registration successful!");
}
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
const passwordField = document.querySelector('input[placeholder="Enter Password"]');
const confirmPasswordField = document.querySelector('input[placeholder="Confirm Password"]');
passwordField.setAttribute('type', 'password');
confirmPasswordField.setAttribute('type', 'password');