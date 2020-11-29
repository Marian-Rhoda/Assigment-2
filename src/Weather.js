import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {v1 as uuid} from 'uuid';
import Login from './Login.js'
import SearchBar from './SearchBar.js';

function Weather({info}) { 

    const [location, setLocation]=useState({})
    const [current, setCurrent]=useState({})
    const [request, setRequest]=useState({})
    const [history, setHistory]=useState([])
    

    useEffect(()=> {
        axios.get(`http://api.weatherstack.com/current?access_key=ce1938b174d476929ac723fbb1fa1a05&query=${info}`)
        .then((res) =>{
             console.log(res.data);
            setLocation(res.data.location);
            setCurrent(res.data.current);
            setRequest(res.data.request);
        })
    
        .catch(err =>console.error(err))
    },[]);

    const handleHistory =(event) => {
        event.preventDefault();
          setHistory([...history,
          {
            id: uuid(),
            Location : location.name,
            Temperature : current.temperature,
            Humidity : current.humidity,
            Localtime: location.localtime
          }
        ]);
      }
      
      localStorage.setItem('handleHistory', true) 
       const savesearch=localStorage.getItem('handleHistory', true)
       if (Login ? savesearch: SearchBar)

    
    return (
        <div style={{color:"purple"}}>
        <h3 >Location : {request.query}</h3>
        <h3>Temperature : {current.temperature}</h3>
        <h3>Humidity : {current.humidity}</h3>
        <h3>Local time:{location.localtime}</h3>
        
            <ul>
                     {history.map((history) => (
                       <li className= 'savehistory' key={history.id}>
                         {history.request.query} <br></br>{history.current.temperature}<br></br> {history.current.humidity} <br></br>{history.location.localtime}
                       </li>
                     ))}
                       </ul>  
                       {/* <SearchBar.Clicker onClick={handleHistory} /> */}
         </div>
         
         
         

    )
}

export default Weather;




