
// --- Footer Year 

const yearSpan = document.getElementById('current-year');
const currentYear = new Date().getFullYear();

if(yearSpan){
    yearSpan.textContent = currentYear;
}


// --- Sign-up Form Validation ---

const signupForm = document.getElementById('signupForm');
if(signupForm){
    signupForm.addEventListener('submit', function(event){
        event.preventDefault();
        clearErrors();

        const username = document.getElementById('username').value.trim()
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim()
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();
        

        if(username === ''){
            displayError('usernameError', 'username is required');
            isValid = false;
        }
        
        if(email===''){
            displayError('emailError', 'Email address is required.');
            isValid = false;
        } else if (!isValidEmail(email)){
            displayError('emailError', 'please enter a valid email adress')
        }
    
    
    })
}

