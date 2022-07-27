import React from "react";
import { Fragment,useState } from "react";
import axios from "axios";

const baseURL = "https://car-wash-back.herokuapp.com/add"


function Form(props){
    
    const initialState = {
        name:'',
        date:'',
        clientName:'',
        price:'',
        paid:''
    
    }
    const [sent, setSent] = useState()
    const [bttPH, setbttPH] = useState("Enviar")
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = (event) => setFields ({
        ...fields,
        [event.currentTarget.name]: event.currentTarget.value
        });

    const handleSubmit = event => {
        setbttPH("Enviado")
        
        setSent("Item adiciondado com sucesso!")
        /* As duas linhas devem ser enviadas depois para outra função
        que fará a conferencia se os item foram salvos ou não 
        no Backend*/    
        event.preventDefault()
        
        axios
        .post(baseURL,{
            name: fields.name,
            date: fields.date,
            clientName:fields.clientName,
            servicePrice:fields.price,
            servicePaid: fields.paid
        })
        .then((response)=>{
            console.log("enviado")
        })
        
        setFields(initialState)
        
        
        
        
        
    }
    
    
    return(
        <Fragment>
            
        <div className="home" style={{marginBottom: "30%"}}>

        


            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Nova lavagem</h3>

            <form onSubmit={handleSubmit}>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do lavador*</p>
            <input type={"text"} className="input-itens" name="name" value={fields.name} onChange={handleFieldsChange}  required/>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Data*</p>
            <input type={"date"} className="input-itens" name="date" value={fields.date} onChange={handleFieldsChange}  required/>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do Cliente*</p>
            <input type={"text"} className="input-itens" name="clientName"value={fields.clientName} onChange={handleFieldsChange}  required/>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Valor do Serviço*</p>
            <input type={"number"} className="input-itens" name="price"value={fields.value} onChange={handleFieldsChange}  required/>

            <br></br>
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Já foi pago?</p>
            <br></br>
            <label style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Sim</label>
            <input type="radio" id="yes" name="paid" value={fields.paid = "yes"} onChange={handleFieldsChange}></input>
            <label style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Não</label>
            <input type="radio" id="no" name="paid" value={fields.paid = "no"} onChange={handleFieldsChange}></input>

            <br></br>
            <button type="submit" style={{margin: "20px  0  0 6%", backgroundColor:"blue", color:"white", borderRadius:"12px", width:"100px", height:"40px", fontSize:"larger",  fontWeight:"bold", borderColor:"blue"}}>{bttPH}</button>
            </form>
            <div style={{ height: "30px", color:"#0a3e00", }}>
    
            <h4>{sent}</h4>
            </div>
            
        </div>
        </Fragment>
    )
}
export default Form