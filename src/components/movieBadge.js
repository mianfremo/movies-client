import React from 'react';

class MovieBadge extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.id,
			title: this.props.title
		}
	}

	render(){
		return(
			<div className="col-lg-4 text-light">
				<span>
					{this.state.title} 
					<a  
						href="#"
						onClick={this.props.action} 
						class="badge badge-pill badge-danger ml-1">
						X
					</a>
				</span>
			</div>
		);
	}
}

export default MovieBadge;