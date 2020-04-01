import React from 'react';
import './App.css';
import Controller from './components/Controller';
//import PropTypes from 'prop-types';

export default function App() {

const dados = {//[dados,ctrlDados] = useState({
    dimensions: {
      width: 10,
      height: 10,
    },
    elements:{
      airports: 3,
      clouds: 4,
    },
    info:{
      fDay: "?",
      lDay: "?",
      dMsg: "Clique em [botão] para iniciar os cálculos",
    },
  }/*)*/;
  

  return ( <Controller data={dados} /*ctrl={ctrlDados}*/ /> )
}

App.propTypes = {
//dados: PropTypes.array.isRequired,
//ctrlDados: PropTypes.object.isRequired
}

App.defaultProps = {
//  dados: {},
//  ctrlDados: null
}
