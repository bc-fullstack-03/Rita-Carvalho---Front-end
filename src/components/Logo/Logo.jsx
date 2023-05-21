import logoImg from "./img/logo.png"
import './Logo.css'

export default function Logo(){
    return(
        <div className="container">
            <img src={logoImg} alt="" />
            <h1>Sysmap Parrot</h1>
            <p>Faça o login e comece a usar!</p>
        </div>
    )
}
