import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Episodes from './components/Episodes';
import Nav from './components/Nav';
import Favorites from './components/Favorites';

const App = () => (
	<Fragment>
		<Nav />
		<Router>
			<Switch>
				<Route exact path="/" component={Episodes} />
				<Route exact path="/favorites" component={Favorites} />
			</Switch>
		</Router>
	</Fragment>
);

export default App;
