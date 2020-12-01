import React from 'react';
import Navbar from '../components/navbar';
import ActorForm from '../components/actorForm';

class AddActorView extends React.Component{
	render(){
		return(
			<div>
				<Navbar />
				<div className="container mt-4">
					<ActorForm />
				</div>
			</div>
		);
	}
}

export default AddActorView;
