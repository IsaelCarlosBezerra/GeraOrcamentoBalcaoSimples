//Imports
import { pecas, chapas, totais, servicos } from "./models.js";
import { entrada } from "./entrada_dados.js";
import { formatarPorMil } from "./utility_functions.js";

export function gerarPecas() {
  gerarLaterais();
  gerarBase();
  gerarPrateleira();
  gerarSarrafos();
  gerarFundo();
  gerarPorta();
  somaTotais();
  somarTotalFitas();
}

function gerarLaterais() {
  const comprimento = +entrada.altMovel.value;
  const largura = +entrada.profMovel.value;

  pecas.lateral.qtd = 2;
  pecas.lateral.comp = comprimento;
  pecas.lateral.larg = largura;
  pecas.lateral.valor = calcValoresChapa(
    chapas.brancoTx15,
    comprimento,
    largura
  );

  geraFita(pecas.lateral); //Atribui o valor da fita
}

function gerarBase() {
  const comprimento = +entrada.largMovel.value - 30;
  const largura = +entrada.profMovel.value;

  pecas.base.qtd = 1;
  pecas.base.comp = comprimento;
  pecas.base.larg = largura;
  pecas.base.valor = calcValoresChapa(chapas.brancoTx15, comprimento, largura);

  geraFita(pecas.base); //Atribui o valor da fita
}

function gerarPrateleira() {
  const comprimento = +entrada.largMovel.value - 30;
  const largura = +entrada.profMovel.value - 21;

  pecas.prateleira.qtd = 1;
  pecas.prateleira.comp = comprimento;
  pecas.prateleira.larg = largura;
  pecas.prateleira.valor = calcValoresChapa(
    chapas.brancoTx15,
    comprimento,
    largura
  );

  geraFita(pecas.prateleira); //Atribui o valor da fita
}

function gerarSarrafos() {
  const comprimento = +entrada.largMovel.value - 30;

  pecas.sarrafo.qtd = 2;
  pecas.sarrafo.comp = comprimento;
  pecas.sarrafo.larg = 80;
  pecas.sarrafo.valor = calcValoresChapa(chapas.brancoTx15, comprimento, 80);
}

function gerarFundo() {
  const comprimento = +entrada.altMovel.value - 6;
  const largura = +entrada.largMovel.value - 6;

  pecas.fundo.qtd = 1;
  pecas.fundo.comp = comprimento;
  pecas.fundo.larg = largura;
  pecas.fundo.valor = calcValoresChapa(chapas.brancoTx6, comprimento, largura);
}

function gerarPorta() {
  const comprimento = +entrada.altMovel.value - 70;
  const largura = +entrada.largMovel.value - 6;

  pecas.porta.qtd = 1;
  pecas.porta.comp = comprimento;
  pecas.porta.larg = largura;
  pecas.porta.valor = calcValoresChapa(chapas.brancoTx15, comprimento, largura);

  geraFita(pecas.porta); //Atribui o valor da fita
}

function geraFita(peca) {
  let total = 0;
  let acrescimoCorte = 0;
  if (peca.comp1) {
    total += peca.comp;
    acrescimoCorte += 30;
  }
  if (peca.comp2) {
    total += peca.comp;
    acrescimoCorte += 30;
  }
  if (peca.larg1) {
    total += peca.larg;
    acrescimoCorte += 30;
  }
  if (peca.larg2) {
    total += peca.larg;
    acrescimoCorte += 30;
  }
  if (total > 0) {
    total += acrescimoCorte;
    total = total * peca.qtd;
    peca.fita.qtd = formatarPorMil(total);
    peca.fita.valUn = 0.75;
  } else {
    peca.fita.qtd = 0;
    peca.fita.valUn = 0;
  }
}

function somarTotalFitas() {
  let qtd = 0;
  let valor = 0;
  let retorno = [];
  retorno = somaTotalFita(pecas.lateral);
  qtd += retorno[0];
  valor += retorno[1];
  retorno = [];
  retorno = somaTotalFita(pecas.base);
  qtd += retorno[0];
  valor += retorno[1];
  retorno = [];
  retorno = somaTotalFita(pecas.prateleira);
  qtd += retorno[0];
  valor += retorno[1];
  retorno = [];
  retorno = somaTotalFita(pecas.sarrafo);
  qtd += retorno[0];
  valor += retorno[1];
  retorno = [];
  retorno = somaTotalFita(pecas.porta);
  qtd += retorno[0];
  valor += retorno[1];
  totais.fita.total = valor;
  servicos.colagemFita.qtd = qtd;
}

function somaTotalFita(peca) {
  let qtd = 0;
  let valor = 0;
  if (peca.fita.qtd > 0) {
    qtd = peca.fita.qtd;
    valor = peca.fita.qtd * peca.fita.valUn;
    return [qtd, valor];
  } else return [0, 0];
}

function calcValoresChapa(chapa, compPeca, largPeca) {
  const valM2Chapa = chapa.valorM2;
  const m2Peca = (compPeca * largPeca) / 1000000;
  const valorPeca = valM2Chapa * m2Peca;
  return valorPeca;
}

function somaTotais() {
  let total = 0;
  total += somaTotal(pecas.lateral);
  total += somaTotal(pecas.base);
  total += somaTotal(pecas.prateleira);
  total += somaTotal(pecas.sarrafo);
  total += somaTotal(pecas.fundo);
  total += somaTotal(pecas.porta);
  totais.mdf.total = total;
}

function somaTotal(peca) {
  return peca.qtd * peca.valor;
}
