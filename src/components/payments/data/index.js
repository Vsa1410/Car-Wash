
import * as React from "react"
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import "./index.css"
const axios = require('axios')




    function Data(props){

        async function deletePayment(payment){
            const baseURL = `https://car-wash-back.herokuapp.com/${payment}`
            
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
                        
            <div style={{display:"flex", justifyContent:"space-around", borderColor: "#D9DDFB",borderRadius: "12px", borderWidth:"7px", backgroundColor:"#D9DDFB", borderStyle:"solid", margin:"10px 2% 10px 5%"}}>
                <div className="lastService1">
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Responsável pela Lavagem</p>
                    <h4 style={{margin:"0"}}>{props.userName}</h4>
                    <h4 style={{margin:"0"}}>{props.userName2}</h4>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Data</p>
                    <h5 style={{margin:0}}>{props.date}</h5>
                </div>
                <div>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Valor</p>
                    <h3 style={{margin:"0"}}>{props.value}</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Cliente</p>
                    <h4 style={{margin:0}}>{props.clientName}</h4>

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
               