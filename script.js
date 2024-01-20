const guesses = document.getElementById("user-guesses");
const changeByResult = document.getElementById("changeByResult");
let guessesArray = [];

let biaNumber = Math.floor(Math.random() * 100) + 1;
const biaNumberSuccess = document.getElementById("biaNumberSuccess");
const biaNumberFail = document.getElementById("biaNumberFail");

biaNumberSuccess.innerHTML = biaNumber;
biaNumberFail.innerHTML = biaNumber;

const handleGuess = () => {
  const userGuess = document.getElementById("guess-number").value;

  guessesArray.push(userGuess);

  if (userGuess > 100 || userGuess < 0) {
    alert("Número precisa ser entre 0 e 100");
    document.getElementById("guess-number").value = "";
    return;
  }

  if (userGuess == biaNumber) {
    changeByResult.classList.remove("guessing");
    changeByResult.classList.remove("fail");
    changeByResult.classList.add("success");

    return;
  } else if (guessesArray.length >= 10) {
    changeByResult.classList.remove("guessing");
    changeByResult.classList.remove("success");
    changeByResult.classList.add("fail");
  } else {
    if (userGuess > biaNumber) {
      alert("Bia pensou em um número MENOR");
    }
    if (userGuess < biaNumber) {
      alert("Bia pensou em um número MAIOR");
    }
    guesses.innerHTML = guessesArray.join(" - ");
    document.getElementById("guess-number").value = "";
  }
};

const resetGame = () => {
  guessesArray = [];

  biaNumber = Math.floor(Math.random() * 100) + 1;
  guesses.innerHTML = "";
  biaNumberSuccess.innerHTML = biaNumber;
  biaNumberFail.innerHTML = biaNumber;

  changeByResult.classList.remove("success");
  changeByResult.classList.remove("fail");
  changeByResult.classList.add("guessing");
  document.getElementById("guess-number").value = "";
};
