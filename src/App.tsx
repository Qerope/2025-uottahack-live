import React from 'react';
import './App.css';

import { ROUTES_WITH_TITLES } from './constants';

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<NavBarComponent />
				<div id="switch">
					<Switch>
						{ROUTES_WITH_TITLES.map((routeItem, index) => (
							<Route
								key={`${routeItem.title}-${index}`}
								exact={index === 0}
								path={routeItem.path}
								component={routeItem.component}
							/>
						))}
						<Redirect from="*" to="/" />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
