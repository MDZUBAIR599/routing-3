import React from 'react'
import { useContext } from "react";
import { Link ,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate=useNavigate();
    const handlelogin=()=>{
        if (isAuth) {
            logout();
            // he wants to logout
          } else {
            // he wants to login
            navigate("/login");
          }
    }
  return (
    <div style={{padding:"10px",marginLeft:"10px"}}>
        Navbar:
      <Link to="/" >Home</Link>
      <Link to="/feed" >Feed</Link>
      <button onClick={handlelogin}> {isAuth ? "Logout" : "Login"}</button>
     
    </div>
  )
}
export default Navbar
