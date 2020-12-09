import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Accraweather() {
    const [location, setLocation]=useState({})
    const [current, setCurrent]=useState({})

    useEffect(()=> {
        axios.get('http://api.weatherstack.com/current?access_key=ce1938b174d476929ac723fbb1fa1a05&query=Accra')
        .then((res) =>{
             console.log(res.data);
            setLocation(res.data.location);
            setCurrent(res.data.current)
        })
    
        .catch(err =>console.error(err))
    },[]);


    
    return (
       
        <div className='container-fluid'>
             <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-3'></div>
            <div className='col-md-3'></div>

        <div className= 'col-md-3'>
            <h3>Accra</h3>
        <p3>Temperature : {current.temperature}°</p3><br></br>
        <p3>Humidity : {current.humidity}</p3><br></br>
        <p3>It's {current.weather_descriptions} in {location.name} today</p3>
        {<img src={current.weather_icons} alt='' style={{}}/>}
        
        
         </div>
         </div>
         </div>

    )
}

export default Accraweather;