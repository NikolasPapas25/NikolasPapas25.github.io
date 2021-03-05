
function signup(){
const user = document.getElementById('user')
const pass = document.getElementById('pass')
const username = user.value
const password = pass.value
localStorage.setItem('username', username)
localStorage.setItem('pass', password)
const btn = document.getElementById('btn')
window.setTimeout(closew, 1000)
}
function closew(){
    window.close()
}