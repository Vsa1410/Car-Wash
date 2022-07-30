
import * as React from "react"
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import "./index.css"
const axios = require('axios')




    function Data(props){

        async function deletePayment(payment){
            const baseURL = `http://localhost:3001/${payment}`
            
            const requestOptions={
    
                headers: { 
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
            }}
           try{ 
            await axios.delete(baseURL, payment, requestOptions );
            
            
        }
        catch(err){
            console.error(err);
    
    
        }
    }
        return(
            <div className="home" style={{margin: "10px 0 0 0", }}>
                        
            <div style={{display:"flex", justifyContent:"space-around", borderColor: "#D9DDFB",borderRadius: "12px", borderWidth:"7px", backgroundColor:"#D9DDFB", borderStyle:"solid", margin:"10px 10% 10px 10%"}}>
                <div className="lastService1">
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Responsável pela Lavagem</p>
                    <h3 style={{margin:"0"}}>{props.userName}</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Data</p>
                    <h4 style={{margin:0}}>{props.date}</h4>
                </div>
                <div>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Valor</p>
                    <h3 style={{margin:"0"}}>{props.value}</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Cliente</p>
                    <h5 style={{margin:0}}>{props.clientName}</h5>

                </div>           
                <div style={{display: "flex", alignContent: "center", cursor:"pointer"}}>
                <Button variant="contained"  onClick={() => deletePayment(props.washId)}>
                Delete
                </Button>
                </div>
            </div>

        </div>
                )}        
        
export default Data
               