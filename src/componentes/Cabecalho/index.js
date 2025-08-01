import logo from "../../assets/treina_recife_logo.png"

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Treina Recife" width="150"/>
                </a>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Professores</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Cabecalho;