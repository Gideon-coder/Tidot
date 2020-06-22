import { userConstants } from '../_constants';

const initialState = {

    success: false,
    error: null,
    loading: false,
    data: [],
};

export function saver(state = initialState, action){
    switch (action.type) {
        case userConstants.SAVER_REQUEST:
            return {
               ...state,
               loading:true,
            };
        case userConstants.SAVER_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading:false,
                success:true
            };
        case userConstants.SAVER_FAILURE:
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