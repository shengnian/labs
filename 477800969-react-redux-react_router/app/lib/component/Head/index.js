import './index.less';
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router';
import { Logout } from '../../common/component'

const Head = React.createClass ({
    getInitialState:function  () {
        return {
            nav:['ucenter']
        }
    },
    login:function  () {
        browserHistory.push('/login')
    },
    render:function(){
        return <header>
            <h1>react</h1>
            <nav>
                <Link className='nav_a' to="/">index</Link> 
                { this.state.nav.map( (item)=>  <Link key={item} className='nav_a' to={item}>{item}</Link> ) }
                { this.props.login ? 
                    <Logout text='logout' /> : 
                    <a href="javascript:;" onClick={this.login}>login</a>
                }
            </nav>
        </header>
    }
});

export default connect(
  state => ({ login: state.login })
)(Head)
