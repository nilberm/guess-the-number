const guesses = document.getElementById("user-guesses");
const changeByResult = document.getElementById("changeByResult");
const biaNumberSuccess = document.getElementById("biaNumberSuccess");
const biaNumberFail = document.getElementById("biaNumberFail");

let guessesArray = [];

let biaNumber = Math.floor(Math.random() * 100) + 1;

biaNumberSuccess.innerHTML = biaNumber;
biaNumberFail.innerHTML = biaNumber;

const handleGuess = () => {
  console.log(biaNumber);

  const userGuess = document.getElementById("guess-number").value;

  if (userGuess > 100 || userGuess < 0) {
    alert("Número precisa ser entre 0 e 100");
    document.getElementById("guess-number").value = "";
    return;
  }

  // guessesArray.push(userGuess);

  guessesArray[guessesArray.length] = userGuess;

  if (userGuess == biaNumber) {
    changeByResult.classList.remove("guessing");
    changeByResult.classList.remove("fail");
    changeByResult.classList.add("success");
    imageBia.src = "assets/img/bia-success.png";

    return;
  } else if (guessesArray.length >= 10) {
    changeByResult.classList.remove("guessing");
    changeByResult.classList.remove("success");
    changeByResult.classList.add("fail");
    imageBia.src = "assets/img/bia-fail.png";
  } else {
    if (userGuess > biaNumber) {
      alert("Bia pensou em um número MENOR");
    }
    if (userGuess < biaNumber) {
      alert("Bia pensou em um número MAIOR");
    }

    // guesses.innerHTML = guessesArray.join(" - ");

    guesses.innerHTML = "";

    for (let i = 0; i < guessesArray.length; i++) {
      guesses.innerHTML += guessesArray[i];
      if (i < guessesArray.length - 1) {
        guesses.innerHTML += " - ";
      }
    }

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
  imageBia.src = "assets/img/bia-guessing.png";
  document.getElementById("guess-number").value = "";
};
