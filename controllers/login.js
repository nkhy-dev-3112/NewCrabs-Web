const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up'),
    loginForm = document.getElementById('login__form')

signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')
    loginForm.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
    loginForm.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')
    loginForm.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
    loginForm.classList.toggle('none')
})