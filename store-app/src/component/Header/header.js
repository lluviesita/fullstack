import React, { Component } from 'react';
class Header extends Component{
	  onBlue = () => {
	  	if(document.getElementById("form1").style.display == "block"){
      		document.getElementById("form1").style.display = "none";
			document.getElementById("fadeBtn").innerHTML="Mostrar Formulario";
  		}else{
			document.getElementById("form1").style.display = "block";
			document.getElementById("fadeBtn").innerHTML="Ocultar Formulario";
  		}
      }
	render(){
		return <header className="header">
					    <nav>
					      <ul className="navBarContainer">
					        <li className="navBarItem">
					          <a href="#perfil">Perfil</a>
					        </li>
					        <li className="navBarItem active">
					          <a href="#home">Proteco Store</a>
					        </li>
					        <li className="navBarItem">
									<button id="fadeBtn"
										className="shop"
										onClick={() => this.onBlue() }
									>Mostrar Formulario</button>
					        </li>
					      </ul>
					    </nav>
			  	</header>
			  	
	}
}

export default Header;