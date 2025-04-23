const corDisplay = document.getElementById("corDisplay");
const botao = document.getElementById("gerarCor");

function gerarCorAleatoria() {
  const cor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  corDisplay.style.backgroundColor = cor;
  corDisplay.textContent = cor;
}

botao.addEventListener("click", gerarCorAleatoria);


gerarCorAleatoria();
