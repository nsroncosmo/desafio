import {CLOUD, SKY, AIRPORT, CLOUD_IN_AIRPORT} from './grid.jsx';


export default class GridController {
    constructor() {
        this.grid = [];
    }

    push(node) {
        this.grid.push(node)
    }

    update(row, column, new_value) {
        this.grid[row][column] = new_value;
    }

    clear() {
        this.grid = [];
    }

    hasAirport(element) {
        if (element.indexOf(AIRPORT) >= 0) {
            return true;
        }

        return false;
    }

    hasCloudInAirport(element) {
        if (element.indexOf(CLOUD_IN_AIRPORT) >= 0) {
            return true;
        }

        return false;
    }

    hasCloud(element) {
        if (element.indexOf(CLOUD) >= 0) {
            return true;
        }

        return false;
    }

    getTopCell(row, column, grid) {
        let row_copy = grid[row - 1]

        if (row_copy) {
            return [row - 1, column, row_copy[column]]
        }
        return
    }

    getBottomCell(row, column, grid) {
        let row_copy = grid[row + 1]

        if (row_copy) {
            return [row + 1, column, row_copy[column]]
        }
        return
    }

    getLeftCell(row, column, grid) {
        let cell = grid[row][column - 1]

        if (cell) {
            return [row, column - 1, cell]
        }
        return
    }

    getRightCell(row, column, grid) {
        let cell = grid[row][column + 1]

        if (cell) {
            return [row, column + 1, cell]
        }

        return
    }

    nextDay(grid) {
        let has_airport = false;
        let clouds = [];

        grid.forEach((row, x) => {
            row.forEach((column, y) => {
                if (column == CLOUD || column == CLOUD_IN_AIRPORT) {
                    clouds.push([x, y])
                }

                if (column == AIRPORT) {
                    has_airport = true;
                }
            })
        })

        if (!has_airport) {
            return false;
        }

        clouds.forEach((cloud, i) => {
            let [row, column] = cloud;
            let adjacent_cells = [
                this.getBottomCell(row, column, grid),
                this.getTopCell(row, column, grid),
                this.getRightCell(row, column, grid),
                this.getLeftCell(row, column, grid)
            ]

            adjacent_cells.forEach((cell, y) => {
                if (cell) {
                    let [row, column, value] = cell

                    switch(value) {
                        case SKY:
                            grid[row][column] = CLOUD
                            break;
                        case AIRPORT:
                            grid[row][column] = CLOUD_IN_AIRPORT
                            break;
                        CASE 
                    }
                }
            })
        })
        return true;

    }

    gridIsValid(grid) {
        if (!grid.some(this.hasAirport) && !grid.some(this.hasCloudInAirport) && grid.some(this.hasCloud)) {
            return 'Clique no Céu Aberto para criar alguns aeroportos.';
        }
        else if (!grid.some(this.hasCloud) && grid.some(this.hasAirport)) {
            return 'Está um ótimo dia! Não temos nenhuma nuvem.';
        }
        else if (!grid.some(this.hasCloud) && !(grid.some(this.hasAirport))){
            return 'Seu dia está ensolarado, clique em cima do Céu Aberto para determinar aonde estão os aeroportos e as nuvens.'
        }
        else if (!grid.some(this.hasAirport) && grid.some(this.hasCloudInAirport)) {
            return 'Epa, parece que os aeroportos foram encobertos pelas nuvens.'
        }

        return true
    }

    process() {
        let isValid = this.gridIsValid(this.grid)
        if (isValid != true) {
            return isValid
        }

        let grid = JSON.parse(JSON.stringify(this.grid))
        let days = 1;
        let first_airport, last_airport;

        while(this.nextDay(grid)) {
            days += 1;
            if (grid.some(this.hasCloudInAirport) && !first_airport) {
                first_airport = days
            }
        }
        last_airport = days;

        if (first_airport == last_airport) {
            return `Opa! Consegui descobrir que todos os aeroportos serão cobertos no ${first_airport}º dia.`
        } else {
            return `Opa! Consegui descobrir que o primeiro aeroporto sera coberto no ${first_airport}º dia e o restante no ${last_airport}º dia.`
        }
    }

}
