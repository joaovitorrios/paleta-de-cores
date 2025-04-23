const corDisplay = document.getElementById("corDisplay");
const botao = document.getElementById("gerarCor");
const coresPrincipais = document.querySelectorAll(".corPrincipal");
let corSelecionada = null; 


function gerarTons(corBase) {
  const rgb = corBase.match(/\d+/g).map(Number);
  
  
  const fator = Math.random() < 0.5 ? 0.8 : 1.2; 
  const novaCor = rgb.map(valor => Math.min(Math.max(Math.floor(valor * fator), 0), 255));
  
  return `rgb(${novaCor[0]}, ${novaCor[1]}, ${novaCor[2]})`;
}


function gerarCorAleatoria() {
  if (!corSelecionada) return; 

  
  const corBase = window.getComputedStyle(corSelecionada).backgroundColor;
  const novaCor = gerarTons(corBase);
  
  corDisplay.style.backgroundColor = novaCor;
  corDisplay.textContent = novaCor;
}


botao.addEventListener("click", gerarCorAleatoria);


coresPrincipais.forEach(cor => {
  cor.addEventListener("click", () => {
    corSelecionada = cor; 
    corDisplay.style.backgroundColor = window.getComputedStyle(cor).backgroundColor;
    corDisplay.textContent = window.getComputedStyle(cor).backgroundColor;
  });
});


gerarCorAleatoria();
