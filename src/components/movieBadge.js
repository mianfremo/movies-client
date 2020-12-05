import React from 'react';

class MovieBadge extends React.Component{

	render(){
		return(
			<div className="col-lg-4">
				<span>
					{this.props.movie.title} 
					<a  
						href="#"
						onClick={this.props.action} 
						className="badge badge-pill badge-danger ml-1">
						X
					</a>
				</span>
			</div>
		);
	}
}

export default MovieBadge;