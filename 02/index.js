const carros = [
  {
    marca: "Hyundai",
    modelo: "Tucson",
    ano: 2022,
    cor: "metálica",
    quantidade_portas: 4,
    automatico: true
  },
  {
    marca: "Fiat",
    modelo: "Mobi",
    ano: 2016,
    cor: "branco",
    quantidade_portas: 4,
    automatico: false
  },
  {
    marca: "Volkswagen",
    modelo: "Fusca",
    ano: 1960,
    cor: "azul",
    quantidade_portas: 2,
    automatico: false
  }
];

const cambioAutomatico = carros[0].automatico ? "Sim" : "Não";

console.log(carros[0],
  `O carro ${carros[0].marca} ${carros[0].modelo} tem câmbio automático? ${cambioAutomatico}`);