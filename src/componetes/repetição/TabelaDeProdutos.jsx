import React from "react";
import ProdutosDaLoja from "../../data/produtos";
import "./tabela.css"
const TabelaDeProdutos = () => {

  const TableProd = () => {
    return ProdutosDaLoja.map((prod, i) => {
      return (
        <tr key={prod.id} className={i % 2 === 0 ? 'par' : 'impar' }>
          <td>{prod.nome}</td>
          <td>{prod.preço}</td>
          <td>{prod.id}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="tableStyle" border="1">
        <caption>Tabela de produtos da loja</caption>

        <thead>
          <tr>
            <th>nome</th>
            <th>preço</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>{TableProd()}</tbody>
      </table>
    </div>
  );
};

export default TabelaDeProdutos;
