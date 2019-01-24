var restart = document.querySelector("#btn");
var squares = document.querySelectorAll("td");

function clearAll(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  };
}

function game(){
  if (this.textContent==="") {
    this.textContent = "X";
  }else if (this.textContent ==="X") {
    this.textContent = "O";
  }else if (this.textContent ==="O") {
    this.textContent ="";
}
}

restart.addEventListener("click", clearAll)


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", game);
  }
