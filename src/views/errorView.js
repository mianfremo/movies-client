import React from 'react';
import Navbar from '../components/navbar';
import Config from '../config';

class ErrorView extends React.Component{

	render(){
		return(
			<div>
		    	<Navbar />
		    	<div className="container mt-4">
		    		<h1 className="display-2 text-center text-branding">Oops! 404</h1>
		    		<div className="row">
		    			<div className="col-lg-4 text-center">
		    				<img className="img-fluid error-image" src={`${Config.imageServer}/popcorn.svg`} />
		    			</div>
		    			<div className="col-lg-8 align-self-center">
		    				<p className="display-4 text-light text-justify">Al parecer la página que solicitaste no existe o no se encuentra disponible</p>
		    			</div>
		    		</div>
		      	</div>
		    </div>
		);
	}
}

export default ErrorView;