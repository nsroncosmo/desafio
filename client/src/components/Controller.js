import React, { Fragment, useState } from 'react';
import Botoneira from '../components/Botoneira';
import Fundo from '../components/Fundo';
import Alert from '../components/Layout/Alert';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller(props){
	const [alert,setAlert] = useState(null);
	//	callAPI();
	
//	setAlert = (msg,type) =>{
//		alert= {msg,type}
//		setTimeout( () =>  )
//	}

//render() {
	return (
		<Fragment>
				<div className="container">
					<Alert alert={alert} />
					<Botoneira
						setAlert={setAlert}
						data={props.data}
						/>
				</div>
				<Map />
				<div className="container">
					<Fundo />
				</div>
		</Fragment>
	)
//}
}