const corDisplay = document.getElementById("coresDisplay");
const botao = document.getElementById("gerarCor");
const coresPrincipais = document.querySelectorAll(".corPrincipal");
let corSelecionada = null; 

function gerarTons(corBase) {
  const rgb = corBase.match(/\d+/g).map(Number);
  const tons = [];

  
  for (let i = 0; i < 5; i++) {
    const fator = 0.7 + Math.random() * 0.6; 
    const novaCor = rgb.map(valor => Math.min(Math.max(Math.floor(valor * fator), 0), 255));
    tons.push(`rgb(${novaCor[0]}, ${novaCor[1]}, ${novaCor[2]})`);
  }

  return tons;
}


function exibirTons(cores) {
  corDisplay.innerHTML = ''; 

  cores.forEach(cor => {
    const corDiv = document.createElement('div');
    corDiv.classList.add('cor');
    corDiv.style.backgroundColor = cor;
    corDiv.textContent = cor; 
    corDisplay.appendChild(corDiv);
  });
}


function gerarCorAleatoria() {
  if (!corSelecionada) return; 

  const corBase = window.getComputedStyle(corSelecionada).backgroundColor;
  const tons = gerarTons(corBase);
  exibirTons(tons);
}


botao.addEventListener("click", gerarCorAleatoria);


coresPrincipais.forEach(cor => {
  cor.addEventListener("click", () => {
    corSelecionada = cor; 
    const corBase = window.getComputedStyle(cor).backgroundColor;
    exibirTons(gerarTons(corBase));
  });
});


gerarCorAleatoria();
