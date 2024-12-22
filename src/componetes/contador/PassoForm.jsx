import React from "react";

export default function Button(props){
    return(

        <div>
            <label htmlFor="passoInput">passo:</label>
          <input
            id="passoInput"
            type="number"
            value={props.passo}
            onChange={props.setPasso}
          />
        </div>
        
    )
}