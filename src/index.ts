import carregarPessoas from './function/carregar-pessoas';
import sortearAzarado from './function/sortear-azarado';

const pessoas = carregarPessoas('src/data/dados.csv');
// pessoas.forEach((p) => console.log(p.toString()));

const azarado = sortearAzarado(pessoas);
console.log(azarado.toString());
