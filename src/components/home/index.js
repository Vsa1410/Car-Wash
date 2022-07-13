import React from "react";
import './index.css'

function Home() {
    return(
        <div className="home">
            <h3 style={{margin: "0 5% 10% 6%", fontSize:"30px"}}>Ultimas Lavagens</h3>
            <div className="lastService" style={{display:"flex", justifyContent:"space-around"}}>
                <div className="lastService1">
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Responsável pela Lavagem</p>
                    <h3 style={{margin:"0"}}>Vinicius Alves</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Data</p>
                    <h4 style={{margin:0}}>12/07/2022</h4>
                </div>
                <div>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:0}}>Valor</p>
                    <h3 style={{margin:"0"}}>R$ 20,00</h3>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "10px",margin:"10px 0 0 0"}}>Cliente</p>
                    <h5 style={{margin:0}}>Jefferson</h5>

                </div>           

            </div>

        </div>
    )
}
export default Home