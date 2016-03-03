import { setLogout } from '../../../actions/Alogin.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

const Logout  = React.createClass({
	out:function  () {
		this.props.setLogout()
        browserHistory.push('/login')
	},
	render:function  () {
		return <a href="javascript:;" onClick={this.out}>{this.props.text}</a>
	}
});

export default connect(
  state => ({ login: state.login }),
  { setLogout }
)(Logout)