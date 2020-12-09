import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {v1 as uuid} from 'uuid';
// import config from './config'
// import Login from './Login.js'
// import SearchBar from './SearchBar.js';
// const Key = config.key

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

            const updatedHistory = [...saved, {
              id: uuid(),
              Location : res.data.location.name,
              Temperature : res.data.current.temperature,
              Humidity : res.data.current.humidity,
              Localtime : res.data.location.localtime
              }]

            localStorage.setItem("history", 
              JSON.stringify(updatedHistory)
            )
          setsavedHistory(JSON.parse(localStorage.getItem('history')))
        })
    
        .catch(err =>console.error(err))
    },[info]);



    // const handleHistory =(history) => {
      
      
    //   localStorage.setItem('handleHistory', JSON.stringify(history))
    //   const historyJSON=localStorage.getItem('handleHistory')
    //   const savedHistory = historyJSON ? [JSON.parse(historyJSON)]:[]
    //   setsavedHistory(savedHistory)

    // }

    
    return (
        <div style={{color:"purple"}}>
        <h5 >Location : {request.query}</h5>
        <h5>Temperature : {current.temperature}</h5>
        {<img src={current.weather_icons} alt=''/>}
        <h5>Humidity : {current.humidity}</h5>
        {<h5>Local time:{location.localtime}</h5> }
        
            { <ul>
                     {savedHistory?
                     savedHistory.map((history) => (
                       <li className= 'savehistory' key={history.id}>
                         {history.Location}{history.Temperature}{history.Localtime}
                         </li>
                     )): <></>}
                       </ul>   }
                       {/* <SearchBar.Clicker onClick={handleHistory} /> */}
         </div>
         
         
         

    )
}

export default Weather;




