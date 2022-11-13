//imports
import { ferragens, pecas, totais } from "./models.js";
import { entrada } from "./entrada_dados.js";

export function gerarFerragens() {
  gerarParaf40();
  gerarParaf25();
  gerarCantoneira();
  gerarParaf60();
  gerarBucha();
  gerarDobradica();
  gerarParaf16();
  somaTotaisFerragens();
}

function gerarParaf60() {
  let total = 0;
  ferragens.parafuso60.qtd = ferragens.cantoneira.qtd;
}

function gerarBucha() {
  let total = 0;
  ferragens.bucha.qtd = ferragens.cantoneira.qtd;
}

function gerarParaf40() {
  let total = 0;

  total += pecas.base.qtd * 6;
  total += pecas.prateleira.qtd * 6;
  total += pecas.sarrafo.qtd * 4;

  ferragens.parafuso40.qtd = total;
}

function gerarParaf25() {
  let total = 0;
  const perimetroFundo = (pecas.fundo.comp + pecas.fundo.larg) * 2;
  total += Math.round(perimetroFundo / 150);
  total += 1;
  ferragens.parafuso25.qtd = total;
}

function gerarCantoneira() {
  const qtdPorLateral = calculaCantoneira(+entrada.altMovel.value);
  const total = qtdPorLateral * 2;
  ferragens.cantoneira.qtd = total;
}

function calculaCantoneira(altura) {
  if (altura <= 250) {
    return 1;
  } else if (altura <= 900) {
    return 2;
  } else if (altura <= 1300) {
    return 3;
  } else if (altura <= 2100) {
    return 4;
  }
}

function gerarDobradica() {
  let total = 0;
  const pesoPorta = ((pecas.porta.comp * pecas.porta.larg) / 100000).toFixed(2);

  if (pesoPorta <= 4) {
    total = 2;
  } else if (pesoPorta <= 8) {
    total = 3;
  } else if (pesoPorta <= 12) {
    total = 4;
  } else {
    total = 5;
  }
  ferragens.dobradica.qtd = total;
}

function gerarParaf16() {
  const total = ferragens.dobradica.qtd * 6 + ferragens.cantoneira.qtd * 3;

  ferragens.parafuso16.qtd = total;
}

function somaTotaisFerragens() {
  let total = 0;
  total += somaTotalFerragem(ferragens.parafuso60);
  total += somaTotalFerragem(ferragens.parafuso40);
  total += somaTotalFerragem(ferragens.parafuso25);
  total += somaTotalFerragem(ferragens.parafuso16);
  total += somaTotalFerragem(ferragens.cantoneira);
  total += somaTotalFerragem(ferragens.dobradica);
  total += somaTotalFerragem(ferragens.bucha);
  totais.ferragens.total = total;
}

function somaTotalFerragem(ferragem) {
  if (ferragem.qtd > 0) {
    return ferragem.qtd * ferragem.valor;
  } else 0;
}
