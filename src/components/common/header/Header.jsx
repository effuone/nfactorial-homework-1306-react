import React from "react";
import { useState } from "react";
import {format} from "date-fns"
import './Header.css'
import facebook from '../../../images/facebook.png'
const Header = () => {
    const dataInfo = format(new Date(), "dd-MM-yyyy HH:mm")
    const [time, setTime] = useState(dataInfo)
  
    const tick = () => {
      const dataInfo = format(new Date(), "dd-MM-yyyy HH:mm")
      setTime(dataInfo)
    }
    setInterval(tick, 1000)
    return(
        <header>
            <div className="logo">
                <img src={facebook} alt="facebook.png"/>
            </div>
            <div className="dateInfo">
                <h2>{time}</h2>
            </div>
        </header>
    )
}
export default Header