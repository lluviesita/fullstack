import React, { Component } from 'react';

class AddFruit extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl : '',
            price: 0
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(ev){
        const newState = Object.assign(this.state,{});//nueva direccion de memoria es una copia
        newState[ev.target.id] = ev.target.value;//se asigna lo que tipee
        this.setState({...newState})//voy a sacar esos valores y copiando el estado,anterior respeta los valores anteriores
        console.log(ev.target.value);
        console.log("newState: ",newState);
        //debugger
    }
  render() {
      const { name, imageUrl, price } = this.state;
    return (
      <div className="formContainer">
        <form className="fruitForm" 
            onSubmit={() => {this.props.agregar({name,imageUrl,price})}}>
          <div className="nameForm">
            <label htmlFor="name">Name</label>
            <input
              value ={name}
              placeholder="Nombre"
              onChange={this.onChangeInput}
              type="text"
              id="name" />
          </div>
          <div className="imageForm">
            <label htmlFor="imageUrl">Image</label>
            <input
              value ={imageUrl}
              placeholder="Url"
              onChange={this.onChangeInput}
              type="text"
              id="imageUrl" />
          </div>
          <div className="priceForm">
            <label htmlFor="price">Price</label>
            <input
              value ={price}
              placeholder="Precio"
              onChange={this.onChangeInput}
              type="number"
              id="price" />
          </div>
          <div className="submitButton">
            <input type="submit" value="Añadir fruta"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFruit;