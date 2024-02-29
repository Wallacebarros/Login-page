const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const span = document.querySelectorAll('.login__span')
const btn = document.querySelector('#btn')

const database = {
    userName : 'Stive',
    password : '12345'
}

function userNameAutentication() {
    if (userName.value == database.userName) {
        // autenticado
        span[0].style = 'display: none'
        return true
    }
    else {
        span[0].style = 'display: block'
        return false
    }
}

function passwordAutentication() {
    if (password.value == database.password) {
        // autenticado
        span[1].style = 'display: none'
        return true
    }
    else {
        span[1].style = 'display: block'
    }
}

function clicar () {
    if (! userNameAutentication()) return 

    if (! passwordAutentication()) return

    btn.firstChild.href = './bemvindo.html'
}