import { servicos, ferragens, pecas, totais } from "./models.js";

//Function
export function gerarServicos() {
  gerarCortes();
  gerarFuracoes();
  gerarLimpeza();
  gerarMontagem();
  somarServicos();
}

function gerarFuracoes() {
  let total = 0;
  total += calcFuros(ferragens.parafuso60);
  total += calcFuros(ferragens.parafuso40);
  total += calcFuros(ferragens.parafuso25);
  total += calcFuros(ferragens.parafuso16);
  servicos.furacao.qtd = total;
}

function calcFuros(ferragem) {
  return ferragem.qtd;
}

function gerarCortes() {
  let total = 0;
  total += calcCortes(pecas.lateral);
  total += calcCortes(pecas.base);
  total += calcCortes(pecas.prateleira);
  total += calcCortes(pecas.sarrafo);
  total += calcCortes(pecas.fundo);
  total += calcCortes(pecas.porta);
  servicos.corte.qtd = total;
}

function calcCortes(peca) {
  return peca.qtd * 2;
}

function gerarLimpeza() {
  let total = 0;
  total += calcLimpeza(pecas.lateral);
  total += calcLimpeza(pecas.base);
  total += calcLimpeza(pecas.prateleira);
  total += calcLimpeza(pecas.sarrafo);
  total += calcLimpeza(pecas.fundo);
  total += calcLimpeza(pecas.porta);
  servicos.limpeza.qtd = total;
}

function calcLimpeza(peca) {
  return peca.qtd;
}

function gerarMontagem() {
  let total = 0;
  total += calcMontagem(pecas.lateral);
  total += calcMontagem(pecas.base);
  total += calcMontagem(pecas.prateleira);
  total += calcMontagem(pecas.sarrafo);
  total += calcMontagem(pecas.fundo);
  total += calcMontagem(pecas.porta);
  servicos.montagem.qtd = total;
}

function calcMontagem(peca) {
  return peca.qtd;
}

function somarServicos() {
  let total = 0;
  total += somaServico(servicos.furacao);
  total += somaServico(servicos.corte);
  total += somaServico(servicos.colagemFita);
  total += somaServico(servicos.limpeza);
  total += somaServico(servicos.montagem);
  totais.servicos.total = total;
}

function somaServico(servico) {
  if (servico.qtd > 0) {
    return servico.qtd * servico.valor;
  } else 0;
}
