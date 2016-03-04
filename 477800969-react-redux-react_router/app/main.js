import { App, Home, Login, Ucenter} from './lib/component'
import * as reducers from './lib/reducers';

import { combineReducers, createStore, applyMiddleware, compose }  from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as router, routerMiddleware } from 'react-router-redux';

import {persistState} from 'redux-devtools';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: ''
});
const initialState = window.__INITIAL_STATE__;


const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='H'
    changePositionKey='Q'>
    <LogMonitor/>
  </DockMonitor>
);

const configStore = compose(applyMiddleware(routerMiddleware(browserHistory)), DevTools.instrument());

const reducer = combineReducers ({
	...reducers,
	router
});


const store = configStore(createStore)(reducer, initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});


function authIs (next, href) {
	let state = store.getState();
	if(!state.login){
      store.dispatch( push('/login'));
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
		<div style={{ height: '100%' }}>
				{rootRouter}
				<DevTools/>
		</div>
	</Provider>
,document.getElementById('main'))
