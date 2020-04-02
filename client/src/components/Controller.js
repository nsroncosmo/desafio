import React, { Fragment } from 'react';
import Botoneira from '../components/Botoneira';
import Fundo from '../components/Fundo';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller(props){

	//	callAPI();

//render() {
	return (
		<Fragment>
				<div className="container">
					<Botoneira data={props.data}/>
				</div>
				<Map />
				<div className="container">
					<Fundo />
				</div>
		</Fragment>
	)
//}
}