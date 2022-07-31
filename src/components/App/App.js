import "./style.css";
import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalMovies from "../GlobalMovies/GlobalMovies";
import Head from "../Head/Head";
import ChooseHour from "../ChooseHour/ChooseHour"
import ChooseSeat from "../ChooseSeat/ChooseSeat"
import Footer from "../Footer/Footer";

export default function App (){
    const [objmovie, setObjmovie] = useState([]);
    console.log(objmovie);

    function ChooseHr(inf){
        console.log(inf)
    setObjmovie({...objmovie, inf})
    }
    if(objmovie.length!==0){
        return(
<BrowserRouter>    
<Head/>
<Routes>
<Route path="/" element={<GlobalMovies ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>
<Route path="/sessoes/:Id" element={<ChooseHour ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie} />}/>
<Route path="/assentos/:idSessao" element={<ChooseSeat ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>

</Routes>
<Footer>
    
        </Footer>
</BrowserRouter>)
    }else{
        return(
            <BrowserRouter>    
<Head/>
<Routes>
<Route path="/" element={<GlobalMovies ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>
<Route path="/sessoes/:Id" element={<ChooseHour ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie} />}/>
<Route path="/assentos/:idSessao" element={<ChooseSeat ChooseHr={ChooseHr} objmovie={objmovie} setObjmovie={setObjmovie}/>}/>

</Routes>
</BrowserRouter>);

    }


}