import fs from 'fs';
import Pessoa from '../model/pessoa';

export default function carregarPessoas(arquivo: string): Pessoa[] {
  const conteudo = fs.readFileSync(arquivo, 'utf-8');
  // console.log(conteudo);
  const linhas = conteudo.split('\n');
  // console.log(linhas.length);
  const pessoas = linhas
    .filter((l) => l.trim().length > 0)
    .map((linha) => {
      const [nome, email] = linha.split(';');
      return new Pessoa(nome.trim(), email.trim());
    });
  // console.log(pessoas.length);
  return pessoas;
}
