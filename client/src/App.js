import React, { Component } from 'react';
import './App.css';
import Controller from './components/Controller';



export default class App extends Component {
  state = {
    response: 'Tá vazio ainda'
  };

  /*
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
*/
  render() {
    return (
            <Controller />
        
//      <div className="App">
//        <p className="App-intro">{this.state.response}</p>
//      </div>
    );
  }
}
