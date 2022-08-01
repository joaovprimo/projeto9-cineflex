import "./style.css";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalMovies from "../GlobalMovies/GlobalMovies";
import Head from "../Head/Head";
import ChooseHour from "../ChooseHour/ChooseHour"
import ChooseSeat from "../ChooseSeat/ChooseSeat"
import Sucess from "../Sucess/Sucess"

export default function App() {
    const [objmovie, setObjmovie] = useState({});

    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<GlobalMovies />} />
                <Route path="/sessoes/:Id" element={<ChooseHour />} />
                <Route path="/assentos/:idSessao" element={<ChooseSeat objmovie={objmovie} setObjmovie={setObjmovie} />} />
                <Route path="/sucesso" element={<Sucess objmovie={objmovie} setObjmovie={setObjmovie} />} />
            </Routes>

        </BrowserRouter>)


}