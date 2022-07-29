import * as React from 'react';
import  { Fragment } from "react";
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import { width } from '@mui/system';

const axios = require('axios')











function UserData(props) {
    async function deletePayment(payment){
        const baseURL = `https://car-wash-back.herokuapp.com/deleteuser/${payment}`
        
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
        <Fragment>


        <div className="home" style={{margin: "10px 0 0 0", }}>
            
            <div style={{display:"flex", justifyContent:"space-around", borderColor: "#D9DDFB",borderRadius: "12px", borderWidth:"7px", backgroundColor:"#D9DDFB", borderStyle:"solid", margin:"10px 10% 10px 10%"}}>
                <div className="lastService1" style={{display:"flex", justifyContent:"space-around", width:"70%"}}>
                    <div>

                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Nome Lavador</p>
                    <h3 style={{margin:"0"}}>{props.name}</h3>
                    </div>

                    <div>

                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Saldo</p>
                    <h3 style={{margin:"0"}}>{`R$ ${props.value}`}</h3>
                    </div>
                </div>           
                <div style={{display: "flex", alignContent: "center", cursor:"pointer"}}>
                <Button variant="contained"  onClick={() => deletePayment(props.washId)}>
                Delete
                </Button>
                </div>
            </div>

        </div>
        </Fragment>
    )
}
export default UserData 