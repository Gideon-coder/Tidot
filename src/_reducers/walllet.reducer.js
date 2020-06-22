import { userConstants } from '../_constants';

const initialState = {

    success: false,
    error: null,
    loading: false,
    data: [],
};

export function wallet(state = initialState, action){
    switch (action.type) {
        case userConstants.WALLET_REQUEST:
            return {
               ...state,
               loading:true,
            };
        case userConstants.WALLET_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading:false,
                success:true
            };
        case userConstants.WALLET_FAILURE:
            return{
                ...state,
                loading:false,
                success:false,
                error:action.error
            };
        default:
            return state

    }
}