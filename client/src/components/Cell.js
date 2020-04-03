import React from 'react';

const elements = [
	"cloud",
	"plane-departure",
  "cloud",
	"cloud",
];

const Cell = ({ row, tmp }) => {
	return (
		<div >
		{row.map( (y,z) => {
			return (
				<i key={`${tmp}${y}${z}`} className={`Cell-${y} fas fa-${elements[y]}`}></i>
				);
		})}
		</div>
	)

}

export default Cell
