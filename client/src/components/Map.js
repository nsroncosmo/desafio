import React from 'react';
const { guid, cell } = require('../utils/utils');

/*
let mapaInicio = [
	[0,0,0,0,0,0,9],
	[0,0,0,0,3,0,9],
	[1,0,2,0,0,0,9],
	[0,1,0,1,0,3,9],
	[0,0,0,0,0,0,9]
];

//<div className={`Cell-${x}`} key={`${x}-${y}-${guid()}`}> <p>{ x }</p> </div>


export default function Map() {
  return (
		<table>
		<td className="Map">
      {Object.keys(mapaInicio).map(keyOuter => {
        return Object.keys(mapaInicio[keyOuter]).map(keyInner => {
          return (
            <div className={`Cell-${mapaInicio[keyOuter][keyInner]}`} key={`${keyInner}-${keyOuter}`}>{mapaInicio[keyOuter][keyInner]}</div>
          );
        });
      })}
    </td>
		</table>
  );
}
*/


//const GROUND             = 0;
//const AIRPORT            = 1;
//const CLOUD_OVER_GROUND  = 2;
//const CLOUD_OVER_AIRPORT = 3;

//<td className={`Cell-${mapaInicio[keyOuter][keyInner]gvc}`} key={`${keyInner}-${keyOuter}`}>{mapaInicio[keyOuter][keyInner]}</td>
//<div className={`Cell-${x}`} key={`${x}-${y}-${guid()}`}> <p>{ x }</p> </div>


export default function Map() {
	/*
export default class Maps extends Component {
constructor(){
	super();
	this.state ={
		daGrid: this.props.daMap
	}
}

*/
	let mapaInicio = [
		[0,0,0,0,0,0,0],
		[0,0,0,0,3,0,0],
		[1,0,2,0,0,0,0],
		[0,1,0,1,0,4,0],
		[0,0,0,0,0,0,0]
	];

	function cXell (row){
		let cols = row
		cols.map( (v) => {
			return (
				<div> {v} </div>
			);
		})
	}

//render(){

	return (
		<>
		{mapaInicio.map( (x,y) => {
			return (
				<div key={`${x}-${y}-${guid()}`}> {cell(x)} </div>
			);
		})}
		</>
	)

//}

}