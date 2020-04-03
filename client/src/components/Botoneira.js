import React, { useReducer } from 'react';
//NOTA: Sim, eu sei que preciso melhorar minhas habilidades de desenho no Frontend

export default function Botoneira(props) {
	const estilo = {"float": "left","marginRight": "33px" };
	const btnInput = {"fontSize": "14px", "width": "30px", "height": "22px", "textAlign": "center"}
	const { /*dimensions, elements,*/ minValues, info, daMap } = props.data

	const [dataInput, setDataInput] = useReducer(  // Pois 'useState' explicito é para os fracos! kkkkk
    (state, newState) => ({...state, ...newState}),
    {
	    largura:    props.data.dimensions.width, // Não 'destruturei' para deixar a leitura mais clara
  	  altura:     props.data.dimensions.height,
			aeroportos: props.data.elements.airports,
			nuvens:     props.data.elements.clouds,
		}
	);
	
	const handleChange = evt => {
		setDataInput({[evt.target.name]: parseInt(evt.target.value)});
	}

	const onSubmit = e => {
		e.preventDefault();
	//console.table(minValues)

		let error='';
		Object.values(dataInput).forEach( (val,pos) =>{
	//console.log( pos, minValues[pos], val )
			if( minValues[pos] > val ){ // Não acumula devido ao tamanho da janela de exibição do alert
				error /*+*/= `O campo '${Object.entries(dataInput)[pos][0]}' tem como valor mínimo aceito ${minValues[pos]}.` 
			}
		});

	//console.log(`error [${error}]`,error.length)
	if (error.length > 0 ){
	//console.log(`error [${error}]`)
			props.showAlert(error,'light');
			return;
		}
	
		console.log("[BOTONEIRA] vai chamar o lance do mapa")

		props.getMap();

		console.table('[BOTONEIRA]',daMap.mapGrid);

	}

	return (

		<form className="form" onSubmit={onSubmit}>
			<div style ={estilo}>
				<h4>Dimensões</h4>
				<div>
					<p>Altura:     <input style={btnInput} onChange={handleChange}
					type="text" name="largura"    value={dataInput.largura}/></p>
					<p>Largura:    <input style={btnInput} onChange={handleChange}
					 type="text" name="altura"     value={dataInput.altura}/></p>
				</div>
			</div>
			<div style ={estilo}>
				<h4>Elementos</h4>
				<div>
					<p>Aeroportos: <input style={btnInput} onChange={handleChange}
					type="text" name="aeroportos" value={dataInput.aeroportos}/></p>
					<p>Nuvens:     <input style={btnInput} onChange={handleChange}
					type="text" name="nuvens"     value={dataInput.nuvens}/></p>
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
}