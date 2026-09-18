document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const otpGroup = document.getElementById('otpGroup');
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    let isOtpStage = false;
    let detectedRole = '';

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const username = document.getElementById('username').value.trim();
        const RepublicPassword = document.getElementById('password').value;
        const otpValue = document.getElementById('otp').value.trim();

        errorMessage.style.display = 'none';

        if (!isOtpStage) {
            // FIXED: Checking credentials properly for both users
            if (username === 'shanthana' && RepublicPassword === 'password123') {
                detectedRole = 'setter';
            } else if (username === 'centre' && RepublicPassword === 'password123') {
                detectedRole = 'centre';
            } else {
                showError('Invalid username or password.');
                return;
            }

            isOtpStage = true;
            otpGroup.style.display = 'block';
            document.getElementById('otp').setAttribute('required', 'true');
            submitBtn.textContent = 'Verify OTP & Login';
            
            alert("Security Notice: A 2-Factor authentication code has been generated for testing purposes. Please enter 123456.");
            
        } else {
            if (otpValue === '123456') {
                localStorage.setItem('userRole', detectedRole);
                
                if (detectedRole === 'setter') {
                    window.location.href = 'setter-dashboard.html';
                } else if (detectedRole === 'centre') {
                    window.location.href = 'centre-dashboard.html';
                }
            } else {
                showError('Invalid OTP code. Please use 123456.');
            }
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});
