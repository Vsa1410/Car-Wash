import React from "react";
import './index.css'
import Home from "../home";
import { Link } from "react-router-dom";

function Footer (){
    return(
        <div className="footer">
            <Link to={"/"}>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}>
            home
            </span>
            </Link>

            <Link to={"/payments"}>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}>
            payments
            </span>
            </Link>

            <Link to={"/new"}>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}>
            add
            </span>
            </Link>


            <span class="material-symbols-outlined" style={{cursor:"pointer"}}>
            done
            </span>
            <span class="material-symbols-outlined" style={{cursor:"pointer"}}>
            person
            </span>




        </div>
    )
}
export default Footer