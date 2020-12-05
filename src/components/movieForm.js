import React from 'react';
import Config from '../config';

class MovieForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			image: null,
			actorSelect: [],
			genreSelect: []
		}

		this.handleUpload = this.handleUpload.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(){
		console.log("hello")
	}

	handleUpload(event){
		this.setState({
	      	image: URL.createObjectURL(event.target.files[0])
	    })
	}

	handleChange(e){

		let element = e.target

		if(element.tagName === "SELECT"){
			let value = Array.from(element.selectedOptions, option => option.value);
		}
	}

	componentDidMount(){
		fetch(Config.restServer+"/genre")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ genreSelect: data.genres.map((genre)=>
	            	//El value es un string json para ser convertido en objeto
	            	//value={'{"id":"'+movie._id+'","title":"'+movie.title+'"}'}
	            	<option value={genre._id}>{genre.name}</option>	            	            	
	            )})
        })
        .catch(console.log)

        fetch(Config.restServer+"/actor")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ actorSelect: data.actors.map((actor)=>
	            	//El value es un string json para ser convertido en objeto
	            	//value={'{"id":"'+movie._id+'","title":"'+movie.title+'"}'}
	            	<option value={actor._id}>{actor.name}</option>	            	            	
	            )})
        })
        .catch(console.log)

	}

	render(){
		return(
			<div className="row justify-content-center">
		      	<form onSubmit={this.handleSubmit} className="col-lg-6 bg-light p-4">
		      		<div className="row">
		      			<div className="col-sm-8">
					        <div className="form-group">
							    <label htmlFor="inputTitle">Título</label>
							    <input name="title" type="text" className="form-control" id="inputTitle" placeholder="Inserte el título de la película"/>
							</div>
							<div className="form-group">
							    <label htmlFor="inputDesc">Descripción</label>
							    <textarea className="form-control" id="inputDesc" rows="3" name="desc">
							    	
							    </textarea>
							</div>
						</div>
						<div className="col-sm-4 text-center">
							<img className="img-fluid" src={this.state.image}/>
						</div>
					</div>

					<div className="form-group">
					    <label htmlFor="inputRate">Calificación</label>
					    <input name="title" type="text" className="form-control" id="inputRate" placeholder="Inserte la calificación de la película"/>
					</div>

					<div className="form-group">
					    <label htmlFor="inputImg">Imágen de Portada</label>
					    <input type="file" className="form-control-file" id="inputImg" onChange={this.handleUpload}/>
					</div>

					<div className="form-group">
						<label htmlFor="inputGenre">Géneros</label>
						<select id="inputGenre" className="form-control" size="4" multiple onChange={this.handleChange}>
							{this.state.genreSelect}
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="inputActor">Actores</label>
						<select id="inputActor" className="form-control" size="4" multiple onChange={this.handleChange}>
							{this.state.actorSelect}
						</select>
					</div>					
					
			        <input className="btn text-light col-lg-12 bg-branding" type="submit" value="Enviar" />
		      	</form>
	      	</div>
	    );
	}
}

export default MovieForm;