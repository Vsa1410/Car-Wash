import React from "react";
import Data from "./data";
import { file } from "../addNew/form";



function Payments(){
    
    if (file.length === 0){
        return (
            <div>
                <div>
                <h1 style={{margin: "100px 5% 0 6%", fontSize:"30px", color:"black"}}>Ultimas Lavagens</h1>           
                </div> 
                <h3 style={{margin: "20px 5% 0 6%",  color:"#565757"}}>Nenhum lançamento encontrado</h3>
            </div>
        )
    }else{

        return(
            <div>
                <div>
                <h1 style={{margin: "100px 5% 0 6%", fontSize:"30px", color:"black"}}>Ultimas Lavagens</h1>           
                </div>  
                
                {file.map((washes) => 
    
                <Data name={washes.name}
                        date={washes.date}
                        price={washes.price}
                        clientName={washes.clientName}
                        />
                )}
            </div>
        )
    }   
}



export default Payments