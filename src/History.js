import React ,{useState} from 'react';
// import from './Weather.js';

function History() {

 const [savedHistory, setsavedHistory]= useState([])
    
  const  handleupdatedHistory= (event)=> {setsavedHistory(JSON.parse(localStorage.getItem('history')))}

    return (
        
        <div>
        
            <p onClick={handleupdatedHistory}>Search History</p>
            
        </div>
    )
}

export default History
