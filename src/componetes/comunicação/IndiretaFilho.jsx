import React from "react";

const IndFilho = (props) => {
  const callback = props.quandoClicar;
  const min = 50
  const max = 70
  const gerarIdade = () => parseInt(Math.random() * (max - min) + min)
  return (
    <div>
      <strong>Filho</strong>
      <button onClick={e => callback("Ana", gerarIdade(), true)}>enviar pro pai</button>
    </div>
  );
};

export default IndFilho;
