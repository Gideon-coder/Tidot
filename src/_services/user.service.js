import Alaajo from '../api/Alaajo';

export const userService = {
    login,
    logout,
    register,
    EmailConfirmation,
    populateDashboard,
    quickSaverPost,
    quickSaverPaymentVerification
    // verify
};

function login(email, password){  
    return Alaajo
        .post("/auth/login", JSON.stringify({ username:email , password }),
        {headers: { 'Content-Type': 'application/json' }})
        .then(((response)=>{
        const headers = response.headers;
        const data = response.data;
        if (response.status > 201 && response.status < 200) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(headers)
        return headers["authorization"];
        }))
        .then(auth =>{
            
          localStorage.setItem("token", JSON.stringify(auth));
          return auth;
      })
}

function logout(){
    localStorage.clear();
}

function register(user){
   return Alaajo
        .post("/savers/new", user)
        .then((handleResponse))
        .then((data) => localStorage.setItem("email", user.email));
}



function handleResponse(response) {
    console.log(response.headers)
        const data = response.data;
        if (response.status > 201 && response.status < 200) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
}

function EmailConfirmation(url){
    return  Alaajo
    .get(url)
      .then(response =>  {
      if(response.status < 202 && response.status > 199){
        return response.data;
      }
    })
}

function quickSaverPaymentVerification(url,token){
    return  Alaajo
    .post(url,{},{
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    })
      .then(response =>  {
      if(response.status < 202 && response.status > 199){
        return response.data;
      }
    })
}

function quickSaverPost(url, payload,token){
    return  Alaajo
    .post(url,payload,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    })
      .then(response =>  {
      if(response.status < 202 && response.status > 199){
        return response.data;
      }
    })
}

function populateDashboard(url,token){

    return  Alaajo
    .get(url,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    })
      .then(response =>  {
      if(response.status < 202 && response.status > 199){
        return response.data;
      }
    })
}


