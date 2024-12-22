import React from "react"
const NumAleatorio = (props) => {
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min) + min)

    return (
        <div>
            <h1>Mega sena</h1>
            <p><strong>valor minimo</strong> {min}</p>
            <p><strong>Valor maximo</strong> {max}</p>
            <p><strong>Valor escolhido</strong> {aleatorio}</p>
        </div>
    )
}

export default NumAleatorio

