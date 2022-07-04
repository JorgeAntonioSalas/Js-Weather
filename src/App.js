import React,{useState} from "react";
import "./App.css";
import Clima from "./Clima";
import ClimaF from "./ClimaF";


function App(){

    const [temp, setTemp] = useState(true);
    const selectTemp=()=>{setTemp(!temp)};
 
    return (
        <div className='App'>
          
          {temp? <Clima/>:<ClimaF/>}
          <button onClick={selectTemp} className="button"><b>Degree °C/°F</b></button>  
          

            
        </div>
    );
};


 export default App;