import React, { Component } from 'react';
class Form extends Component{
	render(){
		return <form>
              <label>
                Fruta:{' '}
                <input type="text" name="name" placeholder = {'Ingresa la fruta'}/>
              </label>
              {' '}
              <label>
                Url imagen:{' '}
                <input type="text" name="name" placeholder ={'Ingresa la url de la imagen'}/>
              </label>
              {' '}
              <label>
                Precio:{' '}
                <input type="text" name="name" placeholder ={'Ingresa el precio'} />
              </label>
              {' '}
                <input type="submit" value="Agregar" />               
            </form>
			  	
	}
}

export default Form;