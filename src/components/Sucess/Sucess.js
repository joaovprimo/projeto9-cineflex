import "./style.css"
import { Link } from "react-router-dom";

export default function Sucess({ objmovie }) {

    return (
        <>
            <div className="container">
                <div className="sucesso">
                    <h2>Pedido feito com sucesso!</h2>
                </div>
            </div>
            <div className="sucess">
                <div className="info">
                    <h1>Filme e sessão</h1>
                    <p>{objmovie.title}</p>
                    <p>{objmovie.date} {objmovie.hname}</p>
                </div>
                <div className="info">
                    <h1>Ingressos</h1>
                    {objmovie.seatName.map((seat) => (<p>Assento {seat} </p>))}
                </div>
                <div className="info">
                    <h1>Comprador</h1>
                    <p>Nome: {objmovie.name}</p>
                    <p>CPF: {objmovie.cpf}</p>
                </div>
            </div>
            <div className="but">
                <button>
                    <Link to={`/`}>
                        Voltar para Home
                    </Link>
                </button>
            </div>
        </>
    )
}

