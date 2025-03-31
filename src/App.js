import { Route, Routes } from "react-router-dom";
import Header from "./compnents/Header";
import HomePage from "./compnents/HomePage";
import Movies from "./compnents/Movies/Movies";
import Admin from "./compnents/Admin/Admin";
import Auth from "./compnents/Auth/Auth";
import { useSelector } from "react-redux";


function App() {
  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);
  return (
    <div >
      <Header/>
      <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/auth" element={<Auth/>} />
            </Routes>
    </div>
  );
}

export default App;
