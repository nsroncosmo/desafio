import React from 'react';

export default function Botoneira(props) {
	const estilo = {"float": "left","marginRight": "33px" };
	const btnInput = {"width": "45px", "textAlign": "center"}
	const { dimensions, elements, info } = props.data

	return (

		<form className="form">
			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura: <input style={btnInput} type="text" name="width" value={dimensions.height}/></p>
					<p>Largura: <input style={btnInput} type="text" name="width" placeholder={dimensions.width}/></p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: <input style={btnInput} type="text" name="airports" placeholder={elements.airports}/></p>
					<p>Nuvens:  <input style={btnInput} type="text" name="clouds" placeholder={elements.clouds}/></p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Informações</h4>
				<div>
					<p>{info.dMsg}</p>
					<p>{info.fDay}</p>
					<p>{info.lDay}</p>
				</div>
			</div>

			<div style={{"clear": "both"}}></div>
			<div className="text-center">
				<input type="submit" value="Projetar" className="btn btn-dark btn-block"/>
			</div>
		</form>
	)
//				<button className="btn btn-dark my-1">Projetar</button>

}