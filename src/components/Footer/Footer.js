import Bottom from "./Bottom";
export default function Footer({posterURL, title, hourweek, hname}){
    console.log(posterURL, title, hourweek, hname)
    return( 
<div className="footer">
    <img src={posterURL} alt=""/>
    <div className="texts">
        <h2>{title}</h2>
    {hourweek === undefined || hname ===undefined ? null :(
        <h2>{hourweek}-{hname}</h2>
    )
      }
      </div> 
</div>
    );
}