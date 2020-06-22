import { userConstants } from '../_constants';

let user = localStorage.getItem("token");
const initialState = user && user !== 'undefined' ? { loggedIn : true,loading:false ,error:null} : {};

export function authentication(state = initialState, action){
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn:true,
                loading:true,
                user:action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn:true,
                loading:false,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return{loading:false,error:action.error};
        case userConstants.LOGOUT:
            return{};
        default:
            return state

    }
}