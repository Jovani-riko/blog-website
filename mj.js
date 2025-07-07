
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
        
        let isValid = true;

        if(username === ''){
            displayError('usernameError', 'username is required');
            isValid = false;
        }
        
        if(email===''){
            displayError('emailError', 'Email address is required.');
            isValid = false;
        } else if (!isValidEmail(email)){
            displayError('emailError', 'please enter a valid email adress');
            isValid = false;

        }

        if(password === ''){
            displayError('passwordError', 'Password is Required.');
            isValid = false;
        
        }

        else if (password.length < 8 ){
            displayError('passwordError', 'password must be at least 8 characters long.')
            isValid = false;
        }
        

        if(confirmPassword === ''){
            displayError('passwordError', 'Confirm password is required.');
            isValid = false;

        }
        else if(password !==confirmPassword){
            displayError('passwordError', 'password must match!');
            isValid = false;
        }

        if (isValid){
            console.log('sign-up form submitted successfully!');
            console.log('username:', username);
            console.log('Email:', email);
            console.log('Phone:', phone);
//add sucess msg
            console.log('Form is valid and ready to submit to a server!');
        }

    
    
    });
}

function displayError(elementId, message){
    const errorElement = document.getElementById(elementId);
    if(errorElement){
        errorElement.textContent = message;
    }
}

function clearErrors(){
    const errorElement = document.querySelectorAll('.error-message');
    errorElement.forEach(element => {
        element.textContent = '';
    });
}


function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



console.log(signupForm);
