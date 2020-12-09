import React, {useState} from 'react';
import Login from './Login.js';
import './Signup.css';


function Signup(prop){
    const [firstname, setFirstName]= useState('')
    const [lastname, setLastName]= useState('')
    const [dob, setDOB]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [Signup, setSignup]= useState(false)


    const handleFirstNameInput =(event) => {
        setFirstName(event.target.value)
    }
    const handleLastNameInput =(event) => {
        setLastName(event.target.value)
    }

    const handleDOBInput =(event) => {
        setDOB(event.target.value)
    }

    const handleEmailInput =(event) => {
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }


    function handleSignup(event) {
        event.preventDefault();
          setSignup(true) 
    }

   
    return(

        <div >{

        
            Signup
              ?
              <>
                <p>Welcome and thanks for creating your account</p>
                <Login />
              </>
              :

              <>

                
            <div className= 'container-fluid' >
        
             <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            
           <header className= 'Signup-header'>
           <h2> Create a new account</h2>
           
            
           </header>
               <form className='Signup-form' style={{alignContent:"center",backgroundColor:"#f2f2f2", border:"1px solid #ccc", borderRadius:"4px",boxSizing:"border-box"}} >

                 <label>
                    First Name:
                 </label>
                 <input type= "text" name= "firstname" value={firstname} onChange={handleFirstNameInput}  placeholder="..eg..John"/>
                 
                 <br></br> <br></br>

                 <label>
                    Last Name:
                 </label>
                 <input type= "text" name= "username" value={lastname} onChange={handleLastNameInput}  placeholder="..eg..Doe"/>
                 <br></br> <br></br>

                 <label>
                    Date of birth:
                 </label>
                 <input type= "date" name= "DOB" value={dob} onChange={handleDOBInput} />
                 <br></br>
                 <br></br>

                 <label>
                    Username:
                 </label>
                 <input type= "email" name= "username" value={email} onChange={handleEmailInput} placeholder="..eg..john@gmail.com" />
                 <br></br>
                 <br></br>

                 <label>
                    Password:
                 </label>
                 <input type= "password" name= "password" value={password} onChange={(event) => handlePasswordInput(event) } placeholder="..eg..A1234" />
                 <br></br><br></br><br></br>
                 <button style={{borderRadius:"15%", backgroundColor:"white",color:"purple"}} onClick={handleSignup}> Submit </button>

               </form>
               </div>
               </div>
               </div>
               <div className='col-md-4'></div>

               </>

        }

        </div>
    );

}

export default Signup;