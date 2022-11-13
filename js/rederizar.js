//imports
import { pecas, ferragens, fitas, servicos, totais } from "./models.js";
import { currencyFormat } from "./utility_functions.js";

//Elements
const divPecas = document.querySelector("#pecas");
const divFitas = document.querySelector("#fitas");
const divFerragens = document.querySelector("#ferragens");
const divServicos = document.querySelector("#servicos");
const divResumo = document.querySelector("#resumo");
const bodyPecas = document.querySelector("#table-body-pecas");
const bodyFitas = document.querySelector("#table-body-fitas");
const bodyFerragens = document.querySelector("#table-body-ferragens");
const bodyServicos = document.querySelector("#table-body-servicos");
const bodyResumo = document.querySelector("#table-body-resumo");

export function showTabelas() {
  divPecas.classList.remove("hiden");
  divFitas.classList.remove("hiden");
  divFerragens.classList.remove("hiden");
  divServicos.classList.remove("hiden");
  divResumo.classList.remove("hiden");
}

export function hidenTabelas() {
  divPecas.classList.add("hiden");
  divFitas.classList.add("hiden");
  divFerragens.classList.add("hiden");
  divServicos.classList.remove("hiden");
  divResumo.classList.remove("hiden");
}

export function resetaTabelas() {
  while (bodyPecas.hasChildNodes()) {
    bodyPecas.removeChild(bodyPecas.firstChild);
  }
  while (bodyFitas.hasChildNodes()) {
    bodyFitas.removeChild(bodyFitas.firstChild);
  }
  while (bodyFerragens.hasChildNodes()) {
    bodyFerragens.removeChild(bodyFerragens.firstChild);
  }
  while (bodyServicos.hasChildNodes()) {
    bodyServicos.removeChild(bodyServicos.firstChild);
  }
  while (bodyResumo.hasChildNodes()) {
    bodyResumo.removeChild(bodyResumo.firstChild);
  }
}
export function gerarTabelas() {
  gerarPecasHtml();
  somaPecasHtml();
  gerarFitasHtml();
  somaFitaHtml();
  gerarFerragensHtml();
  somaFerragensHtml();
  gerarServicosHtml();
  somaServicoHtml();
  somaTotaisHtml();
}

function gerarPecasHtml() {
  gerarPeca(pecas.lateral);
  gerarPeca(pecas.base);
  gerarPeca(pecas.prateleira);
  gerarPeca(pecas.sarrafo);
  gerarPeca(pecas.fundo);
  gerarPeca(pecas.porta);
}

function gerarPeca(peca) {
  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = peca.name;

  const tdQtd = document.createElement("td");
  tdQtd.innerText = peca.qtd;

  const tdComp = document.createElement("td");
  tdComp.innerText = peca.comp;

  const tdLarg = document.createElement("td");
  tdLarg.innerText = peca.larg;

  const tdValUn = document.createElement("td");
  tdValUn.innerText = currencyFormat(peca.valor);

  const tdSubtotal = document.createElement("td");
  tdSubtotal.innerText = currencyFormat(peca.valor * peca.qtd);

  tr.appendChild(tdDescricao);
  tr.appendChild(tdQtd);
  tr.appendChild(tdComp);
  tr.appendChild(tdLarg);
  tr.appendChild(tdValUn);
  tr.appendChild(tdSubtotal);

  bodyPecas.appendChild(tr);
}

function gerarFitasHtml() {
  geraFitaHtml(pecas.lateral);
  geraFitaHtml(pecas.base);
  geraFitaHtml(pecas.prateleira);
  geraFitaHtml(pecas.porta);
}

function geraFitaHtml(peca) {
  const qtd = peca.fita.qtd;
  const valUn = peca.fita.valUn;
  const subTotal = currencyFormat(qtd * valUn);
  const valUnFormat = currencyFormat(valUn);
  if (peca.fita.qtd > 0) {
    const tr = document.createElement("tr");

    const tdPeca = document.createElement("td");
    tdPeca.innerText = peca.name;

    const tdQtd = document.createElement("td");
    tdQtd.innerText = `${qtd}m`;

    const tdValUn = document.createElement("td");
    tdValUn.innerText = valUnFormat;

    const tdSubTotal = document.createElement("td");
    tdSubTotal.innerText = subTotal;

    tr.appendChild(tdPeca);
    tr.appendChild(tdQtd);
    tr.appendChild(tdValUn);
    tr.appendChild(tdSubTotal);

    bodyFitas.appendChild(tr);
  }
}

function gerarFerragensHtml() {
  gerarFerragemHtml(ferragens.parafuso60);
  gerarFerragemHtml(ferragens.parafuso40);
  gerarFerragemHtml(ferragens.parafuso25);
  gerarFerragemHtml(ferragens.parafuso16);
  gerarFerragemHtml(ferragens.cantoneira);
  gerarFerragemHtml(ferragens.bucha);
  gerarFerragemHtml(ferragens.dobradica);
}

function gerarFerragemHtml(ferragem) {
  const name = ferragem.name;
  const qtd = ferragem.qtd;
  const valUni = currencyFormat(ferragem.valor);
  const valoBruto = currencyFormat(ferragem.qtd * ferragem.valor);
  const subTot = valoBruto;

  const tr = document.createElement("tr");

  const tdFerragem = document.createElement("td");
  tdFerragem.innerText = name;

  const tdQtd = document.createElement("td");
  tdQtd.innerText = qtd;

  const tdValUn = document.createElement("td");
  tdValUn.innerText = valUni;

  const tdSubTot = document.createElement("td");
  tdSubTot.innerText = subTot;

  tr.appendChild(tdFerragem);
  tr.appendChild(tdQtd);
  tr.appendChild(tdValUn);
  tr.appendChild(tdSubTot);

  bodyFerragens.appendChild(tr);
}

function somaFerragensHtml(valor) {
  const total = currencyFormat(totais.ferragens.total);

  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = "Total";

  const td01 = document.createElement("td");

  const td02 = document.createElement("td");

  const tdTotal = document.createElement("td");
  tdTotal.innerText = total;

  tr.appendChild(tdDescricao);
  tr.appendChild(td01);
  tr.appendChild(td02);
  tr.appendChild(tdTotal);
  tr.classList.add("bold");

  bodyFerragens.appendChild(tr);
}

function somaFitaHtml() {
  const qtd = servicos.colagemFita.qtd;
  const valTotal = currencyFormat(totais.fita.total);
  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = "Totais";

  const tdQtd = document.createElement("td");
  tdQtd.innerText = `${qtd}m`;

  const td01 = document.createElement("td");

  const tdValTotal = document.createElement("td");
  tdValTotal.innerText = `${valTotal}`;

  tr.appendChild(tdDescricao);
  tr.appendChild(tdQtd);
  tr.appendChild(td01);
  tr.appendChild(tdValTotal);
  tr.classList.add("bold");

  bodyFitas.appendChild(tr);
}

function gerarServicosHtml() {
  gerarServicoHtml(servicos.furacao);
  gerarServicoHtml(servicos.corte);
  gerarServicoHtml(servicos.colagemFita);
  gerarServicoHtml(servicos.limpeza);
  gerarServicoHtml(servicos.montagem);
}

function gerarServicoHtml(servico) {
  const name = servico.name;
  const qtd = servico.qtd;
  const valUni = currencyFormat(servico.valor);
  const valoBruto = currencyFormat(servico.qtd * servico.valor);
  const subTot = valoBruto;

  const tr = document.createElement("tr");

  const tdServico = document.createElement("td");
  tdServico.innerText = name;

  const tdQtd = document.createElement("td");
  tdQtd.innerText = qtd;

  const tdValUn = document.createElement("td");
  tdValUn.innerText = valUni;

  const tdSubTot = document.createElement("td");
  tdSubTot.innerText = subTot;

  tr.appendChild(tdServico);
  tr.appendChild(tdQtd);
  tr.appendChild(tdValUn);
  tr.appendChild(tdSubTot);

  bodyServicos.appendChild(tr);
}

function somaServicoHtml() {
  const total = currencyFormat(totais.servicos.total);

  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = "Total";

  const td01 = document.createElement("td");

  const td02 = document.createElement("td");

  const tdTotal = document.createElement("td");
  tdTotal.innerText = total;

  tr.appendChild(tdDescricao);
  tr.appendChild(td01);
  tr.appendChild(td02);
  tr.appendChild(tdTotal);
  tr.classList.add("bold");

  bodyServicos.appendChild(tr);
}

function somaPecasHtml() {
  const total = currencyFormat(totais.mdf.total);

  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = "Total";

  const td01 = document.createElement("td");

  const td02 = document.createElement("td");

  const td03 = document.createElement("td");

  const td04 = document.createElement("td");

  const tdTotal = document.createElement("td");
  tdTotal.innerText = total;

  tr.appendChild(tdDescricao);
  tr.appendChild(td01);
  tr.appendChild(td02);
  tr.appendChild(td03);
  tr.appendChild(td04);
  tr.appendChild(tdTotal);
  tr.classList.add("bold");

  bodyPecas.appendChild(tr);
}

function somaTotaisHtml() {
  const total = currencyFormat(geraResumosHtml());

  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = "Total";

  const tdValTotal = document.createElement("td");
  tdValTotal.innerText = `${total}`;

  tr.appendChild(tdDescricao);
  tr.appendChild(tdValTotal);
  tr.classList.add("bold");

  bodyResumo.appendChild(tr);
}

function geraResumosHtml() {
  let total = 0;
  total += gerarResumoHtml(totais.mdf);
  total += gerarResumoHtml(totais.fita);
  total += gerarResumoHtml(totais.ferragens);
  total += gerarResumoHtml(totais.servicos);
  return total;
}

function gerarResumoHtml(totais) {
  const name = totais.name;
  const tot = currencyFormat(totais.total);

  const tr = document.createElement("tr");

  const tdDescricao = document.createElement("td");
  tdDescricao.innerText = name;

  const tdSubTot = document.createElement("td");
  tdSubTot.innerText = tot;

  tr.appendChild(tdDescricao);
  tr.appendChild(tdSubTot);

  bodyResumo.appendChild(tr);
  return totais.total;
}
