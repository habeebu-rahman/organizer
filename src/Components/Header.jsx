import {NavLink} from 'react-router'
import { ToogleButton } from './ToogleButton'
import './Header.css'

export const MainHeader = ()=>{
    return(
        <nav className="navbar row  fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"><span className="logo text-blue-300"><span className="logo-left text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-sky-50">Study</span> Planner</span></NavLink>
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsediv">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse custom-navbar-links" id="collapsediv">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/AboutUs" className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to="/UserDash" className="nav-link">Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink to="/SignIn" className="nav-link">Sign-in</NavLink></li>
                    </ul>
                </div>
                <ToogleButton />
            </div>
        </nav>
    )
}