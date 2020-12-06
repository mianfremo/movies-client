import React from 'react';
import IndexView from './views/indexView';
import MovieItemView from './views/movieItemView';
import AddActorView from './views/addActorView';
import AddGenreView from './views/addGenreView';
import AddMovieView from './views/addMovieView';
import ErrorView from './views/errorView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends React.Component {

	render(){
		return (
			<Router>
	            <Switch>
	            	<Route path="/movie/:id">
		            	<MovieItemView />
		            </Route>

		            <Route path="/addGenre">
		            	<AddGenreView />
		            </Route>

		            <Route path="/addActor">
		            	<AddActorView />
		            </Route>

		            <Route path="/addMovie">
		            	<AddMovieView/>
		            </Route>

		            <Route path="/error">
		            	<ErrorView/>
		            </Route>

	            	<Route path="/">
		                <IndexView />
		            </Route>

		            

	            </Switch>
	        </Router>
        );
    }
}


export default App;
