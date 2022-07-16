import React from "react";
import './index.css'


function Header(){
    return(
        <div className="header" style={{display:"flex", alignItems:"center", color:"white"}}>
            <span class="material-symbols-outlined" style={{color:"white", marginLeft:"35px"}}>
            local_car_wash
            </span>
            <h3 style={{margin:"0 0 0 10px"}}>CAR WASH</h3>

        </div>
    )
}
export default Header