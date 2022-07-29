import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalMovies from "../GlobalMovies/GlobalMovies";
import Head from "../Head/Head";

export default function App (){
return(
<BrowserRouter>    
<Head/>
<Routes>
<Route path="/" element={<GlobalMovies/>}/>
</Routes>
</BrowserRouter>
);

}