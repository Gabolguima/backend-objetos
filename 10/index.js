const clientes = [
  (patricia = { nome: "Patricia", carrinho: [] }),
  (carlos = { nome: "Carlos", carrinho: [] }),
  (renato = { nome: "Renato", carrinho: [] }),
  (jose = { nome: "José", carrinho: [] }),
  (roberto = { nome: "Roberto", carrinho: [] }),
];

const produtos = [
  (tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }),
  (notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }),
  (mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }),
  (teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }),
  (caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }),
  (carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }),
  (webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }),
  (monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }),
];

// JOSÉ
jose.carrinho = [
  {
    item: tv,
    quantidade: 1
  },
  {
    item: caboUsb,
    quantidade: 2
  },
  {
    item: webcam,
    quantidade: 1
  }
];

// CARLOS
carlos.carrinho = [
  {
    item: notebook,
    quantidade: 2
  }
];

// PATRÍCIA
patricia.carrinho = [
  {
    item: teclado,
    quantidade: 1
  },
  {
    item: caboUsb,
    quantidade: 2
  },
  {
    item: carregador,
    quantidade: 1
  },
  {
    item: mouse,
    quantidade: 1
  },
  {
    item: monitor,
    quantidade: 1
  }
];

// RENATO
renato.carrinho = [
  {
    item: webcam,
    quantidade: 5
  }
];

// ROBERTO
roberto.carrinho = [
  {
    item: webcam,
    quantidade: 1
  },
  {
    item: caboUsb,
    quantidade: 2
  },
  {
    item: monitor,
    quantidade: 1
  }
];

//NOME + CARRINHO

for (let cliente of clientes) {
  console.log(cliente.nome, cliente.carrinho);
}