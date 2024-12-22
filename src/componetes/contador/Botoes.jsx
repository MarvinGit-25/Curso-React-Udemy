import React from "react";

export default function Button(props){
    return(
        <div>
            <button onClick={props.incrementar}>+</button>
          <button onClick={props.decrementar}>-</button>
        </div>
        
    )
}