import { Link } from "react-router"
import { MainHeader } from "../../Components/Header"
import { MainFooter } from "../../Components/Footer"
import './HeroPage.css'

export const HeroPage = ()=>{
    return(
        <>
        <MainHeader />
        <section className="hero">
            <h1 className="reveal text-4xl text-bold leading-tight">Welcome, <span className="logo text-blue-300"><span className="logo-left text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-sky-50">Study</span> Planner</span><br />Make The Best Plan Forever</h1>
            <p className="reveal text-xl">you can make you your study plan with your own we will help you to made it <br /> and its best opportunitie for you don't wast your time and keep the plan and <br /> make your self best. </p>
            <p className="reveal text-xl">are you ready to make a study self we can do our best for you <br /> just make a plan and keep to track the plan that make your self unique and structure. </p>
            <Link className="reveal" to='/SignIn'><button className="mt-5 btn btn0 text-xl">sign In</button></Link>
            <Link className="reveal" to='/SignUp'><button className="mt-5 ml-5 text-xl btn btn0">Sign Up</button></Link>
        </section>
        <MainFooter />
        </>
    )
}