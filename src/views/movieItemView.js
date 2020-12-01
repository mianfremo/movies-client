import React from 'react';
import Navbar from '../components/navbar';
import MovieBlockItem from '../components/movieBlockItem';
import { useParams } from "react-router";

function MovieItemView() {

	let { id } = useParams();

	return (
	    <div>
	    	<Navbar />
	    	<div className="container mt-4">
	      		<MovieBlockItem id={id} />
	      	</div>
	    </div>
	);
}


export default MovieItemView;