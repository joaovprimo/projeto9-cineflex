import "./style.css";
import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalMovies from "../GlobalMovies/GlobalMovies";
import Head from "../Head/Head";
import ChooseHour from "../ChooseHour/ChooseHour"
import ChooseSeat from "../ChooseSeat/ChooseSeat"
import Footer from "../Footer/Footer";
import Sucess from "../Sucess/Sucess"

export default function App (){
    const [objmovie, setObjmovie] = useState({});

    function ChooseHr({posterURL, title, hour, day }){
    setObjmovie(...objmovie, posterURL, title, hour , day )
    }
    
        return(
<BrowserRouter>    
<Head/>
<Routes>
<Route path="/" element={<GlobalMovies ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>
<Route path="/sessoes/:Id" element={<ChooseHour ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie} />}/>
<Route path="/assentos/:idSessao" element={<ChooseSeat ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>
<Route path="/sucesso" element={<Sucess/>} />
</Routes>

</BrowserRouter>)


}