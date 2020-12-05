import React from 'react';
import Config from '../config';
import MovieBadge from './movieBadge';

class MovieSelectBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			moviesSelect: [],
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
			
			const movieObj = JSON.parse(this.state.actual)

			this.props.fill(movieObj.id, ()=>{
				this.fillBadge(movieObj);
			})
					
		}		

	}

	handleChange(e){
		this.setState({actual: e.target.value})

	}

	handleDelete(id){
		const dropMovieBadges = this.state.moviesBadges.filter(item=> item.props.movie.id !== id)

		this.props.drop(id, ()=>{
			this.setState({moviesBadges: dropMovieBadges});
		});

	}

	componentDidMount(){
		fetch(Config.restServer+"/movie")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ moviesSelect: data.movies.map((movie)=>
	            	//El value es un string json para ser convertido en objeto
	            	<option value={'{"id":"'+movie._id+'","title":"'+movie.title+'"}'}>{movie.title}</option>	            	            	
	            )})
        })
        .catch(console.log)

	}

	fillBadge(movieObj){
		this.setState({
			moviesBadges: [...this.state.moviesBadges, <MovieBadge movie={movieObj} action={()=>this.handleDelete(movieObj.id)} />]
		})
	}


	render(){
		return(
			<div>
				<div className="form-row">
					<div className="col-lg-12">
						<label htmlFor="selectMovies">Películas</label>
					</div>
				    <div className="col-sm-10 form-group">
					    <select className="form-control" id="selectMovies" onChange={this.handleChange} value={this.state.actual}>
					    	<option></option>
					    	{this.state.moviesSelect}
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