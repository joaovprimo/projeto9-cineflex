import "./style.css"
import { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";
import Seats from "./Seats"
import Seat from "./Seat"

export default function ChooseSeat(){
    const params = useParams();
    const [seats,setSeats]= useState([]);
   const [seatID, setSeatID] = useState([]);
   const[seatName, setSeatName] = useState([]);

    useEffect( 
        ()=> {const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

        promise.then(seat=>{
            setSeats(...seats, seat.data.seats)
        })
    }
    
        , []
    )
    {console.log(seats)}

    return(
      <div>
      <div className="container">
            <h2>Selecione o(s) assento(s)</h2>
            </div>
            <Seats seatsID={seatID} setSeatsID={setSeatID} seatsName={seatName} setSeatsName={setSeatName} seats={seats}
        />    
        </div>
    )
       
    

}



