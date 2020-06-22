// export const url = ()=>process.env.NODE_ENV==="production"? "https://alaajo.herokuapp.com":"http://localhost:9191";
export const callBackUrl = ()=>process.env.NODE_ENV==="production"? "https://alaajo-frontend.herokuapp.com":"http://localhost:3000";

export function url(){
    if (process.env.NODE_ENV==="production"){
        return "https://alaajo.herokuapp.com";
    } 
   return  "http://localhost:9191"
}
// export const url = () => "https://alaajo.herokuapp.com";
