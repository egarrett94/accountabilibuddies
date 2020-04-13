import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Profile from './components/Profile';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// make store available to all container components in app without passing it explicitly
import { Provider } from 'react-redux';

// store type from Redux
import { Store } from 'redux';

// import the store fx and state
import configureStore, { IAppState } from './store/Store';
import { getAllCharacters } from './actions/CharacterActions';

interface IProps {
	store: Store<IAppState>;
}

// create a root component that receives the store via props and wraps
// the app component with provider, giving props to containers

const Root: React.SFC<IProps> = (props) => (
	<React.StrictMode>
		<Provider store={props.store}>
			<Router>
				<div>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/profile">Profile</Link>
					</nav>
					<Switch>
						<Route exact path="/" component={App} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</div>
			</Router>
		</Provider>
	</React.StrictMode>
);

// generate store
const store = configureStore();
store.dispatch(getAllCharacters());

//render app
ReactDOM.render(<Root store={store} />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
