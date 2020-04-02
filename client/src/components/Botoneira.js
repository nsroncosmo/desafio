import React, { useState } from 'react';

export default function Botoneira(props) {
	const estilo = {"float": "left","marginRight": "33px" };
	const btnInput = {"width": "45px", "textAlign": "center"}
	const { dimensions, elements, info } = props.data

	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if(text===''){
			console.log('ALERTA');
		}else{
			console.log('OK!');
		}
	}

	const onChange = e => setText(e.target.value);

	return (

		<form className="form" onSubmit={onSubmit}>
			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura: <input style={btnInput} value={text} onChange={onChange} type="text" name="width" placeholder={dimensions.height}/></p>
					<p>Largura: <input style={btnInput} value={text} onChange={onChange} type="text" name="width" placeholder={dimensions.width}/></p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: <input style={btnInput} value={text} onChange={onChange} type="text" name="airports" placeholder={elements.airports}/></p>
					<p>Nuvens:  <input style={btnInput} value={text} onChange={onChange} type="text" name="clouds" placeholder={elements.clouds}/></p>
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