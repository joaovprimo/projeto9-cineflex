import "./style.css"
import { useState, useEffect } from "react";

export default function Seat({choseid, chosename ,choseavb, seatsID, setSeatsID, seatsName, setSeatsName}){
    const [status, setStatus] = useState ("disponivel");

    useEffect(()=>{
        if(choseavb === false){
            setStatus("indisponivel");
    } }, []);   
    
return (
    <div className= {`seat ${status}`} onClick={()=> makeselect({choseavb, status, setStatus}) }>  {chosename} </div>
)

}

function makeselect({choseavb, status, setStatus}){
    console.log(choseavb);
if(choseavb === true){
    if(status==="selecionado"){
setStatus("disponivel")
    }else{
        setStatus("selecionado")
    }
} else{
alert("Esse assento não está disponível")
}}
