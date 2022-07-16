import React, { Fragment } from "react";



function Data(props) {
    return(
        <Fragment>


        <div className="home" style={{margin: "10px 0 0 0"}}>
            
            <div className="lastService" style={{display:"flex", justifyContent:"space-around"}}>
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

            </div>

        </div>
        </Fragment>
    )
}
export default Data 