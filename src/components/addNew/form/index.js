import * as React from "react";
import { Fragment,useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';






function Form(props){

    async function getData(){
        let response = await fetch ('https://car-wash-back.herokuapp.com/receiveusers')
        let data = await response.json()
        
       
    
    
        let newFiles = []
    
        let files = newFiles.concat(data)
        files.push(data)
        setFile(files)
        
        
    }
    
    getData()
    const[ filex, setFile] = useState([])
    let file = filex
    
    
    
    const initialState = {
        
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
    
    const [names, setName]= useState("")
    function handleChange(event) { 
    setName(event.target.value)
    console.log(names)
    
    
    }
    

    
    
    const handleSubmit = event => {
        
        console.log(names)
        
        
        /* As duas linhas devem ser enviadas depois para outra função
        que fará a conferencia se os item foram salvos ou não 
        no Backend*/    
        event.preventDefault()
        const baseURL = "https://car-wash-back.herokuapp.com/add"
        axios
        .post(baseURL,{
            name: names,
            date: fields.date,
            clientName:fields.clientName,
            servicePrice:fields.price,
            servicePaid: fields.paid
        })
        .then((response)=>{
            console.log("enviado")
            setSent("Item adiciondado com sucesso!")
            setbttPH("Enviado")
        })
        .catch((err) =>{
            setSent("Item ainda não adicionado")
        })
        
        setFields(initialState)
        
        
        
        
        
    }
    return(
        <Fragment>
            
        <div className="home" style={{marginBottom: "30%"}}>

        


            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Nova lavagem</h3>

            <form onSubmit={handleSubmit}>


            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  0 6%"}}>Nome do lavador*</p>

            <div>
                <select onChange={handleFieldsChange} name="name" id="fruit-select" style={{margin:"0 0 0 6%"}}>
                    {file.map((option, index) => (
                    <option key={option.id} value={option._id}>
                        {option.name}
                    </option>
                    ))}
                </select>
            </div>

            
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