import "./style.css"
import Seat from "./Seat"
import Footer from "../Footer/Footer";
export default function Seats( {seats, seatID, setSeatID, seatName, setSeatName} ){
    console.log(seats);
    return(
    <>
    <div className="seats">
                {seats.map((chose)=><Seat choseid={chose.id} chosename={chose.name} choseavb={chose.isAvailable} 
                seatID={seatID} setSeatID={setSeatID} seatName={seatName} setSeatName={setSeatName}  
                /> )}
                </div>
    
                <div className="types">
            <div className="type">
                <div className="seat selecionado"></div>
                <h3>Selecionado</h3>
                </div>
                <div className="type">
                <div className="seat disponivel">  </div>
                <h3>Disponível</h3>
                </div>
                <div className="type">
                <div className="seat indisponivel">  </div>
                <h3>Indisponível</h3>
                </div>
            </div>
    </>
    )
    }