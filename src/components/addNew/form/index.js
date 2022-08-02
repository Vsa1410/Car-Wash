import * as React from "react";
import { Fragment,useState,useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DEFAULT_MODE_STORAGE_KEY } from "@mui/system/cssVars/getInitColorSchemeScript";






function Form(props){
    const[ file, setFile] = useState([])
    async function getData(){
        let response = await fetch ('https://car-wash-back.herokuapp.com/receiveusers')
        let data = await response.json()
        

        setFile(data)
        console.log(file)
        
    }
    useEffect(()=>{

        getData()
    },[])
    
    
    
    
    
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
    const [key,setKey] = useState('')
    const handleChange = (event) => {
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('value');
        
           setKey(index) 
        
        setName(optionElementId)
        console.log(names);
        
    }
    const [names2, setName2]= useState("")
    const [key2,setKey2] = useState('')
    const handleChange2 = (event) => {
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const optionElementId = optionElement.getAttribute('value');
        
           setKey2(index) 
        
        setName2(optionElementId)
        console.log(names2);
        
    }
    
    
    
    
    const handleSubmit = event => {
        
        
        event.preventDefault()
        
        /* As duas linhas devem ser enviadas depois para outra função
        que fará a conferencia se os item foram salvos ou não 
        no Backend*/  
        
        /*This is the payment value, this change the value and sendo to the patch
        and the patch send to the server side */

        let newValue = Number(fields.price)*0.8/2       //20% of the value is for maintenance
        let realNumber = Number(file[key].value)        //this transform the old value string to number
        let realValue= newValue+realNumber              //Old Value plus new value
        let numberKey = Number(key)                     //change the index String to Number to be used to find the index of array
        
        let realNumber2 = Number(file[key2].value)        //this transform the old value string to number
        let realValue2= newValue+realNumber2     
        let numberKey2 = Number(key2)                    //change the index String to Number to be used to find the index of array of second person
        
        console.log(file)
        
        const baseURL = "https://car-wash-back.herokuapp.com/add"     //add new service to the server
        axios
        .post(baseURL,{
            serviceName: names,
            serviceName2:names2,
            date: fields.date,
            clientName:fields.clientName,
            servicePrice:fields.price,
            servicePaid: fields.paid
        })
        .then((response)=>{
            console.log("enviado")
            setSent("Item adiciondado com sucesso!")
            setbttPH("Enviado")
            console.log(response)
        })
        .catch((err) =>{
            setSent("Item ainda não adicionado")
            console.log(err)
        })
        axios
        //The link is catch by servcerside and change the old value to the new value

            .patch(`https://car-wash-back.herokuapp.com/${file[numberKey]._id}`,{
                value: realValue
                
            })
            .then(console.log("Valor alterado com sucesso para: " + realValue)) 
            .catch((err)=> console.log(err))
         axios
        //The link is catch by servcerside and change the old value to the new value in second person

            .patch(`https://car-wash-back.herokuapp.com/user2/${file[numberKey2]._id}`,{
                value: realValue
                
            })
            .then(console.log("Valor 2 alterado com sucesso para: " + realValue)) 
            .catch((err)=> console.log(err))   
            
            
        setFields(initialState)
        
        
        
        
        
    }
    return(
        <Fragment>
            
        <div className="home" style={{marginBottom: "30%"}}>

        


            <h3 style={{margin: "0 5% 30px 6%", fontSize:"30px"}}>Nova lavagem</h3>

            <form onSubmit={handleSubmit}>


            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "0  0  20px 6%"}}>Responsável pelo Serviço*</p>

            <div>
                <select onChange={handleChange} name="name" id="fruit-select" style={{margin:"0 0 0 6%"}}>
                    {file.map((option, index) => (
                    <option key={index} value={option._id}>
                        {option.userName}

                        
                    </option>
                    ))}
                </select>
                <select onChange={handleChange2} name="name2" id="fruit-select" style={{margin:"0 0 0 6%"}}>
                    {file.map((option, index) => (
                    <option key={index} value={option._id}>
                        {option.userName}

                        
                    </option>
                    ))}
                </select>
            </div>

            
            <p style={{color: "rgb(54, 3, 13)", fontSize: "15px",margin: "20px  0  0 6%"}}>Data*</p>
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