import React from 'react';
import Config from '../config';
import {Redirect} from 'react-router-dom';

class MovieBlockItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			movie: [],
			actors: []
		}
	}

	componentDidMount(){
		fetch(Config.restServer+"/movie/"+this.props.id)
	        .then(res => res.json())
	        .then((data)=>{
	            this.setState({ movie: data.movie})
	            this.setState({actors: this.state.movie.actors.map((actor)=>
        			<li className="list-group-item bg-transparent text-light"><a href="#" className="undecorated-link">{actor.name} ({actor.oscars} Oscar)</a></li>
       			)})
        })
        .catch(console.log)

        

	}

	render(){
		if(this.state.movie != null){
			return(
				<div className="row">
					<div className="col-lg-4 text-center">
						<img alt={this.state.movie.title} src={Config.imageServer+this.state.movie.image} className="img-fluid img-movieBlock"/>
						<div className="col-lg-12 bg-branding my-4">
							<span className="text-rate">{this.state.movie.rate}</span>
						</div>
					</div>
					<div className="col-lg-8">
						<h2 className="font-title text-branding text-center">{this.state.movie.title}</h2>
						<p className="font-raleway text-light text-justify">{this.state.movie.desc}</p>
						<p className="font-raleway text-light"><small>Protagonistas:</small></p>
						<ul className="list-group list-group-flush">
							{this.state.actors}
							
						</ul>
					</div>
				</div>
			);
		}else{
			return(
				<Redirect to="/error" />
			);
		}
	}
}

export default MovieBlockItem;