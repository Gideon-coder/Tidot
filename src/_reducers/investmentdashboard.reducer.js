import { userConstants } from '../_constants';

const initialState = {

    success: false,
    message: null,
    loading: false,
    data: [],
    error:null
};

export function dashboardInvestment(state = initialState, action){
    switch (action.type) {
        case userConstants.DASHBOARDINVESTMENT_REQUEST:
            return {
               ...state,
               loading:true,
            };
        case userConstants.DASHBOARDINVESTMENT_SUCCESS:
            return {
                ...state,
                data:action.data,
                loading:false,
                success:true
            };
        case userConstants.DASHBOARDINVESTMENT_FAILURE:
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