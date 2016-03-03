import Head from './component/Head';
import Foot from './component/Foot';
import { connect } from 'react-redux';
import * as ActionCreates from './actions';
import { bindActionCreators } from 'redux';

const App = React.createClass( {
	
	render:function(){
		const {actions} = this.props
		console.log(actions.setLogin('LOGIN'))
		return <div>
			<Head />
			{this.props.children}
			<Foot />
		</div>
	}
})

export default connect(state => ({
    login: state.login,
    user: state.user
}), dispatch => ({
    actions: bindActionCreators( ActionCreates )
}))(App)