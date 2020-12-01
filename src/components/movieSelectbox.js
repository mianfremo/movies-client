import React from 'react';
import Config from '../config';
import MovieBadge from './movieBadge';

class MovieSelectBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movies: [],
			moviesAdded: [],
			moviesBadges: [],
			actual: ""
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);


	}

	handleClick(){

		if(this.state.actual===""){
			alert("No puedes agregar una pelicula en blanco")
		}else{
			// El atributo value no permite arrays de strings por lo tanto se suman ambos elementos en una misma cadena y se separan para operar
			var id = this.state.actual.split(",")[0];
			var title = this.state.actual.split(",")[1];

			if(this.state.moviesAdded.filter(item=> item === id)[0]=== id){

				alert("No puedes agregar la misma película")

			}else{
				this.setState({moviesAdded: [...this.state.moviesAdded, id]}, ()=>{
				this.props.action(this.state.moviesAdded);
				this.setState({
					moviesBadges: 
						[...this.state.moviesBadges, 
							<MovieBadge id={id} title={title} action={()=>this.handleDelete(id)} />
						]
						
					})
				})	
			}
					
		}		

	}

	handleChange(e){
		this.setState({actual: e.target.value})

	}

	handleDelete(id){
		const dropMovieAdded = this.state.moviesAdded.filter(item=> item!==id);
		const dropMovieBadges = this.state.moviesBadges.filter(item=> item.props.id !== id)

		this.setState({moviesAdded: dropMovieAdded}, ()=>{
			this.props.action(this.state.moviesAdded);
			this.setState({moviesBadges: dropMovieBadges});
			
		})
	}

	componentDidMount(){
		fetch(Config.restServer+"/movie")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ movies: data.movies.map((movie)=>
	            	//Esto crea un solo string no un array
	            	<option value={[movie._id,movie.title]}>{movie.title}</option>	            	            	
	            )})
        })
        .catch(console.log)

	}

	render(){
		return(
			<div>
				<div className="form-row">
					<div className="col-lg-12">
						<label className="text-light" htmlFor="selectMovies">Películas</label>
					</div>
				    <div className="col-sm-10 form-group">
					    <select className="form-control" id="selectMovies" onChange={this.handleChange} value={this.state.actual}>
					    	<option></option>
					    	{this.state.movies}
					    </select>
				    </div>
				    <div className="col-sm-2 form-group">
				      	<button className="form-control btn btn-success" type="button" onClick={this.handleClick}>+</button>
				    </div>
				</div>

				<div className="form-group">
					<div className="row">
						{this.state.moviesBadges}
					</div>
				</div>
			</div>

		);
	}
}

export default MovieSelectBox;