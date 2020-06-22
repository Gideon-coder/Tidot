import { userConstants } from '../_constants';

const initialState = {

    success: false,
    error: null,
    loading: false,
    data: [],
};

export function quickSaverPost(state = initialState, action){
    switch (action.type) {
        case userConstants.QUICKSAVER_REQUEST:
            return {
               ...state,
               loading:true,
            };
        case userConstants.QUICKSAVER_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading:false,
                success:true
            };
        case userConstants.QUICKSAVER_FAIL:
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