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
    isLoading: false,
    daMap: {
      mapGrid: null,
    },
    info:{
      fDay: "",
      lDay: "",
      dMsg: "Clique no botão Projetar para iniciar",
    },
  }/*)*/;
  
  //$ ```curl -X POST localhost:3000/api/map -d "w=10&c=10&a=3&c=4"```
  const fetchMap = async () => { 
    const res = await fetch("/api/map", { // Eu estou evitando usar axios, mas preferi mante o máximo de simplicidade e sem libs de terceiros
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', }),
      body:   `w=${dados.dimensions.width}
              &h=${dados.dimensions.heith}
              &a=${dados.elements.airports}
              &c=${dados.elements.clouds}`

    })
      dados.daMap.mapGrid = res;
  }


//  const fetchMap_OLD = async () => {
//		console.log("[APPS] dentro da rotina de fetch")
//    /*const res = await*/ fetch("/api/map", { // Eu estou evitando usar axios, mas preferi mante o máximo de simplicidade e sem libs de terceiros
//      method: 'POST',
//      headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', }),
//      body:   `w=${dados.dimensions.width}
//              &h=${dados.dimensions.heith}
//              &a=${dados.elements.airports}
//              &c=${dados.elements.clouds}`
//
//    })
//    .then((response) => response.text())
//    .then((responseText) => {
//      console.log("Q?",responseText);
//    })
//    .catch((error) => {
//        console.error(error);
//    });
////*/
//  } 

  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render = {props=>(
          <Fragment>
            <Controller data={dados} getMap={fetchMap}/*ctrl={ctrlDados}*/ /> )
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
