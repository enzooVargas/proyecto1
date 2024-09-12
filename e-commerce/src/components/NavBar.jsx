/* eslint-disable no-unused-vars */
import CartWidget from "./CartWidget"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div>
            <nav className="nav">
                <div className="titulo">
                    <h1>Urban Pulse</h1>
                </div>
                <ul className="menu">
                    <li>
                        <button>Hombres</button>
                    </li>
                    <li>
                        <button>Mujeres</button>
                    </li>
                    <li>
                        <button>Niños</button>
                    </li>
                    <li>
                        <button>Accesorios</button>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}