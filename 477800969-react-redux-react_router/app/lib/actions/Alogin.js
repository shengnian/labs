import { LOGIN, LOGOUT } from '../VAR.js';

// 登录
export function setLogin(){
	return {
		type: LOGIN,
		login: true,
	}
}

// 退出
export function setLogout(){
	return {
		type:LOGOUT,
		login:false
	}
}