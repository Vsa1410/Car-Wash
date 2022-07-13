import React from "react";
import "./index.css"

function AddNew(){
    return(
        <div className="home">
            <h3 style={{margin: "0 5% 10% 6%", fontSize:"30px"}}>Nova lavagem</h3>
            <form>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do lavador</p>
            <input type={"text"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Data</p>
            <input type={"date"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do Cliente</p>
            <input type={"text"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Valor do Serviço</p>
            <input type={"number"} className="input-itens"></input>

            </form>
        </div>
    )
}
    
export default AddNew