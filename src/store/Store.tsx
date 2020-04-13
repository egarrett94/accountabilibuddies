// imports from redux:
// applymiddleware: applies middleware to the dispatch method of the redux store
// combinereducers: merges reducers into one
// createstore: creates a redux store that holds the state tree
// store: the ts type used or the store, or state tree

import { applyMiddleware, combineReducers, createStore, Store } from 'redux';

// redux thunk middleware allows you to write action creaters that return a function
// instead of an action. the thunk can be used to delay the dispatch of an action
// or to dispatch only if a certain condition is met. the inner fx receives the
// store methods dispatch and getstate as parameters.

import thunk from 'redux-thunk';

// import reducers and state type

import { characterReducer, ICharacterState } from '../reducers/characterReducer';

// create an interface for the application state

export interface IAppState {
	characterState: ICharacterState;
}

// create the root reducer

const rootReducer = combineReducers<IAppState>({
	characterState: characterReducer,
});

// create a configure store fx of type iappstate

export default function configureStore(): Store<IAppState, any> {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
	return store;
}
