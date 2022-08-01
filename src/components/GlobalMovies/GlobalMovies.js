import "./style.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import ChooseHour from "../ChooseHour/ChooseHour";
import Bottom from "../Footer/Bottom"

export default function GlobalMovies({ChooseHr, objmovie}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((request) => {
            setMovies(request.data)
        });
    }, []);

    

    return (
<>
        <div className="container">
            <h2>Selecione o Filme</h2>
            <div className="playing">

                {movies.map(movie => <div key={movie.id} className="movie">
                    <Link to={`/sessoes/${movie.id}`}>
                        <img key={movie.id} src={movie.posterURL} alt="" onClick={()=>{bottom(movie.title, movie.posterURL)}}/>
                    </Link>
                </div>)}

            </div>
        </div>
       
</>
    )

}

function bottom({movietitle, posterURL}){
return(
    <Footer movietitle={movietitle}posterURL={posterURL}/>
)

}
