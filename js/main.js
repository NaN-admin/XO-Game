let turn = "x";
let title = document.querySelector(".title");
let squars = [];

function send(x, y) {
  localStorage.setItem(`${y}-result`, x);
}
function getResult(y) {
  x = localStorage.getItem(`${y}-result`);
  return x;
}
function end(num1, num2, num3) {
  title.innerHTML = `${squars[1].toUpperCase()} Winner`;
  document.getElementById(`item` + num3).style.background = `red`;
  document.getElementById(`item` + num2).style.background = `red`;
  document.getElementById(`item` + num1).style.background = `red`;
  setInterval(() => {
    title.innerHTML += `.`;
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squars[i] = document.getElementById(`item` + i).innerHTML;
  }
  if (squars[1] == squars[2] && squars[2] == squars[3] && squars[1] != "") {
    end(1, 2, 3);
    result = getResult(squars[1]);
    if (result == null) {
      localStorage.setItem(`${squars[1]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[1]);
    }
  } else if (
    squars[4] == squars[5] &&
    squars[5] == squars[6] &&
    squars[4] != ""
  ) {
    end(4, 5, 6);
    result = getResult(squars[4]);
    if (result == null) {
      localStorage.setItem(`${squars[4]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[4]);
    }
  } else if (
    squars[7] == squars[8] &&
    squars[8] == squars[9] &&
    squars[7] != ""
  ) {
    end(7, 8, 9);
    result = getResult(squars[7]);
    if (result == null) {
      localStorage.setItem(`${squars[7]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[7]);
    }
  } else if (
    squars[1] == squars[4] &&
    squars[4] == squars[7] &&
    squars[1] != ""
  ) {
    end(1, 4, 7);
    result = getResult(squars[1]);
    if (result == null) {
      localStorage.setItem(`${squars[1]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[1]);
    }
  } else if (
    squars[2] == squars[5] &&
    squars[5] == squars[8] &&
    squars[2] != ""
  ) {
    end(2, 5, 8);
    result = getResult(squars[2]);
    if (result == null) {
      localStorage.setItem(`${squars[2]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[2]);
    }
  } else if (
    squars[3] == squars[6] &&
    squars[6] == squars[9] &&
    squars[3] != ""
  ) {
    end(3, 6, 9);
    result = getResult(squars[3]);
    if (result == null) {
      localStorage.setItem(`${squars[3]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[3]);
    }
  } else if (
    squars[1] == squars[5] &&
    squars[5] == squars[9] &&
    squars[1] != ""
  ) {
    end(1, 5, 9);
    result = getResult(squars[1]);
    if (result == null) {
      localStorage.setItem(`${squars[1]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[1]);
    }
  } else if (
    squars[3] == squars[5] &&
    squars[5] == squars[7] &&
    squars[3] != ""
  ) {
    end(3, 5, 7);
    result = getResult(squars[3]);
    if (result == null) {
      localStorage.setItem(`${squars[3]}-result`, 1);
    } else {
      send(parseInt(result) + 1, squars[3]);
    }
  }
}

function Game(id) {
  let element = document.getElementById(id);
  if (element.innerHTML == "") {
    element.innerHTML = turn;
    turn === "x" ? (turn = "o") : (turn = "x");
    turn === "x" ? (title.innerHTML = "X Turn") : (title.innerHTML = "O Turn");
  }
  winner();
}
document.getElementById("x-result").innerHTML = getResult(`x`);
document.getElementById("y-result").innerHTML = getResult(`o`);

function resetResult() {
  document.getElementById("x-result").innerHTML = 0;
  document.getElementById("y-result").innerHTML = 0;
  send(0, `x`);
  send(0, `o`);
}
