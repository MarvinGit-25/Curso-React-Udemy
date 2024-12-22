import React from "react";
import If from "./If"

const Condicional = props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste ={usuario && usuario.nome}>
               Seja bem vindo <strong>{usuario.nome}</strong> 
            </If>

            <If teste ={!usuario ||!usuario.nome}>
               Seja bem vindo <strong>Amigão</strong> 
            </If>
        </div>
    )
}

export default Condicional