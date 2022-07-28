import React, { useState, useEffect } from "react";
import Data from "./data";








function Payments(){
    
    async function getData(){
        let response = await fetch ('https://car-wash-back.herokuapp.com/')
        let data = await response.json()
        
       


        let newFiles = []

        let files = newFiles.concat(data)
        files.push(data)
        setFile(files)
        
        
    }





    


    getData()
    const[ filex, setFile] = useState([])
    let file = filex
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
                
                {file.map((washes, index) => 
    
                <Data 
                        key={index}
                        name={washes.name}
                        date={washes.date}
                        price={washes.servicePrice}
                        clientName={washes.clientName}
                        washId={washes._id}
                        />
                )}

                <div style={{height:"150px"}}>

                </div>
            </div>
        )
    }   
}



export default Payments