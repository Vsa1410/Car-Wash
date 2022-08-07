import React, { useState } from "react";
import './index.css'
import Payments from "../payments";
import AddNew from "../addNew";
import { Link } from "react-router-dom";

export const url = "http://192.168.2.104:3000"
function Home() {
    
   
    return(
        <div className="home">
            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Bem vindo</h3>
            
            <div style={{display: "flex",
                          justifyContent:"space-evenly"}}>


            <Link to="/new" style={{textDecoration: "none"}}>
                <div className="addNew" style={{
                    width:"150px",
                    height:"150px",
                    background: "rgb(9,186,195)",
                    background: "linear-gradient(27deg, rgba(9,186,195,1) 0%, rgba(86,87,87,1) 59%, rgba(0,0,62,1) 100%)",
                    color:"white",
                    borderRadius:"12px",
                    margin: "10%",                   

                }}>
                    <span class="material-symbols-outlined" style={{color:"white"}}>
                    add
                    </span>
                    <h4 style={{marginLeft:"10px", textDecoration: "none"}}>Adicionar Nova Lavagem</h4>
                </div>
            
            </Link>

            <Link to="/payments" style={{textDecoration: "none"}}>
                <div style={{
                    width:"150px",
                    height:"150px",                    
                    background: " rgb(9,186,195)",
                    background: "linear-gradient(27deg, rgba(9,186,195,1) 0%, rgba(58,155,156,1) 59%, rgba(18,18,186,1) 100%)",
                    color:"white",
                    borderRadius:"12px",
                    margin: "10%",                   

                }}>
                    <span class="material-symbols-outlined" style={{color:"white"}}>
                    payments
                    </span>
                    <h4 style={{marginLeft:"10px", textDecoration: "none"}}>Ultimas Lavagens</h4>
                </div>
            
            </Link>
           
            </div>
        </div>
    )
}
export default Home