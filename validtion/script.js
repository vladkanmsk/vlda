const loginInput = document.querySelector('#login');
const passInput = document.querySelector('#password1');
const passCheckInput = document.querySelector('#password2');
const confirmButton = document.querySelector('#submit');

const forbiddenSymbols = [" ", "'", "{", "}"];
const requeredSymbols = ["@", "."]

function validation() {
  const login = loginInput.value.trim();
  const pass = passInput.value;
  const passCheck = passCheckInput.value;

  const rules = [
    { condition: login === "admin", message: "ты шо дурак" },
    { condition: !login || !pass || !passCheck, message: "заполни все поля" },
    { condition: [...login].some(ch => forbiddenSymbols.includes(ch)), message: "нельзя использовать эти символы" },
    { condition: pass !== passCheck, message: "пароли должны быть одинаковыми" },
    { condition: pass.length < 8, message: "минимум 8 символов в пароле" },
    { condition:  !([...login].some(ch =>requeredSymbols.includes(ch))), message: "введите риальную почтьу"}
  ];

  for (const rule of rules) {
    if (rule.condition) {
      alert(rule.message);
      return;
    }
  }

  alert("успешная регистрация!");
}

confirmButton.addEventListener("click", validation);
