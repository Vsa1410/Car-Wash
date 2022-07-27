import React from "react";
import Data from "./data";




let file = []



function Payments(){

    async function getData(){
        let response = await fetch ('https://car-wash-back.herokuapp.com/washes')
        let data = await response.json
        console.log(data)
        console.log("Ok")
        file.push(data)
        
    }
    getData()
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
                        price={washes.servicePrice}
                        clientName={washes.clientName}
                        />
                )}
            </div>
        )
    }   
}



export default Payments