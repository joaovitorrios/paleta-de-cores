const corDisplay = document.getElementById("corDisplay");
const botao = document.getElementById("gerarCor");
const coresPrincipais = document.querySelectorAll(".corPrincipal");

function gerarTomCor(corBase) {
  
  const cor = window.getComputedStyle(corBase).backgroundColor;
  const rgb = cor.match(/\d+/g).map(Number);

  
  const fator = Math.random() < 0.5 ? 0.8 : 1.2; 
  const novaCor = rgb.map(valor => Math.min(Math.max(Math.floor(valor * fator), 0), 255));

  return `rgb(${novaCor[0]}, ${novaCor[1]}, ${novaCor[2]})`;
}

function gerarCorAleatoria() {
  
  const corBase = coresPrincipais[Math.floor(Math.random() * coresPrincipais.length)];
  const novaCor = gerarTomCor(corBase);
  
  corDisplay.style.backgroundColor = novaCor;
  corDisplay.textContent = novaCor;
}

botao.addEventListener("click", gerarCorAleatoria);


coresPrincipais.forEach(cor => {
  cor.addEventListener("click", () => {
    corDisplay.style.backgroundColor = window.getComputedStyle(cor).backgroundColor;
    corDisplay.textContent = window.getComputedStyle(cor).backgroundColor;
  });
});


gerarCorAleatoria();
