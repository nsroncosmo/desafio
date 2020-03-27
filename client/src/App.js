import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Grid } from './components/grid/grid.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows:    10,
            columns: 10,
        };

        this.handleRowsChange    = this.handleRowsChange.bind(this);
        this.handleColumnsChange = this.handleColumnsChange.bind(this);
    }

    handleRowsChange(e) {
        this.setState({
            rows: parseInt(e.target.value)
        })
    }

    handleColumnsChange(e) {
        this.setState({
            columns: parseInt(e.target.value)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="page-header text-center">
                        <h2>Desafio</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 pd-left-0">
                        <div className="panel panel-primary">
                            <div className="panel-heading">CONFIGURAÇÃO DA GRADE</div>
                            <div className="panel-body">
                                <form className="form-inline">
                                    <div className="form-group mg-right-1">
                                        <label className="mg-right-1">Linhas</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Linhas"
                                            name="rows"
                                            min="1"
                                            max="50"
                                            value={this.state.rows}
                                            onChange={this.handleRowsChange}
                                        />
                                    </div>
                                    <div className="form-group mg-right-1">
                                        <label className="mg-right-1">Colunas</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Colunas"
                                            name="columns"
                                            min="1"
                                            max="12"
                                            value={this.state.columns}
                                            onChange={this.handleColumnsChange}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 pd-right-0">
                        <div className="panel panel-primary">
                            <div className="panel-heading">LEGENDA</div>
                            <div className="panel-body text-center extra-padding">
                                <span className="fa fa-cloud text-muted"></span><span className="mg-right-1"> Nuvem de Cinzas</span>
                                <span className="fa fa-sun-o mg-right-1 text-yellow"></span><span className="mg-right-1"> Céu Aberto</span>
                                <span className="fa fa-plane mg-right-1 text-primary"></span><span className="mg-right-1"> Aeroporto</span>
                                <span className="fa fa-plane text-danger"></span><span className="mg-right-1"> Nuvem sob Aeroporto</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Grid rows={this.state.rows} columns={this.state.columns}/>

            </div>
        )
    }
}



render(
    <App/>,
    document.getElementById('root')
);

/*
import React, { Component } from 'react';

class App extends Component {
  state = {
    response: ''
  };

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

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
*/