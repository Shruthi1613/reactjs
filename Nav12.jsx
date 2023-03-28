import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
const Nav12 = () => {
  return (
    <div style={{display : "flex" , justifyContent:"space-between" , alignItems : "center" , height:"75px" , border :"2px solid red"}}>
        <div>LOGO</div>
        <div>
            <ol style={{display :"flex" , width:"400px" , justifyContent:"space-evenly"}}>
                <li>

                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
                <li> 
                    <Link to="/Signup1">SIGNUP</Link>
                </li>
                <li>
                   <Link to="/aboutus">ABOUT</Link>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Nav12