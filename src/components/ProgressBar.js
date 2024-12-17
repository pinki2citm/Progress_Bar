import { useEffect, useState } from "react";
import '../App.css';
const ProgressBar = ({ value }) => {
    const [Percentage, setPercentage]=useState(value);
    useEffect(()=>{
     setPercentage(Math.min(100,Math.max(0,value)));
    },[value]);
  return (
    <div className="progress">
        <span style={{color: Percentage > 49? 'white': 'Black'}}
        
        className="value">{Percentage}%</span>
        <div style={{width:`${Percentage}%`}}/>
    </div>
  );
};
export default ProgressBar;
