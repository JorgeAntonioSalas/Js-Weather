/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css";

const Clima = () => {

    const [time, setTime] = useState({});
    useEffect(()=>{

    function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=208bda7380d978017ba7599fd6ae0b38`)
        .then(res=>setTime(res));
      };

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
      navigator.geolocation.getCurrentPosition(success, error);
      
    },[])
    console.log(time);

// time.data?.weather[0].icon
    return (
        <div className='divMain'>
        
            <h2>WEATHER APP</h2> 
            <p>{time.data?.name}, {time.data?.sys.country} </p> 
            <div className='divSubMain'>
              
                <div className='miniDiv1'>
                    
                    <img src={`http://openweathermap.org/img/wn/${time.data?.weather[0].icon}@2x.png`}></img>
                    <p className='value0_1'> <span className='value0_2'>{Number((time.data?.main.temp-273.15).toFixed(2))} ºC</span></p>
                </div>
                <div className='miniDiv2'>
                    <p>"{time.data?.weather[0].description}"</p>
                        <p className='value1_1'><i class="fa-solid fa-wind"></i> <b>Wind Speed:</b> <span className='value1_2'>{time.data?.wind.speed} m/s</span></p>
                        <p className='value2_1'><i class="fa-solid fa-cloud"> </i> <b>Clouds:</b> <span className='value2_2'>{time.data?.clouds.all} %</span></p>
                        <p className='value3_1'><i class="fa-brands fa-cloudsmith"></i> <b>Pressure: </b><span className='value3_2'>{time.data?.main.pressure} mb</span></p>
                </div>


            </div>
           

        </div>
    );
};

export default Clima;