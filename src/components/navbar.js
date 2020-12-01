import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-branding">
            	<div className="container">
			  		<a className="navbar-brand" href="/">Nefli</a>
			  		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					</button>
			  		<div className="collapse navbar-collapse" id="navbar">
					    <ul className="navbar-nav ml-auto">
					      	<li className="nav-item dropdown bg-transparent">
						        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
						          	Admin
						        </a>
						        <div className="dropdown-menu bg-transparent" aria-labelledby="navbarDropdown">
						          	<a className="dropdown-item bg-transparent text-light" href="/addMovie">Agregar Película</a>
						          	<a className="dropdown-item bg-transparent text-light" href="/addActor">Agregar Actor</a>
						          	<a className="dropdown-item bg-transparent text-light" href="/addGenre">Agregar Género</a>
						        </div>
					      	</li>
					    </ul>
					</div>
				    
			    </div>
			</nav>
        );
    }
}

export default Navbar;