import React from 'react';
import Botoneira from '../components/Botoneira';
import Fundo from '../components/Fundo';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller(props){

	//	callAPI();

//render() {
	return (
		<div>
			<div>
				<Botoneira />
			</div>
			<div>
				<Map />
			</div>
			<div>
				<Fundo />
			</div>
		</div>
	)
//}
}