import "./style.css";
export default function Footer({ posterURL, title, hourweek, hname }) {

    return (
        <div className="footer">
            <div className="film">
                <img src={posterURL} alt="" />
            </div>
            <div className="texts">
                <p>{title}</p>
                {hourweek === undefined || hname === undefined ? null : (
                    <p>{hourweek}-{hname}</p>
                )
                }
            </div>
        </div>
    );
}