import { userConstants } from '../_constants';

const initialState = {

    success: false,
    message: null,
    loading: false,
    data: [],
    error:null
};

export function dashboard(state = initialState, action){
    switch (action.type) {
        case userConstants.DASHBOARD_REQUEST:
            return {
               ...state,
               loading:true,
            };
        case userConstants.DASHBOARD_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading:false,
                success:true
            };
        case userConstants.DASHBOARD_FAILURE:
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