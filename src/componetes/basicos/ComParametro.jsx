import React from "react"
export default function ComParametro (props){
    return (
        <div id="app"> 
            <h1>
                Meu nome é {props.nome } {props.sobrenome}
            </h1>
        </div>
    )
}