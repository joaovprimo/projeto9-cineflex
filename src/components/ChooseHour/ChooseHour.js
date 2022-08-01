import "./style.css"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Bottom from "../Footer/Bottom"


export default function ChooseHour ({objmovie,ChooseHr}){
    
    const [hours,setHours] = useState([]);
    const [info, setInfo]= useState({})
        const params = useParams();
    console.log(params.Id);
    
    
    useEffect( () => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.Id}/showtimes`);

        promise.then(hrs=>{
        setHours(hrs.data.days)
        setInfo(hrs.data)
        })
    }
    
    , []);

    
    return(
        <>
        <div className="container">
            <h2>Selecione o horário</h2>
            <div className="hours">
                {hours.map(hour=> (
                <div className="date">
                <h3> {hour.weekday} - {hour.date}</h3>
                <div className="section">
                    
                   {hour.showtimes.map((h)=>(<div className="hour">
                    <Link to={`/assentos/${h.id}`}>
                   {h.name}</Link>
                     </div>))} 
                     
                    </div>
                    </div>))}   
            </div>
            </div>
            <Footer posterURL={info.posterURL} title={info.title} />
            </>
    )
    

}

