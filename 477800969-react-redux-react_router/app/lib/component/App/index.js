import Head from '../Head'
import Foot from '../Foot'

const App = React.createClass({
	render:function  () {
		return <div>
			<Head />
			{this.props.children}
			<Foot />
		</div>
	}
})
export default App;
