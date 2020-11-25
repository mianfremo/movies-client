import React from 'react';
import Actors from './components/actors';
import './App.css';

class App extends React.Component {
    state = {
        actors: []
    }
  
    componentDidMount(){
        fetch("https://my-json-server.typicode.com/mianfremo/json-test/db")
        .then(res => res.json())
        .then((data)=>{
            this.setState({ actors: data.actors})
        })
        .catch(console.log)
    }

	render(){
		return (
            <div>
                <Navbar />
                <Actors actors={this.state.actors}/>
            </div>
        );
    }
}

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        );
    }
}

export default App;
