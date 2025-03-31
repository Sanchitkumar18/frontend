import axios from 'axios'
export const getAllMovies=async()=>{
   const res=await axios.get("https://movie-ticket-booking-api-zg7q.onrender.com/api/v1/movie/getAllmovies").catch(err=>console.log(err));
   if(res.status!==200){
    return console.log("No Data");
   }
   const data=await res.data;
   return data;
}