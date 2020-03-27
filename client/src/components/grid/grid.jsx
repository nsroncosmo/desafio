import React from 'react';
import guid from '../../utils/utils.js';
import Cell from './cell.jsx';
import GridController from './controller.js';

export const CLOUD            = 1;
export const SKY              = 2;
export const AIRPORT          = 3;
export const CLOUD_IN_AIRPORT = 4;


export class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.controller = new GridController();
        this.state = {
            prevision: '', //'Seu dia está ensolarado, clique em cima do Céu Aberto para determinar aonde estão os aeroportos e as nuvens.',
            day: 0,
            has_next_day: true,
            grid: []
        }
        this.simulations = [];
        this.handleCellClick = this.handleCellClick.bind(this);
        this.handlePreviousDayClick = this.handlePreviousDayClick.bind(this);
        this.handleNextDayClick = this.handleNextDayClick.bind(this);
    }

    handleCellClick(row, column, new_type) {
        this.controller.update(row, column, new_type);
        this.setState({
            prevision: this.controller.process()
        });

        let initial_grid = JSON.parse(JSON.stringify(this.controller.grid))
        this.simulations = [initial_grid];

        let grid = JSON.parse(JSON.stringify(this.controller.grid))

        if (this.controller.gridIsValid(grid) === true) {
            while(this.controller.nextDay(grid)) {
                let grid_copy = JSON.parse(JSON.stringify(grid))
                this.simulations.push(grid_copy)
            }
            this.setState({
                has_next_day: true
            })
        } else {
            this.setState({
                has_next_day: false
            })
        }
    }

    createDisplayGrid(grid, day) {
        let display_grid = [];

        grid.forEach((row, i) => {
            display_grid.push(
                <div className="col-xs-12" key={`${i}-${guid()}`}>
                    <div className="row">
                        {row.map((column, y) =>
                            <div className="col-xs-1 grid-cell text-center" key={`${i}-${y}-${guid()}`}>
                                <Cell row={i} column={y} onClick={this.handleCellClick} type={column} day={day}/>
                            </div>
                        )}
                    </div>
                </div>
            )
            this.controller.push(row)
        })

        return display_grid
    }

    handlePreviousDayClick(e) {
        this.controller.clear();
        let day = this.state.day - 1
        let grid = this.simulations[day];
        let display_grid = this.createDisplayGrid(grid, day);

        if (this.simulations.length > day + 1) {
            this.setState({
                has_next_day: true,
                grid: display_grid,
                day: day,
            })
        } else {
            this.setState({
                grid: display_grid,
                day: day,
            });
        }

    }

    handleNextDayClick(e) {
        this.controller.clear();
        let day = this.state.day + 1
        let grid = this.simulations[day];
        let display_grid = this.createDisplayGrid(grid, day);

        if (this.simulations.length === day + 1) {
            this.setState({
                grid: display_grid,
                day: day,
                has_next_day: false,
            });
        } else {
            this.setState({
                grid: display_grid,
                day: day,
                has_next_day: true,
            });
        }
    }


    renderGrid() {
        this.controller.clear();
        let grid = [];

        Array(this.props.rows).fill().forEach((row, i) => {
            grid[i] = []

            Array(this.props.columns).fill().forEach((column, y) => {
                grid[i].push(SKY)
            })
        })

        return this.createDisplayGrid(grid, this.state.day);
    }

    componentDidMount() {
        this.setState({
            grid: this.renderGrid()
        });
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevProp.rows !== this.props.rows || prevProp.columns !== this.props.columns) {
            this.controller.clear();
            this.simulations = [];
            let grid = [];

            Array(this.props.rows).fill().forEach((row, i) => {
                grid[i] = []

                Array(this.props.columns).fill().forEach((column, y) => {
                    grid[i].push(SKY)
                })
            })

            this.setState({
                grid: this.createDisplayGrid(grid, 0),
                day: 0,
                has_next_day: true,
                prevision: this.controller.process()
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-primary">
                    <div className="panel-heading text-center">{this.state.day + 1}º DIA</div>
                    <div className="panel-body">
                        {this.state.grid}
                    </div>

                    <div className="panel-footer text-center">
                        <div className="row">
                            <div className="col-xs-2">
                                {this.state.day === 0 ? (
                                    <button className="btn btn-primary disabled">Simular o dia anterior</button>
                                ): (
                                    <button className="btn btn-primary" onClick={this.handlePreviousDayClick}>Simular o dia anterior</button>
                                )}
                            </div>

                            <div className="col-xs-8">
                                {this.state.grid.length? this.state.prevision: 'Você precisa criar a grade para começarmos a brincar :)'}
                            </div>

                            <div className="col-xs-2">
                                {this.state.has_next_day && this.simulations.length ? (
                                    <button className="btn btn-primary" onClick={this.handleNextDayClick}>Simular o próximo dia</button>
                                ) : (
                                    <button className="btn btn-primary disabled">Simular o próximo dia</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
