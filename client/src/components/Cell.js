import React, { Fragment } from 'react';

const Cell = (props) => {

	return (
		<Fragment>
		{props.row.map( y => {
			return (
				<i className={`Cell-${y}`}>M</i>
				);
		})}
		</Fragment>
	)

}

export default Cell
