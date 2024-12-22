import React, { useState } from "react";
import IndFilho from "./IndiretaFilho";

const IndPai = (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);


  const enviarDados =(nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span> {nome} </span>
        <span>{idade} </span>
        <span> {nerd ? "verdadeiro" : "falso"}</span>
      </div>
      <IndFilho quandoClicar={enviarDados}/>
    </div>
  );
};

export default IndPai;
