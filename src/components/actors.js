import React from 'react'

const Actors = ({ actors }) =>{
	return(
	    <div>
	      	<h1 className="display-4">Actores</h1>
		    {actors.map((actor) => (
		        <div>
		          	<h2>{actor.name}</h2>
		          	<h4>Fecha de Nacimiento: {actor.birth}</h4>
		          	<h4>Oscars: {actor.oscars}</h4>
		        </div>
		    ))}
	    </div>
	)
};

export default Actors
