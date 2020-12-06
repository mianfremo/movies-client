import React from 'react';

class Modal extends React.Component{

	constructor(props){
		super(props);
		this.modalRef = React.createRef();
	}

	handleToggle(){
		console.log(this.modalRef)
	}

	render(){
		return(
			<div ref={this.modalRef} className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
				    <div className="modal-content">
				      	<div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          	<span aria-hidden="true">&times;</span>
					        </button>
				      	</div>
					    <div className="modal-body">
					        ...
					    </div>
				    </div>
			  	</div>
			</div>
		);
	}
}

export default Modal;