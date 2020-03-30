import React, { useState } from 'react';
import Botoneira from '../components/Botoneira';
import Fundo from '../components/Fundo';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller() {
	const [rows,setRows] = useState(10);
	const [cols,setCols] = useState(10);
	const [dados,genDados] = useState({
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

//	function incCols() { if (cols<50) setCols(cols + 1) }
//	function decCols() { if (cols>10) setCols(cols - 1) }
	
//	callAPI();

	return (
		<div>
			<div>
				<Botoneira />
			</div>
			<div>
				<Map />
			</div>
			<div>
				<Fundo/>
			</div>
		</div>
	)

}