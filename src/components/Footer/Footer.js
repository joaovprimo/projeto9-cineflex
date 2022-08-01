import Bottom from "./Bottom";
export default function Footer({posterURL, movietitle, hourweek, hname}){
    console.log(posterURL, movietitle, hourweek, hname)
    return( 
<div className="footer">
    <img src={posterURL} alt=""/>
    <div className="texts">
        <h2>{movietitle}</h2>
        <h2>{hourweek}-{hname}</h2>
    </div>
</div>
    );
}