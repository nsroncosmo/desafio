import React from 'react';

export default function Botoneira(props) {
	const estilo = {"float": "left","marginRight": "33px" };
	const { dimensions, elements, info } = props.data

	return (

		<div >
			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura: {dimensions.height}</p>
					<p>Largura: {dimensions.width}</p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: {elements.airports}</p>
					<p>Núvens: {elements.clouds}</p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Informações</h4>
				<div>
					<p>Msg 1: {info.fDay}</p>
					<p>Msg 2: {info.lDay}</p>
					<p>Msg 3: {info.dMsg}</p>
				</div>
			</div>

			<div style={{"clear": "both"}}></div>
			<div className="text-center">
				<button className="btn btn-dark my-1">Projetar</button>
			</div>
		</div>
)

}