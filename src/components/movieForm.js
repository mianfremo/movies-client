import React from 'react';
import Config from '../config';

class MovieForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: "",
			desc: "",
			rate: 0,
			imageSrc: Config.imageServer+"default.png",
			image: "",
			actorSelect: [],
			genreSelect: [],
			actors: [],
			genres: []
		}

		this.handleUpload = this.handleUpload.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		
		var requestOptions = {}

		const params = new URLSearchParams({
		    'title': this.state.title,
		    'desc': this.state.desc,
		    'image': this.state.image,
		    'rate': parseFloat(this.state.rate)
		});

		if (this.state.actors.length !== 0) {
		    params.append("actors", this.state.actors)
		}

		if (this.state.genres.length !== 0) {
		    params.append("genres", this.state.genres)
		}

		requestOptions.method = "POST";
		requestOptions.body = params;
	    

	    fetch(Config.restServer+"/movie", requestOptions)
	        .then(response => response.json())

	    alert("Película agregada con éxito")

	    event.preventDefault();
	}

	handleUpload(event){
		let img = event.target.files[0]
		
		this.setState({
	      	imageSrc: URL.createObjectURL(img),
	      	image: img.name
	    })

	}

	handleChange(e){

		let element = e.target

		if(element.tagName === "SELECT"){
			let value = Array.from(element.selectedOptions, option => option.value);
			this.setState({
				[element.name]: value
			})
		}else{

			this.setState({
				[element.name]: element.value
			})
		}
	}

	componentDidMount(){
		fetch(Config.restServer+"/genre")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ genreSelect: data.genres.map((genre)=>
	            	<option value={genre._id}>{genre.name}</option>	            	            	
	            )})
        })
        .catch(console.log)

        fetch(Config.restServer+"/actor")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ actorSelect: data.actors.map((actor)=>
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
							    <input name="title" type="text" className="form-control" id="inputTitle" placeholder="Inserte el título de la película" onChange={this.handleChange}/>
							</div>
							<div className="form-group">
							    <label htmlFor="inputDesc">Descripción</label>
							    <textarea className="form-control" id="inputDesc" rows="3" name="desc" onChange={this.handleChange}>
							    	
							    </textarea>
							</div>
						</div>
						<div className="col-sm-4 text-center">
							<img className="img-fluid" src={this.state.imageSrc}/>
						</div>
					</div>

					<div className="form-group">
					    <label htmlFor="inputRate">Calificación</label>
					    <input name="rate" type="text" className="form-control" id="inputRate" placeholder="Inserte la calificación de la película" onChange={this.handleChange}/>
					</div>

					<div className="form-group">
					    <label htmlFor="inputImg">Imágen de Portada</label>
					    <input type="file" className="form-control-file" id="inputImg" onChange={this.handleUpload}/>
					</div>

					<div className="form-group">
						<label htmlFor="inputGenre">Géneros</label>
						<select name="genres" id="inputGenre" className="form-control" size="4" multiple onChange={this.handleChange}>
							{this.state.genreSelect}
						</select>
					</div>

					<div className="form-group">
						<label htmlFor="inputActor">Actores</label>
						<select name="actors" id="inputActor" className="form-control" size="4" multiple onChange={this.handleChange}>
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