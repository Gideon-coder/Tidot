import { userConstants, alertConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    verify,
    populateUserDashboard,
    populatedashboardInvestment,
    quickSave,
    verifyPayment,
    populateWallet,
    populateUserProfile
};

function login(email , password, historyObject) {
    return dispatch => {
        dispatch(request({ email }));

      return  userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(alertActions.success("Login successful"))
                    historyObject.push('/');
                })
                .catch(error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.message));
                })       
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function populateUserDashboard() {
    const Token = JSON.parse(localStorage.getItem('token'));
    return dispatch => {
        dispatch(request());
        userService.populateDashboard("/savers/dashboard",Token)
            .then(
                data => {
                    dispatch(success(data));
                    if(localStorage.getItem("fullname") == null){
                        const {firstname,lastname}=data;
                        const name = typeof data === "object"? {firstname,lastname}: null;
                        localStorage.setItem("fullname", JSON.stringify(name));    
                      } 
                    if(localStorage.getItem("dp") == null){
                        const {imageUrl}=data;
                        const dp = typeof data === "object"? {imageUrl}: null;
                        localStorage.setItem("dp", JSON.stringify(dp));    
                      } 
                })
                .catch(error => {
                    dispatch(failure(error.toString()));
                })
            
    };

    function request() { return { type: userConstants.DASHBOARD_REQUEST } }
    function success(data) { return { type: userConstants.DASHBOARD_SUCCESS, data } }
    function failure(error) { return { type: userConstants.DASHBOARD_FAILURE, error } }
}

function populateUserProfile() {
    const Token = JSON.parse(localStorage.getItem('token'));
    return dispatch => {
        dispatch(request());
        userService.populateDashboard("/savers/dashboard",Token)
            .then(
                data => {
                    dispatch(success(data));
                })
                .catch(error => {
                    dispatch(failure(error));
                })
            
    };

    function request() { return { type: userConstants.SAVER_REQUEST } }
    function success(data) { return { type: userConstants.SAVER_SUCCESS, data } }
    function failure(error) { return { type: userConstants.SAVER_FAILURE, error } }
}

function populateWallet() {
    const Token = JSON.parse(localStorage.getItem('token'));
    return dispatch => {
        dispatch(request());
        userService.populateDashboard("/savers/wallets",Token)
            .then(
                data => {
                    dispatch(success(data));
                    // if(localStorage.getItem("fullname") == null){
                    //     const {firstname,lastname}=data;
                    //     const name = typeof data === "object"? {firstname,lastname}: null;
                    //     localStorage.setItem("fullname", JSON.stringify(name));    
                    //   } 
                })
                .catch(error => {
                    dispatch(failure(error.toString()));
                })
            
    };

    function request() { return { type: userConstants.WALLET_REQUEST } }
    function success(data) { return { type: userConstants.WALLET_SUCCESS, data } }
    function failure(error) { return { type: userConstants.WALLET_FAILURE, error } }
}


function populatedashboardInvestment() {
    const Token = JSON.parse(localStorage.getItem('token'));

    return dispatch => {
        dispatch(request());
        userService.populateDashboard("/investments",Token)
            .then(
                data => {
                    dispatch(success(data));
                })
                .catch(error => {
                    dispatch(failure(error));
                })
            
    };

    function request() { return { type: userConstants.DASHBOARDINVESTMENT_REQUEST } }
    function success(data) { return { type: userConstants.DASHBOARDINVESTMENT_SUCCESS, data } }
    function failure(error) { return { type: userConstants.DASHBOARDINVESTMENT_FAILURE, error } }
}

function quickSave(payload,redirectObj) {
    const Token = JSON.parse(localStorage.getItem('token'));
    return dispatch => {
        dispatch(request());
        userService.quickSaverPost("/savings/credit/checkout",payload, Token)
            .then(
                data => {
                    dispatch(success(data));
                    console.log(data)
                    redirectObj.location.href = data;
                })
                .catch(error => {
                    dispatch(failure(error));
                })
            
    };

    function request() { return { type: userConstants.QUICKSAVER_REQUEST } }
    function success(data) { return { type: userConstants.QUICKSAVER_SUCCESS, data } }
    function failure(error) { return { type: userConstants.QUICKSAVER_FAIL, error } }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function verify(urlToken, historyObject){

    return dispatch => {
        dispatch(request());

        userService.EmailConfirmation(urlToken)
            .then((res) => {
                    dispatch(alertActions.success('Email Successfully Verified, You can now login'));
                    historyObject.push('/login');
                    console.log(res)

                }
            ).catch( error => {
                dispatch(alertActions.error(error.toString()))
            })
    }

    function request() { return { type: userConstants.GETALL_REQUEST } }
}

function verifyPayment(url, historyObject,id){
    const Token = JSON.parse(localStorage.getItem('token'));

    return dispatch => {
        dispatch(request());

        userService.quickSaverPaymentVerification(url,Token)
            .then((res) => {
                    dispatch(success(res));
                    dispatch(alertActions.success('Payment successful'));
                    historyObject.location.href =`/savingproduct/${id}`; 
                }
            ).catch( error => {
                console.log(error)
                dispatch(failure(error));
                dispatch(alertActions.error(error.toString()));
            })
    }

    function request() { return { type: userConstants.PAYMENTVERIFICATION_REQUEST } }
    function success(data) { return { type: userConstants.PAYMENTVERIFICATION_SUCCESS, data } }
    function failure(error) { return { type: userConstants.PAYMENTVERIFICATION_FAILURE, error } }
}

function register(user, historyObject) {

    return dispatch => {

        dispatch(request(user));
        

        userService.register(user)
            .then(
                () => { 

                    dispatch(success(user));
                    dispatch(alertActions.success('Registration successful'))
                    historyObject.push('/success');
                })
               .catch( error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.toString()));
                });
            
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}