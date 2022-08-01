import "./style.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Seats from "./Seats"
import Footer from "../Footer/Footer";


export default function ChooseSeat({ objmovie, setObjmovie }) {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    const [seatID, setSeatID] = useState([]);
    const [seatName, setSeatName] = useState([]);
    const [infoMovies, setInfoMovies] = useState({});
    const [infMovies, setInfMovies] = useState({});
    const [title, setTitle] = useState({});

    useEffect(
        () => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`);

            promise.then(seat => {
                setSeats(seat.data.seats)
                setInfoMovies(seat.data);
                setInfMovies(seat.data.day);
                setTitle(seat.data.movie);
            })
        }

        , []
    )

    return (
        <div>
            <div className="container">
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <Seats seatID={seatID} setSeatID={setSeatID} seatName={seatName} setSeatName={setSeatName} seats={seats}
            />
            <Dataform seatName={seatName} objmovie={objmovie} setObjmovie={setObjmovie} seatID={seatID} title={title.title} posterURL={title.posterURL} date={infMovies.date} hname={infoMovies.name} />
            <Footer title={title.title} posterURL={title.posterURL} hourweek={infMovies.weekday} hname={infoMovies.name} />
        </div>

    )

}

function Dataform({ seatID, title, posterURL, date, hname, setObjmovie, seatName }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function dados(event) {

        event.preventDefault();
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: seatID,
            name: name,
            cpf: cpf
        });
        setObjmovie({
            name,
            cpf,
            title,
            posterURL,
            date,
            hname,
            seatName,
        })

        requisicao.then(() => {
            navigate("/sucesso")
        })
    }


    return (
        <>
            <form onSubmit={dados}>
                <label for="name">Nome do comprador:</label>
                <input type="text" id="name" placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} required />
                <label for="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} required />
                <div className="but">
                    <button type="submit">Reservar assento(s)</button>
                </div>
            </form>
        </>
    )
}
