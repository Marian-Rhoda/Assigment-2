import React, {useState, useEffect} from 'react'
import axios from 'axios';


function Weather({info}) { 

    const [location, setLocation]=useState({})
    const [current, setCurrent]=useState({})
    const [request, setRequest]=useState({})
    // const [history, setHistory]=useState([])
    const [savedHistory, setsavedHistory]= useState([])
    
    useEffect(()=> {
        axios.get(`http://api.weatherstack.com/current?access_key=ce1938b174d476929ac723fbb1fa1a05&query=${info}`)
        .then((res) =>{
             console.log(res.data);
            setLocation(res.data.location);
            setCurrent(res.data.current);
            setRequest(res.data.request);

            const saved = JSON.parse(localStorage.getItem("history"))


            let updatedHistory=[...saved, savedHistory]

            
            localStorage.setItem("history", 
            JSON.stringify(updatedHistory)
          )
          
          
        setsavedHistory(JSON.parse(localStorage.getItem('history')))
      })
  
      .catch(err =>console.error(err))
  },[info]);


  const handleupdatedhistory = (event)=>
      console.log(localStorage.history.id)
    
  




     
  return (
    <div style={{color:"purple"}}>
    <h5 >Location : {request.query}</h5>
    <h5>Temperature : {current.temperature}</h5>
    {<img src={current.weather_icons} alt=''/>}
    <h5>Humidity : {current.humidity}</h5>
    {<h5>Local time:{location.localtime}</h5> }

    <div>
        <button onClick={handleupdatedhistory}>Search history</button>
    </div>


    </div>
         
         
         

         )
     }
     
     export default Weather;
     
