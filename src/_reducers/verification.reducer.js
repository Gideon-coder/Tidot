import { userConstants } from '../_constants';

export function verification (state = {}, action) {
    switch(action.type) {
        case userConstants.GETALL_REQUEST:
            return {loading : true };
        case userConstants.GETALL_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
} 