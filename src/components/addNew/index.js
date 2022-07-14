import React from "react";
import "./index.css"

function AddNew(){
    return(
        <div className="home" style={{marginBottom: "30%"}}>
            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Nova lavagem</h3>

            <form>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do lavador</p>
            <input type={"text"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Data</p>
            <input type={"date"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do Cliente</p>
            <input type={"text"} className="input-itens"></input>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Valor do Serviço</p>
            <input type={"number"} className="input-itens"></input>

            <br></br>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Já foi pago?</p>
            <br></br>
            <label style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Sim</label>
            <input type="radio" id="yes" name="paid" value="yes"></input>
            <label style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Não</label>
            <input type="radio" id="no" name="paid" value="no"></input>

            

            </form>
            <button style={{margin: "0  0  0 6%", backgroundColor:"blue", color:"white", borderRadius:"12px", width:"100px", height:"40px", fontSize:"larger",  fontWeight:"bold", borderColor:"blue"}}>Enviar</button>
        </div>
    )
}
    
export default AddNew