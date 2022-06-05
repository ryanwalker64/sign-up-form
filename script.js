const matchingPwdTxt = document.querySelector('#matchPasswords');
const password = document.querySelector('#password');
const confPassword = document.querySelector('#confirm-password');


function comparePwd(e) {
    if (password.value && confPassword.value) {
    if (password.value != confPassword.value) {
        matchingPwdTxt.style.display = 'block'
        matchingPwdTxt.style.color = 'red'
        matchingPwdTxt.innerHTML = 'Not Matching'
       return false

    } else {
        matchingPwdTxt.style.display = 'block'
        matchingPwdTxt.style.color = 'green'
        matchingPwdTxt.innerHTML = 'Matching'
    }
} else {
    matchingPwdTxt.style.display = 'none'
}
}

password.addEventListener('keyup' , (e) => {
    comparePwd(e)
})

confPassword.addEventListener('keyup' , (e) => {
    comparePwd(e)
})
