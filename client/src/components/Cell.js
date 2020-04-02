import React, { Fragment } from 'react';

const Cell = ({ row, tmp }) => {

	return (
		<Fragment>
		{row.map( (y,z) => {
			return (
				<i key={`${tmp}${y}${z}`} className={`Cell-${y}`}>M</i>
				);
		})}
		</Fragment>
	)

}

export default Cell
