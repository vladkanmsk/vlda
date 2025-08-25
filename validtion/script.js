const loginInput = document.querySelector('#login')
const passInput = document.querySelector('#password1')
const passCheckInput = document.querySelector('#password2')
const confirmButton = document.querySelector('#submit')
const login = 'admin'
function validation() {
    const login = loginInput.value
    const pass = passInput.value
    const passCheck = passCheckInput.value
    // пароль повинен буди більше за 8 символів та мати хоч один символ "!"
    console.log(login)
    console.log(pass)
    console.log(passCheck)
    if(login == 'admin'){
        console.log("ты шо дурак")
    }
    if(login == "" || pass == "" || passCheck == "" ){
        alert("заполни все поля")
    }
    if(login == " " || login == "'" || login == "{" || login == "}" ){
alert("нельз использовать это")
    }
}
confirmButton.addEventListener("click", validation)