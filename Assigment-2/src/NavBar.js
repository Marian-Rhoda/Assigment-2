import React from "react";
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (

        <div className="Navv"  >
            <nav style={{width:"100%", backgroundColor:"grey", margin:"0", padding:"0", textAlign:"center"}}>
                <ul style={{width:"50%", display:"inline-flex", textAlign:"center", justifyContent:"center",alignItems:"center", padding:"3px", alignContent:"center", listStyleType:"none", }}> 
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Login'><li>Login</li></Link>
                    <Link to='/Signup'><li>Signup</li></Link>
                </ul>
            </nav>
        </div>
    )

}