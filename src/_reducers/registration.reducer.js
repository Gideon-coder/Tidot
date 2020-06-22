import { userConstants } from '../_constants';

export function registration (state = {loading:false}, action) {
    switch(action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering : true,loading:true };
        case userConstants.REGISTER_SUCCESS:
            return { loading:false};
        case userConstants.REGISTER_FAILURE:
            return {loading:false,error:action.error};
        default:
            return state
    }
} 