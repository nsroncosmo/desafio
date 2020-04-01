import React, { useState } from 'react';
import './App.css';
import Controller from './components/Controller';
//import PropTypes from 'prop-types';

export default function App() {

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

App.propTypes = {
//dados: PropTypes.array.isRequired,
//ctrlDados: PropTypes.object.isRequired
}

App.defaultProps = {
//  dados: {},
//  ctrlDados: null
}
