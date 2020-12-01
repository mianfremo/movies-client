import React from 'react';
import Config from '../config'

class GenreForm extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	name: ''
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
  		this.setState({name: event.target.value});
  	}

	handleSubmit(event) {
	    const requestOptions = {
	        method: 'POST',
	        body: new URLSearchParams({
		      'name': this.state.name
		    })
	    };
	    console.log(requestOptions)
	    fetch(Config.restServer+"/genre", requestOptions)
	        .then(response => response.json())

	    alert("Género Agregado con éxito")

	    event.preventDefault();
	}

  render() {
    return (
    	<div className="row justify-content-center">
	      	<form onSubmit={this.handleSubmit} className="col-lg-6">
		        <div className="form-group">
				    <label className="text-light" htmlFor="inputGenre">Nombre</label>
				    <input type="text" className="form-control" id="inputGenre" placeholder="Inserte el nombre del Género" value={this.state.name} onChange={this.handleChange}/>
				</div>
		        <input className="btn text-light col-lg-12 bg-branding" type="submit" value="Enviar" />
	      	</form>
      	</div>
    );
  }
}

export default GenreForm;