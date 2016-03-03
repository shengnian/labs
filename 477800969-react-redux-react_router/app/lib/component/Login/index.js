import ajax,{get} from 'axios';
let Link = Router.Link;

import { setLogin, setLogout } from '../../actions/Alogin.js'
import { setUser } from '../../actions/Auser.js'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

const Login =  React.createClass({
	getInitialState:function() {
	    return {
	          showmsg:''
	    };
	},
	submit:function(e){
		e.preventDefault();
		let that = this;
		let user ={
			username:that.refs.username.value.trim(),
			password:that.refs.password.value.trim(),
		};
		get('/data/login.json')
		.then(function  (data) {
			if(user.username !== data.data.user || user.password !== data.data.pass){
				that.setState({ showmsg:'帐号或者密码错误' });
				that.props.setLogout()
			}else{
				that.setState({ showmsg:'登录成功' });
				that.props.setLogin()
				that.props.setUser(user)
				browserHistory.push('/ucenter')
			}
		})
		
	},
	focus:function  () {
		this.setState({showmsg:''})
	},

	render:function(){
		return <div>
			<form ref='form' onSubmit={ this.submit }>
				<p>
					<label>帐号：</label>
					<input onFocus={this.focus} placeholder='帐号' type="text" ref='username'/>
				</p>
				<p>
					<label>密码：</label>
					<input onFocus={this.focus} placeholder='密码' type="text" ref='password'/>
				</p>
				<p>
					<button type='submit'>确定</button>&nbsp;
					<button type='reset'>重置</button>
				</p>
				{ this.state.showmsg }
				 
			</form>
		</div>
	}
});


export default connect(
  state => ({ login: state.login, user: state.user }),
  { setLogin, setLogout, setUser }
)(Login)
