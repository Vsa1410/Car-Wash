import React, { useState } from "react";
import Data from "./data";



function Payments(){
    const [washes, setWashers] = useState({
        name:"Matheus",
        date:"12/07/2022",
        price:"R$20",
        clientName:"Jefferson"
    })
        
    return(
        <div>
            <h1 style={{margin: "0 5% 30px 6%", fontSize:"30px", color:"black"}}>Ultimas Lavagens</h1>     
            <Data name={washes.name}
                    date={washes.date}
                    price={washes.price}
                    clientName={washes.clientName}/>
        </div>
    )
}



export default Payments