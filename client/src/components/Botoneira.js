import React from 'react';

export default function Botoneira() {
	const estilo = {"float": "left","marginRight": "33px" };

	return (

		<div >

			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura: 10</p>
					<p>Largura: 10</p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: 3</p>
					<p>Núvens: 4</p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Aeroporto</h4>
				<h5>Mantos DuBom</h5>
			</div>

			<div style={{"clear": "both"}}></div>
		</div>

)

}