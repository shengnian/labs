import { App, Home, Login, Ucenter} from './lib/component'
import * as reducers from './lib/reducers';

import { combineReducers, createStore, applyMiddleware, compose }  from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as router, routerMiddleware } from 'react-router-redux';

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: ''
});
const initialState = window.__INITIAL_STATE__;

const configStore = applyMiddleware(routerMiddleware(browserHistory));

const reducer = combineReducers ({
	...reducers,
	router
});

const store = configStore(createStore)(reducer, initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});


function authIs (next,href) {
	let state = store.getState();
	if(!state.login){
		href({
			pathname:'/login'
		})
	}
}

const rootRouter = <Router history={history}>
	<Route path='/' component={App}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path='/login' component={Login}></Route>
		<Route path='/ucenter' component={Ucenter} onEnter={authIs}></Route>
	</Route>
</Router>

ReactDOM.render(
	<Provider store={store}>
			{rootRouter}
	</Provider>
,document.getElementById('main'))
