import "./style.css"
import { useState, useEffect } from "react";
import {useParams,Link } from "react-router-dom";
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
            <Seats seatID={seatID} setSeatID={setSeatID} seatName={seatName} setSeatName={setSeatName} seats={seats}
        />    
        <Dataform seatID={seatID}/>
        </div>
    )
       
}

function Dataform({seatID}){
const [name, setName] = useState("");
const [cpf, setCpf]= useState("");
const navigate = useNavigate();
console.log(name,cpf);
function dados () {
    const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
        ids: seatID,
        name: name,
        cpf: cpf
    });}

    //Parei na requisicao do navigate para enviar as informações para sucesso// faltou também fazer o fundo, a tela de sucesso e ajeitar o css das páginas
    //requisicao.then(()=>{ navigate("/sucesso"), { }  })

    return(
<>
<form onSubmit={dados}>
    <label for="name">Nome do comprador:</label>
    <input type="text" id="name" placeholder="Digite seu nome..." value={name} onChange={e=> setName(e.target.value)}/>
    <label for="cpf">CPF:</label>
    <input type="text" id="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={e=> setCpf(e.target.value)}/>
    <Link to={`/sucesso`}>
    <button type="submit">Reservar assento(s)</button>
    </Link>
</form>
</>
    )
}
