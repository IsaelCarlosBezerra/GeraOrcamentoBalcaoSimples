export const pecas = {
  lateral: {
    name: "Lateral",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: true,
    comp2: true,
    larg1: false,
    larg2: false,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
  base: {
    name: "Base",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: true,
    comp2: true,
    larg1: false,
    larg2: false,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
  prateleira: {
    name: "Prateleira",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: true,
    comp2: false,
    larg1: false,
    larg2: false,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
  sarrafo: {
    name: "Sarrafo",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: false,
    comp2: false,
    larg1: false,
    larg2: false,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
  fundo: {
    name: "Fundo",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: false,
    comp2: false,
    larg1: false,
    larg2: false,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
  porta: {
    name: "Porta",
    qtd: 0,
    comp: 0,
    larg: 0,
    comp1: true,
    comp2: true,
    larg1: true,
    larg2: true,
    fita: { qtd: 0, valUn: 0 },
    valor: 0,
  },
};

export const ferragens = {
  parafuso60: { name: "Parafuso 6x60", qtd: 0, valor: 0.5 },
  parafuso40: { name: "Parafuso 4x40", qtd: 0, valor: 0.3 },
  parafuso25: { name: "Parafuso 4x25", qtd: 0, valor: 0.2 },
  parafuso16: { name: "Parafuso 3,5x16", qtd: 0, valor: 0.1 },
  cantoneira: { name: "Cantoneira fixação", qtd: 0, valor: 1.8 },
  dobradica: { name: "Dobradiça", qtd: 0, valor: 2.5 },
  bucha: { name: "Bucha 8", qtd: 0, valor: 0.15 },
};

export const fitas = {
  branco: { name: "Branco tx 22mm", qtd: 0, valor: 0.75 },
};

export const chapas = {
  brancoTx15: {
    name: "Branco tx 15mm",
    comprimento: 2750,
    largura: 1830,
    m2DescPerda: 4.52,
    valor: 220,
    valorM2: 49,
  },
  brancoTx6: {
    name: "Branco tx 6mm",
    comprimento: 2750,
    largura: 1830,
    m2DescPerda: 4.52,
    valor: 172,
    valorM2: 38,
  },
};

export const servicos = {
  furacao: { name: "Furação", qtd: 0, valor: 0.5 },
  corte: { name: "Corte", qtd: 0, valor: 1.5 },
  colagemFita: { name: "Colagem Fita", qtd: 0, valor: 1.5 },
  limpeza: { name: "Limpeza", qtd: 0, valor: 1 },
  montagem: { name: "Montagem", qtd: 0, valor: 2.5 },
};

export const totais = {
  mdf: {
    name: "Chapas",
    total: 0,
  },
  fita: {
    name: "Fitas",
    total: 0,
  },
  ferragens: {
    name: "Ferragens",
    total: 0,
  },
  servicos: {
    name: "Serviços",
    total: 0,
  },
};
