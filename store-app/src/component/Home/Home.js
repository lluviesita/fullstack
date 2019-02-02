import React, { Component } from 'react';
import axios from 'axios';
class Home extends Component{
	constructor(props){
		super(props);
		this.state={
      frutas : []
		}
	}

	componentWillMount(){
		this.getFruits();
	}

  getFruits = () => { 
    axios.get('http://localhost:8080/api/frutas')
				.then((frutas) => {
					console.log(frutas.data);
					this.setState({frutas : frutas.data})
					});      
      }

      onDelete = (id) => {
        axios.delete(`http://localhost:8080/api/fruta/${id}`,{})
        .then(res => this.getFruits())
      }

	render(){
		/*
		var self = this;
		var frutas = [];
*/
//		this.frutas = [];

		const { frutas } = this.state;

		return <div className="gridContainer">
						{
							frutas.length > 0 && frutas.map((fruta,index) => {
			    			return <div className="card"  key={index}>
							<button
								className="delete"
								onClick={() => this.onDelete(fruta.id) }
							>x</button>
			        		<img src={fruta.imageUrl} alt="Random"/>
			        		<div>
			        		<span>ID: {fruta.id}</span>
			          		<span>Nombre: {fruta.name}</span>
			          		<span>Precio: {fruta.price}$</span>
			        		</div>
			      		</div>		      
			   })
			 }
			 </div>;
	}
}

export default Home;