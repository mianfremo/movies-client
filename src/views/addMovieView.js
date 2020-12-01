import React from 'react';
import Navbar from '../components/navbar';
import MovieForm from '../components/movieForm';

class AddMovieView extends React.Component{

	render(){
		return(
			<div>
		    	<Navbar />
		    	<div className="container mt-4">
		    		<MovieForm />
		      	</div>
		    </div>
		);
	}
}

export default AddMovieView;