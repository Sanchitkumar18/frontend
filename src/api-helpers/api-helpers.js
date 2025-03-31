import axios from 'axios'
const api = axios.create({
   baseURL: 'https://movie-ticket-booking-api-zg7q.onrender.com', 
   headers: {
     'Content-Type': 'application/json',
   },
   withCredentials: true, 
 });
 
export const getAllMovies=async()=>{
   const res=await api.get("/api/v1/movie/getAllmovies").catch(err=>console.log(err));
   if(res.status!==200){
    return console.log("No Data");
   }
   const data=await res.data;
   return data;
}
export const sendUserAuthRequest=async(data,signup)=>{
  const res= await  api.post(`/api/v1/auth/${signup?"register":"login"}`,{
      name:signup?data.name :" ",
      email:data.email,
      password:data.password
   }).catch((err)=>console.log(err));
   if(res.status!==200 && res.status!==201){
      console.log("unexpected error occured")
   }
   const resData=await res.data;
   return resData;
}
export const sendAdminAuthRequest=async(data)=>{
   const res= await  api.post("/api/v1/auth/login",{
       email:data.email,
       password:data.password
    }).catch((err)=>console.log(err));
    if(res.status!==200){
       console.log("unexpected error occured")
    }
    const resData=await res.data;
    return resData;
 }