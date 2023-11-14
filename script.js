const num = document.getElementById("number");
const btn = document.getElementById("button");
let res = document.getElementById("res");
let secretNumber = parseInt(Math.random() * 100) + 1;
let attempts = 10;
let currentAttempts = 0;

const verificar = () => {
  const inputValue = parseInt(num.value);

  switch(true) {
    case currentAttempts == attempts:
      res.innerHTML = `Suas tentativas acabaram. O número secreto era ${secretNumber}`;
      num.value = "";
      btn.textContent = "RESTART GAME";
      btn.removeEventListener("click", verificar);
      btn.addEventListener("click", restartGame);
      break;

    case inputValue == secretNumber:
      res.innerHTML = `Parabéns, você acertou! O número secreto era ${secretNumber}`;
      num.value = "";
      btn.textContent = "RESTART GAME";
      btn.removeEventListener("click", verificar);
      btn.addEventListener("click", restartGame);
      break;
     
    case inputValue > secretNumber:
      res.innerHTML = `Errado... O numero secreto é menor que o seu número escolhido (${inputValue})`;
      break;

    case inputValue < secretNumber:
      res.innerHTML = `Errado... O numero secreto é maior que o seu número escolhido (${inputValue})`;
      break;
  }

  currentAttempts++;
};

const restartGame = () => {
  currentAttempts = 0;
  secretNumber = parseInt(Math.random() * 101);
  res.innerHTML = "";
  btn.textContent = "TO CHECK";
  btn.addEventListener("click", verificar); 
  btn.removeEventListener("click", restartGame);
};

btn.addEventListener("click", verificar);
