import React from "react";

import "./App.css";


import Contador from './componetes/contador/contador'
import Input from './componetes/formulario/Input'
import IndPai from "./componetes/comunicação/IndiretaPai";
import DiretaPai from "./componetes/comunicação/DiretaPai"
import Usuarioinfo from "./componetes/condicional/UsuarioInfo"
import ParOuImpar from "./componetes/condicional/ParOuImpar";
import TabelaDeProdutos from "./componetes/repetição/TabelaDeProdutos";
import ListasAlunos from "./componetes/repetição/ListasAlunos"
import FamiliaMembro from "./componetes/basicos/FamiliaMembro";
import Familia from "./componetes/basicos/Familia";
import Card from "./componetes/layout/Card";
import Primeiro from "./componetes/basicos/Primeiro";
import ComParametro from "./componetes/basicos/ComParametro";
import Fragmento from "./componetes/basicos/fragmento";
import Aleatorio from "./componetes/basicos/Aleatorio";

const app = (_) => (
  <div className="App">
    <h1>Fundamentos de react</h1>
    <div className="Cards">

    <div className="Contador">
        <Card titulo="#12 Componente Classe" color="#d3d163 ">
          <Contador numeroInicial={0}>
          
          </Contador>
        </Card>
      </div>

    <div className="input">
        <Card titulo="#11 Componente controlado (input)" color="#28b428 ">
          <Input>

          </Input>
        </Card>
      </div>

    <div className="indireta">
        <Card titulo="#10 Comunicação indireta" color="#b42885">
        <IndPai>
          
        </IndPai>
        </Card>
      </div>

    <div className="Direta">
        <Card titulo="#9 Comunicação direta" color="#28b2b4">
        <DiretaPai></DiretaPai>
        </Card>
      </div>

    <div className="ParOuImpar">
        <Card titulo="#8 Renderização condicional" color="#28b463 ">
          <ParOuImpar numero={20}></ParOuImpar>

          <Usuarioinfo usuario={{nome: "Marcos"}}></Usuarioinfo>
          <Usuarioinfo usuario={{email: "Marcos@123"}}></Usuarioinfo>
        </Card>
      </div>

    <div className="Lista de Produtos">
        <Card titulo="#7 Produtos" color="#0f0202 ">
          <TabelaDeProdutos>

          </TabelaDeProdutos>
        </Card>
      </div>

      <div className="Lista de Alunos">
        <Card titulo="#6 Alunos" color="#CCCCFF">
          <ListasAlunos>

          </ListasAlunos>
        </Card>
      </div>
      <div className="Familia">
        <Card titulo="#5 componente com filhos" color="#6495ED">
          <Familia sobrenome="Rocha">
            <FamiliaMembro nome="Gustavo"/>
            <FamiliaMembro nome="Marcos"/>
            <FamiliaMembro nome="Camila"/>
          </Familia>
        </Card>
      </div>
      <div className="Desafio aleatorio">
        <Card titulo="#4 componente numero aleatorio" color="#FFBF00">
          <Aleatorio min={0} max={60} />
        </Card>
      </div>
      <div className="Fragmento">
        <Card titulo="#3 usando o fragment" color="#FF7F50">
          <Fragmento />
        </Card>
      </div>
      <div className="Com Parametro">
        <Card titulo="#2 componente com  parametro" color="#DE3163">
          <ComParametro nome="Vinicius" sobrenome="Silva" />
        </Card>
      </div>
      <div className="Primeiro Componente">
        <Card titulo="#1 primeiro componente" color="#9FE2BF">
          <strong>
            <Primeiro></Primeiro>
          </strong>
        </Card>
      </div>{" "}
    </div>
  </div>
);

export default app;
