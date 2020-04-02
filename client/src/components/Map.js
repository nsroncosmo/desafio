import React from 'react';
import Cell from '../components/Cell';

//const GROUND             = 0;
//const AIRPORT            = 1;
//const CLOUD_OVER_GROUND  = 2;
//const CLOUD_OVER_AIRPORT = 3;

export default function Map() {

	let mapaInicio = [
		[2,2,2,2,2,2,2,2,2,2,2,2],
		[2,0,0,0,0,0,0,0,0,0,0,2],
		[2,0,0,1,1,0,3,0,0,3,0,2],
		[2,0,1,0,0,0,3,0,3,0,0,2],
		[2,0,1,0,0,0,3,3,0,0,0,2],
		[2,0,1,0,0,0,3,0,3,0,0,2],
		[2,0,0,1,1,0,3,0,0,3,0,2],
		[2,0,0,0,0,0,0,0,0,0,0,2],
		[2,2,2,2,2,2,2,2,2,2,2,2],
	];

	return (
		<div className="card text-center">
		{mapaInicio.map( (x,y) => {
			return (
				<div key={`${x}-${y}}`}> <Cell row={x} tmp={y}/> </div>
			);
		})}
		</div>
	)

}