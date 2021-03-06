import React ,{useState} from 'react';
import Home from './Home.js';
import SearchBar from './SearchBar.js';
// import History from './History.js';
import './Login.css';





export default function Login() {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [LoggedIn, setLoggedIn]= useState(false)

    const handleEmailInput =(event) => {
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }


    function handleLoggedIn(event) {
        event.preventDefault();
        if (email === "marianrhoda@gmail.com" && password === "1301")
          setLoggedIn(true)
    }
    function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false)
    }


    return (
        LoggedIn
        ?
        <>
          <h2> Welcome Marian-Rhoda</h2> <button onClick= {handleLogout}>Logout</button>
          <Home/>
          
          <SearchBar />
          
         
          </>

          :
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
        
        <div className='Logform' >
            <form style={{backgroundColor:"#f2f2f2", border:"1px solid #ccc", borderRadius:"4px",boxSizing:"border-box"}}>
                <label>
                    Email:
                    <input type= "email" name= "username" value={email} onChange={handleEmailInput} />

                </label>
                <br></br><br></br>
                <label>
                    Password:
                    <input type= "password" name= "password" value={password} onChange={(event) => handlePasswordInput(event) } />
                </label>
                <br></br><br></br>
                <button onClick={handleLoggedIn}> Login </button>


        
            </form>
            </div>
            
            
        </div>
        </div>
        <div className='col-md-3'></div>
        </div>
    )
};

