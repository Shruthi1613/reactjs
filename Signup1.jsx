import React, { useState } from 'react'
// import { Component } from 'react'


const Signup1=()=>{
  
  let [user, setUser]=useState("")
  let [pass,setPass]=useState("")


 let a=user;
 let b=pass;
  

  
  
    return(
      <div>
      <h1>SIGNUP PAGE</h1>
      <form action="">
        <label htmlFor="user">username</label><br />
        <input type="text"id='user' onChange={(e)=>{
             setUser(e.target.value)
        }}/><br />
        <label htmlFor="pass">password</label><br />
        <input type="Password" id='pass' onChange={(e)=>{
            setPass(e.target.value)
        }}/><br />
        <button onClick={(e)=> {
          e.preventDefault()
          window.location.assign('./login')
          localStorage.setItem("user",a)
          localStorage.setItem("pass",b)
        }}>SUBMIT</button>
      </form>
    </div>
    )
  }



export default Signup1