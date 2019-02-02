import React, { Component } from 'react';
import Header from './component/Header/header';
import Home from './component/Home/Home';
import AddFruit from './component/AddFruit/AddFruit'; 
import UpdateFruit from './component/AddFruit/UpdateFruit';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      titulo: 'Mis frutitas'
    }
  }

  onSubmit = fruit => {
    axios.post("http://localhost:8080/api/fruta",fruit)
        .then(res => console.log(res.data));

    console.log("Holi POST");
    console.log(fruit);
    //debugger
  }
  
  onUpdate = (id, fruit) => {
    if(id.length > 0){
    axios.put(`http://localhost:8080/api/fruta/${id}`,fruit)
        .then(res => console.log(res.data));
      }else{
    axios.post("http://localhost:8080/api/fruta",fruit)
        .then(res => console.log(res.data));
      }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UpdateFruit 
        actualizar={this.onUpdate}
        />
        <main>
          <h2>{this.state.titulo}</h2>
        	<Home 
          onDelete={this.onDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
