import Footer from "../Footer/Footer";
export default function Bottom({posterURL, title, hourweek, hname}){
    console.log(posterURL, title, hourweek, hname)
 return(
<Footer hourweek={hourweek} hname= {hname}  title={title} posterURL={posterURL}/>
 )
}