import React, { useState, useEffect } from "react";
import UserData from "./data";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import AddNewUser from "../addNewUser";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";








function Saldo(){
    
    async function getData(){
        let response = await fetch ('http://localhost:3001/receiveusers')
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
                <h1 style={{margin: "100px 5% 0 6%", fontSize:"30px", color:"black"}}></h1>           
                </div> 
                <h3 style={{margin: "20px 5% 0 6%",  color:"#565757"}}>Nenhum lançamento encontrado</h3>
                <Link to={"/addnewuser"}>
                    <Fab color="primary" style={{position:"absolute", right:"50px", bottom:"100px"}} aria-label="add" Linkto="addnewuser">
                        <AddIcon />
                    </Fab>
                    </Link>
            </div>
        )
    }else{

        return(
            <div>
                <div>
                <h1 style={{margin: "100px 5% 0 6%", fontSize:"30px", color:"black"}}>Cadastros</h1>           
                </div>  
                
                {file.map((washes, index) => 
    
                <UserData key={index}
                        name={washes.name}
                        value={washes.value}
                        washId={washes._id}
                        />
                )}

                <div style={{height:"150px"}}>

                </div>
                <div style={{position:"absolute", right:"50px", bottom:"100px"}}>
                    <Link to={"/addnewuser"}>
                    <Fab color="primary" aria-label="add" Linkto="addnewuser">
                        <AddIcon />
                    </Fab>
                    </Link>
                    
                </div>
            </div>
        )
    }   
}



export default Saldo
