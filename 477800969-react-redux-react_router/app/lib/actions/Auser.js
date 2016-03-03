import { SETUSER } from '../VAR.js';

// 设置用户信息
export function setUser(user){
	return {
		type:SETUSER,
		user:user
	}
}
