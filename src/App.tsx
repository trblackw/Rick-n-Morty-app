import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Episodes = lazy<React.FunctionComponent<{}>>((): Promise<{
	default: React.FunctionComponent<{}>;
}> => import('./components/Episodes'));
const Favorites = lazy<React.FunctionComponent<{}>>((): Promise<{
	default: React.FunctionComponent<{}>;
}> => import('./components/Favorites'));
import Nav from './components/Nav';

const App = () => (
	<Fragment>
		<Router>
			<Nav />
			<Switch>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path='/' component={Episodes} />
					<Route exact path='/favorites' component={Favorites} />
				</Suspense>
			</Switch>
		</Router>
	</Fragment>
);

export default App;
