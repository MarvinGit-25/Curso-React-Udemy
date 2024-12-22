import React from "react";

import DadosDosAlunos from "../../data/alunos";

const TurmaDeAlunos = () => {

  const lis = DadosDosAlunos.map(alunos =>{
    return (
        <li key={alunos.id}>
            {alunos.id} - {alunos.nome} - nota {alunos.nota}
        </li>
    )
  })
   

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  );
};

export default TurmaDeAlunos;
