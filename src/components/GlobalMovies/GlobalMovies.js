import "./style.css"
import {useState, useEffect} from 'react';
import axios from "axios";

export default function GlobalMovies(){
const [movies, setMovies] = useState ([]);

useEffect(()=>  {
const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
promise.then((request) =>{
    setMovies(request.data)
});
}, []);
return (

<div className="container">
<h2>Selecione o Filme</h2>    
<div className="playing">
{movies.map(movie => <img key={movie.id} src={movie.posterURL} alt="" /> )}
</div>
</div>

)

}