//Imports
import { gerarFerragens } from "./gerar_ferragens.js";
import { gerarPecas } from "./gerar_pecas.js";
import { gerarServicos } from "./gerar_servicos.js";
import {
  showTabelas,
  resetaTabelas,
  gerarTabelas,
  hidenTabelas,
} from "./rederizar.js";

//Elementos
const btnGerar = document.querySelector("#submit");
const links = document.querySelectorAll("#navbar a");

//Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

function iniciar() {
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

//Eventos
btnGerar.addEventListener("click", (e) => {
  e.preventDefault();
  hidenTabelas();
  resetaTabelas();
  gerarPecas();
  gerarFerragens();
  gerarServicos();
  gerarTabelas();
  showTabelas();
});

links.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

iniciar();
