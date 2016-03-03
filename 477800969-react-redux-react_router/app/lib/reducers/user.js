import { SETUSER } from '../VAR.js';

const init ={
	username: '',
	password:''
}

export default function user (state = init, action) {
	switch(action.type){
		case SETUSER:
			return Object.assign({},state,action.user);
		default:
			return state;
	}
	// if(action.type === SETUSER) return action.user
	// else return state
}