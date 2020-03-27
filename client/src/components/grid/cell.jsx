import React from 'react';
import {CLOUD, SKY, AIRPORT, CLOUD_IN_AIRPORT} from './grid.jsx';


export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: SKY
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();

        if (this.props.day > 0) {
            return
        }

        switch(this.state.type) {
            case CLOUD:
                this.setState({type: SKY}, () => this.props.onClick(this.props.row, this.props.column, this.state.type));
                break;
            case SKY:
                this.setState({type: AIRPORT}, () => this.props.onClick(this.props.row, this.props.column, this.state.type));
                break;
            case AIRPORT:
                this.setState({type: CLOUD}, () => this.props.onClick(this.props.row, this.props.column, this.state.type));
                break;
            case CLOUD_IN_AIRPORT:
                this.setState({type: CLOUD}, () => this.props.onClick(this.props.row, this.props.column, this.state.type));
                break;
        }
    }

    renderCell() {
        switch(this.state.type) {
            case CLOUD:
                return <a href="#" onClick={this.handleClick}><span className="fa fa-cloud fa-lg text-muted"></span></a>
            case SKY:
                return <a href="#" onClick={this.handleClick}><span className="fa fa-sun-o fa-lg text-yellow"></span></a>
            case AIRPORT:
                return <a href="#" onClick={this.handleClick}><span className="fa fa-plane fa-lg text-primary"></span></a>
            case CLOUD_IN_AIRPORT:
                return <a href="#" onClick={this.handleClick}><span className="fa fa-plane fa-lg text-danger"></span></a>
        }
    }

    componentDidMount() {
        if (this.props.type && this.props.type != this.state.type) {
            this.setState({
                type: this.props.type
            })
        }
    }

    render() {
        return this.renderCell()
    }
}
