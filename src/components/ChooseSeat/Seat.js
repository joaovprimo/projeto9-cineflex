import "./style.css"
import { useState, useEffect } from "react";

export default function Seat({choseid, chosename ,choseavb, seatID, setSeatID, seatName, setSeatName}){
    const [status, setStatus] = useState ("disponivel");

    useEffect(()=>{
        if(choseavb === false){
            setStatus("indisponivel");
    } }, []);   
    
return (
    <div className= {`seat ${status}`} onClick={()=> makeselect({choseid, chosename,choseavb, status, setStatus,seatID, setSeatID, seatName, setSeatName}) }>  {chosename} </div>
)

}

function makeselect({choseid, chosename, choseavb, status, setStatus, seatID, setSeatID, seatName, setSeatName}){
    
if(choseavb === true){
    if(status==="selecionado"){
setStatus("disponivel");
setSeatName(seatName.filter(seat=> seat!==chosename));
setSeatID(seatID.filter(seat=> seat!==choseid));
    }else{
        setStatus("selecionado");
        setSeatName([...seatName,chosename]);
        setSeatID([...seatID, choseid]);
    }
} else{
alert("Esse assento não está disponível")
}}
