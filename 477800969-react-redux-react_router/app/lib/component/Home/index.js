import { connect } from 'react-redux'
import { Link } from 'react-router'

const Home = React.createClass({
	render:function(){
		var list =  this.props.login ? [1,2,3,4].map((item)=><ul><li>{item}</li></ul>) :
			<Link to='/login'>去登录</Link>
		return <div>
			<p>这里是首页,Index</p>
			{ list }
		</div>
	}
})

export default connect(
  state => ({ login: state.login })
)(Home)