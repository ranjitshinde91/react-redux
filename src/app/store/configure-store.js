import createHistory from 'history/createBrowserHistory'
import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers'

export const history = createHistory()

const middleware       = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

console.log(rootReducer)
export function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(middleware)
		)
	)
	return store
}
