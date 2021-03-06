import React from 'react';
import Config from '../config'
import MovieSelectbox from '../components/movieSelectbox';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class ActorForm extends React.Component{


	constructor(props) {
	    super(props);
	    this.state = {
	    	name: '',
	    	birth: '',
	    	oscars: 0,
	    	movies: []
	    };


	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.fillMovies = this.fillMovies.bind(this);
	    this.dropMovie = this.dropMovie.bind(this);
	    this.handleDayChange = this.handleDayChange.bind(this);
  	}

  	handleChange(event) {
  		const target = event.target;
  		const value = target.value;
  		const name = target.name;

  		this.setState({
  			[name]: event.target.value
  		});
  	}

	handleSubmit(event) {

		var requestOptions = {}

		const params = new URLSearchParams({
		    'name': this.state.name,
		    'birth': this.state.birth,
		    'oscars': this.state.oscars
		});

		if (this.state.movies.length !== 0) {
		    params.append("movies", this.state.movies)
		}

		requestOptions.method = "POST";
		requestOptions.body = params;
	    

	    fetch(Config.restServer+"/actor", requestOptions)
	        .then(response => response.json())

	    alert("Actor Agregado con éxito")

	    event.preventDefault();
	}

	handleDayChange(selectedDay, modifiers, dayPickerInput) {
	    const input = dayPickerInput.getInput();
	    const date = input.value.split("-");
	    const fecha = new Date(date[0],date[1],date[2])

	    this.setState({
	      	birth: fecha.toISOString()
	    });
  	}

	fillMovies(movie, callback){
		/*
			Se verifican si se agregaron películas repetidas:
			- Crea un array con los elementos que cumplan la condición que el id sea igual al pasado
			- Compara si el unico elemento del array es igual al id
	
		*/

		if(this.state.movies.filter(item=> item === movie)[0]=== movie){

			alert("No puedes agregar la misma película");
		
		}else{

			this.setState({
				movies: [...this.state.movies, movie]
			}, callback);

		}
		
	}

	dropMovie(movie, callback){

		const dropMovieAdded = this.state.movies.filter(item=> item!== movie);

		this.setState({
			movies: dropMovieAdded
		}, callback);

	}
    

  	render() {
	    return (
	    	<div className="row justify-content-center">
		      	<form onSubmit={this.handleSubmit} className="col-lg-6 bg-light p-4">
			        <div className="form-group">
					    <label htmlFor="inputName">Nombre</label>
					    <input name="name" type="text" className="form-control" id="inputName" placeholder="Inserte el nombre del Actor" onChange={this.handleChange} value={this.state.name} />
					</div>
					<div className="form-group">
					    <label htmlFor="inputOscars">Oscars</label>
					    <input name="oscars" type="text" className="form-control" id="inputOscars" placeholder="Inserte el número de premios del Actor" value={this.state.oscars} onChange={this.handleChange}/>
					</div>

					<MovieSelectbox fill = {this.fillMovies} drop={this.dropMovie}/>

					<div className="form-group">
						<div className="row">
							<label className="col-lg-12" htmlFor="fecha">Nacimiento</label>
						</div>
						<DayPickerInput id="fecha" inputProps={{ className: 'form-control' }} value={this.selectedDay} onDayChange={this.handleDayChange}/>
					</div>
					
			        <input className="btn text-light col-lg-12 bg-branding" type="submit" value="Enviar" />
		      	</form>
	      	</div>
	    );
  	}
}

export default ActorForm;