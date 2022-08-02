import * as React from "react";
import { Fragment,useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from 'react-dom';




function NewUserForm(props){
    
    const initialState = {
        name:'',
        value:''
    
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
        const baseURL = "https://car-wash-back.herokuapp.com/addnewuser"
        axios
        .post(baseURL,{
            userName: fields.name,
            value: fields.value
        })
        .then((response)=>{
            console.log("enviado")
        })
        
        setFields(initialState)
        
        
        
        
        
    }
    
    
    return(
        <Fragment>
            
        <div className="home" style={{marginBottom: "30%"}}>

        


            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Novo Lavador</h3>

            <form onSubmit={handleSubmit}>
                    <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do lavador*</p>
                   
                    <TextField  style={{margin:"20px 0 10px 6%"}} id="outlined-basic" type={"text"} label="Nome" name={"name"} value={fields.name} variant="outlined" defaultValue={0}  onChange={handleFieldsChange} required/>
                    <TextField  style={{margin:"20px 0 10px 6%"}} id="outlined-basic" type={"number"} label="Saldo" name={"value"} value={fields.value} variant="outlined" defaultValue={0}  onChange={handleFieldsChange} required/>
                
            

            <br></br>
            

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
export default NewUserForm