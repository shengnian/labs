import { LOGIN, LOGOUT } from '../VAR.js';

const init = false

export default function login ( state = init , action ){
    switch(action.type){
        case LOGIN:
        	console.log(state,true)
            return true;
        case LOGOUT:
        	console.log(state,false)
        	return false;
        default:
            return state;
    }
}