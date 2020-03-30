import React, { Fragment, useState } from 'react';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller() {
	const [rows,setRows] = useState(10);
	const [cols,setCols] = useState(10);

//	function incCols() { if (cols<50) setCols(cols + 1) }
//	function decCols() { if (cols>10) setCols(cols - 1) }
	
//	callAPI();

	return (
		<>
		<Fragment>
			Topo
			<h3>Linhas: {rows} / Colunas {cols}</h3>
		</Fragment>
		<Fragment>
			<Map />
		</Fragment>
		<Fragment>Fundo</Fragment>
		</>
	)

}