import React, { useState } from 'react';
import './App.css';
import Controller from './components/Controller';


export default function App() {
//  const [rows,setRows] = useState(10);
//  const [cols,setCols] = useState(10);
  

const [dados,ctrlDados] = useState({
    dimensions: {
      width: 10,
      height: 10,
    },
    Elements:{
      Airports: 3,
      Clouds: 4,
    },
    Info:{
      FDay: "?",
      LDay: "?",
      Msg: "Clique em [botão] para iniciar os cálculos",
    },
  });
  

  return ( <Controller data={dados} ctrl={ctrlDados} /> )
}


/*
const dados = {
  terrain: {
    grid: [],
  },
  dimensions: {
    width: 10,
    height: 10,
  },
  elements:{
    Airports: 3,
    Clouds: 4,
  },
  info:{
    FDay: "?",
    LDay: "?",
    Msg: "Clique em [botão] para iniciar os cálculos",
  },
};

export default class App extends Component {
constructor(){
  super();
  this.state ={
    daMap:[],
  }
}

  render() {

    return (
            <Controller terrain={this.state.daMap}
                        dimensions={dados.dimensions}
                        elements={dados.elements}
                        info={dados.info}/>
    );
  }
}
*/