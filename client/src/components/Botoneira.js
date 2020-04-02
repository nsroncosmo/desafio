import React, { useReducer } from 'react';

export default function Botoneira(props) {
	const estilo = {"float": "left","marginRight": "33px" };
	const btnInput = {"width": "45px", "textAlign": "center"}
	const { /*dimensions, elements,*/ info } = props.data

	const [dataInput, setDataInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    width:    props.data.dimensions.width,
    height:   props.data.dimensions.height,
		airports: props.data.elements.airports,
		clouds:   props.data.elements.clouds,
		}
	);
	
	const handleChange = evt => {
		setDataInput({[evt.target.name]: evt.target.value});
	}

	const onSubmit = e => {
		e.preventDefault();
//		if(text===''){
//			props.setAlert('Verfique o valor entrado','light');
//		}else{
//			console.log('OK!');
//		}
	}

	return (

		<form className="form" onSubmit={onSubmit}>
			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura:     <input style={btnInput} onChange={handleChange} type="text" name="width"   value={dataInput.height}/></p>
					<p>Largura:    <input style={btnInput} onChange={handleChange} type="text" name="height"  value={dataInput.width}/></p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: <input style={btnInput} onChange={handleChange} type="text" name="airports" value={dataInput.airports}/></p>
					<p>Nuvens:     <input style={btnInput} onChange={handleChange} type="text" name="clouds"   value={dataInput.clouds}/></p>
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

/*
					<p>Altura: <input style={btnInput} value={text} onChange={onChange} type="text" name="width" placeholder={dimensions.height}/></p>
					<p>Largura: <input style={btnInput} value={text} onChange={onChange} type="text" name="width" placeholder={dimensions.width}/></p>
*/

}