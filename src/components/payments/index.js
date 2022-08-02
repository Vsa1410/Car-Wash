import React, { useState, useEffect } from "react";
import Data from "./data";
const dayjs = require('dayjs')












function Payments(){
    //The data from server is sent to file array and later is used dy map to display information
    const[ file, setFile] = useState([])

    //Download data from server of services
    async function getData(){
        let response = await fetch ('https://car-wash-back.herokuapp.com/')
        let data = await response.json()
        
        
        setFile(data)
       console.log(file)
        
    }
    useEffect(() => {

        getData();
      
      }, []);

    // Call of the function
    
    // If no data, the payments tab, display a message of no data
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
                

                
                {file.map((washes, index) => (
                    //Map to read every item in the list
                    <Data 
                    key={index}
                    userName2={file[index].serviceName2.userName}
                    userName={file[index].serviceName.userName}
                    date={dayjs(washes.date).format('DD/MM/YYYY')}
                    value={`R$ ${washes.servicePrice}`}
                    clientName={washes.clientName}
                    washId={washes._id}

                    />))}
                    
                
                    <div style={{height:"150px"}}>
        
                    </div>
                    </div>
        )
    }}
export default Payments