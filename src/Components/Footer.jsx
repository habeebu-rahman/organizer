import { NavLink } from "react-router"
import './Footer.css'

export const MainFooter = () =>{
    return(
        <footer className="footer">
        <div className="row mb-4">
            <div className="col-sm-12 col-md-4 logo">
                <span className="logo text-blue-300"><span className="logo-left text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-sky-50">Study</span> Planner</span>
            </div>
            <div className="col-sm-12 col-md-4 leading-loose quick-links">
                <h3 className="text-xl pb-3">Quick links</h3>
                <ul>
                    <li><NavLink to="/" className="non">Home</NavLink></li>
                    <li><NavLink to="/AboutUs" className="non">About Us</NavLink></li>
                    <li><NavLink to="/UserDash" className="non">Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="col-sm-12 col-md-4 leading-loose contact">
                <h3 className="text-xl pb-3">Contacts</h3>
                <ul>
                    <li><NavLink to="mailto:habeeburahman270@gmail.com" className="non">habeeburahman270@gmail.com</NavLink></li>
                    <li><NavLink to="tel:+91 8606166091" className="non">+91 8606 166 091</NavLink></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copy-rights mt-3">&copy; Study Planner. All rights reserved 2025-26</p>
    </footer>
    )
}