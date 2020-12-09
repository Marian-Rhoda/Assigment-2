import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

export default function NavBar() {

    return (

        <div className="Navv"  >
            <nav>
                <ul > 
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Login'><li>Login</li></Link>
                    <Link to='/Signup'><li>Signup</li></Link>
                </ul>
            </nav>
        </div>
    )

}