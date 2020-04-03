import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Controller from './components/Controller';
import Navbar from './components/Layout/Navbar';
import About from './components/pages/About';
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
    minValues: [ 10, 10, 3, 4],
    info:{
      fDay: "",
      lDay: "",
      dMsg: "Clique no botão Projetar para iniciar",
    },
  }/*)*/;
  

  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render = {props=>(
          <Fragment>
            <Controller data={dados} /*ctrl={ctrlDados}*/ /> )
          </Fragment>
      )} />
      <Route exect path='/about' component={About}/>
      </Switch>
    </Router>
    )
}

App.propTypes = {
//dados: PropTypes.array.isRequired,
//ctrlDados: PropTypes.object.isRequired
}

App.defaultProps = {
//  dados: {},
//  ctrlDados: null
}
