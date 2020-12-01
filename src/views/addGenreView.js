import React from 'react';
import Navbar from '../components/navbar';
import GenreForm from '../components/genreForm';


class AddGenreView extends React.Component{
	render(){
		return(
			<div>
		    	<Navbar />
		    	<div className="container mt-4">
		    		<GenreForm />
		      	</div>
		    </div>
		);
	}
}

export default AddGenreView;