import React, { cloneElement } from "react";

import FamiliaMembro from "./FamiliaMembro";

const Familia = props => {

    return (
        <div>
             {/* React.cloneElement espera receber um unico elemento 
            {React.cloneElement(props.children, {...props})}    */}
            
            {React.Children.map(props.Children, child =>{
                return cloneElement(child, props)

               
            })}
        </div>
    )
}

export default Familia 