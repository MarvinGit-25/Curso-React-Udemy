import './contador.css'
import DisplayCont from './Display';
import Botoes from './Botoes'
import PassoForm from './PassoForm'
import React, { Component } from "react";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (event) => {
    this.setState({
      passo: +event.target.value
    });
  };

  render() {
    return (
      <div>
         <DisplayCont numero={this.state.numero}/>
        <div className='contador'>
            <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
          <Botoes incrementar={this.inc} decrementar={this.dec}/>
        </div>
      </div>
    );
  }
}

export default Contador;
