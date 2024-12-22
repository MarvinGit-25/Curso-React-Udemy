import React from "react"
import Filho from "./DiretaFilho"

const Pai = props => {
    return (
        <div>
            <Filho nome="Camila" idade={20} ></Filho>
            <Filho nome="Marcos" idade={29} ></Filho>
        </div>
    )
}

export default Pai