import React from 'react';
import Config from '../config';
import MovieItem from './movieItem';


class MovieItemsContainer extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		movies: []
    	};
  	}

  	componentDidMount() {
  		fetch(Config.restServer+"/movie")
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ movies: data.movies.map((movie)=>
	            	<MovieItem movie={movie}/>
	            	            	
	            )})
        })
        .catch(console.log)
  	}

	render(){
		
		return(
			<div className="row mt-4">
				{this.state.movies}
			</div>
		);
	}
}

export default MovieItemsContainer;