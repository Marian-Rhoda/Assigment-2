import React, {useState} from 'react';
import Weather from './Weather.js';
 


export default function SearchBar({savesearch}) {

    const [searchitem, setSearchitem]= useState('')
    const [Found, setFound]= useState(false)
    
    

    const handleSearchitem =(event) => {
        setSearchitem(event.target.value)
    }


    function handleFound(event) {
        event.preventDefault();
        if ( searchitem !== "")
          setFound(true)
    }

    
    


    return (
        Found
        ?
        <>
          <SearchBar clickme={<button/>}/>
          <p>All Search results</p>
          <Weather info={searchitem}/>
          </>

          :
        <div style={{textAlign:"center"}}>
            <form>
                
                <input type= "text" name= "searchtitem" value={searchitem} onChange={handleSearchitem} />

                <button classname= 'clicker' onClick={handleFound}> Search</button>

            </form>
            
        </div>
    )
};