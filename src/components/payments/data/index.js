import React, { Fragment } from "react";
import "./index.css"
import axios from "axios";

const baseURL = "https://car-wash-back.herokuapp.com/delete"





function Data(props) {
    async function deletePayment(payment){
       try{ 
        await axios.delete(baseURL, payment );
        
    }
    catch(err){
        console.error(err);
    }
    }
    return(
        <Fragment>


        <div className="home" style={{margin: "10px 0 0 0", }}>
            
            <div style={{display:"flex", justifyContent:"space-around", borderColor: "#D9DDFB",borderRadius: "12px", borderWidth:"7px", backgroundColor:"#D9DDFB", borderStyle:"solid", margin:"10px 10% 10px 10%"}}>
                <div className="lastService1">
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Responsável pela Lavagem</p>
                    <h3 style={{margin:"0"}}>{props.name}</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Data</p>
                    <h4 style={{margin:0}}>{props.date}</h4>
                </div>
                <div>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Valor</p>
                    <h3 style={{margin:"0"}}>{props.price}</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Cliente</p>
                    <h5 style={{margin:0}}>{props.clientName}</h5>

                </div>           
                <div style={{display: "flex", alignContent: "center", cursor:"pointer"}}>
                <button class="material-symbols-outlined" onClick={() => deletePayment(props.washId)}>
                delete
                </button>
                </div>
            </div>

        </div>
        </Fragment>
    )
}
export default Data 