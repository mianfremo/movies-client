import React from 'react';
import Config from '../config';


class MovieItem extends React.Component{
	render(){
		return(
			<div className="col-lg-4 text-center" key={this.props.movie.id}>
				<a className="undecorated-link" href={"/movie/"+this.props.movie._id}>	
					<img alt={this.props.movie.title} src={Config.imageServer+this.props.movie.image} className="img-fluid img-movie"/>
					<h5>{this.props.movie.title}</h5>
	    			<p>{this.props.movie.rate}</p>
				</a>
			</div>
		);
	}
}

export default MovieItem;