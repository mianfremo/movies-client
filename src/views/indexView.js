import React from 'react';
import MovieItemsContainer from '../components/movieItemsContainer';
import Navbar from '../components/navbar';

class IndexView extends React.Component{
	render(){
		return(
			<div>
				<Navbar />
				<div className="container">
		            <MovieItemsContainer />
		        </div>
		    </div>
		);
	}
}

export default IndexView;