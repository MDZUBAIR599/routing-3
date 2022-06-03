import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [logincreads,sertlogincreads]=useState({});
    const {login}=useContext(AuthContext)
    const onchange=(e)=>{
       
        const {name, value}=e.target;
        sertlogincreads({
            ...logincreads,
            [name]:value,
        });
    }
    const submit=(e)=>{
        e.preventDefault();
        login()

    }
    
  return (
    <div>
        <form onSubmit={submit}>
        <input type="text" placeholder="enter email" onChange={onchange}></input>
        <input onChange={onchange} type="passowrd" placeholder="password"></input>
        <button >Login</button>

        </form>
      
    </div>
  )
}

export default Login
