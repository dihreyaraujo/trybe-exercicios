import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function geraConteudo(elemento) {
  return <p>
    O conteúdo é: {elemento.conteudo} | Status: {elemento.status} | Bloco: {elemento.bloco}  
  </p>
}

class Content extends React.Component {
  render() {
    return (
      <div>{conteudos.map((element) => geraConteudo(element))}</div>
    )
  }
}

export default Content;
