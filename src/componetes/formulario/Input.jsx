import './input.css'
import React, {useState} from "react";
  

export default function MudarEstado(props){
    const [valor, setValor] = useState("Valor inicial")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    

    return(
        <div className="inputarea" style={{
            display: 'flex',
            flexDirection: "column"
        }}>
            <h1>{valor}</h1>
            <input value={valor} onChange={quandoMudar}  />
            <input placeholder='somente leitura' value={valor} readOnly /> 
            <input placeholder='Não controlado' value={valor}/>
        </div>
    )
}


