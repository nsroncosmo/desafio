import React, { Fragment, useState } from 'react';
import Botoneira from '../components/Botoneira';
import Fundo from '../components/Fundo';
import Alert from '../components/Layout/Alert';
import Map from './Map';
//import { callAPI } from '../utils/utils';
//const { callAPI, guid  } = require('../utils/utils');


export default function Controller(props){
  let [alert,setAlert] = useState(null);
	//	callAPI();
	
	const showAlert = (msg,type) => {
//console.log('[setAlert]', `msg [${msg}]`, `type [${type}]`)
		setAlert( alert = { msg, type } );
		setTimeout( () => {
			setAlert( alert = null );
//console.log('Alerta em 5 segundos')
		}, 5000 );
	}

//render() {
	return (
		<Fragment>
				<div className="container">
					<Alert alert={alert} />
					<Botoneira
						getMap={props.getMap}
						showAlert={showAlert}
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