import { App, Home, Login, Ucenter} from './lib/component'
import * as reducers from './lib/reducers';


import { combineReducers, createStore }  from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


const reducer = combineReducers ({
	...reducers,
	routing: routerReducer
});

const store = createStore(
  reducer,
)
const history = syncHistoryWithStore( browserHistory, store );

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