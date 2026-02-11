import { Link, useNavigate } from "react-router"
import { MainHeader } from "../../Components/Header"
import { MainFooter } from "../../Components/Footer"
import './SignIn.css'
import { useState } from "react"
import { useDispatch} from "react-redux";
import { logedIn } from "../../Functions/Logedin"

export const SignIn = ()=>{
    const [datas, setDatas] = useState({
            email:'',
            password:'',
            confirmPassword:''
        })
    const [errorMsg,setErrorMsg] = useState('')
    const[isSuccess,setIsSuccess] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }

    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user=>user.email === datas.email)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!datas.email || !datas.password || !datas.confirmPassword){
            setErrorMsg('please fill the all fields')
            return
        }
        if(!user){
            setErrorMsg('This email account is not exist')
            return
        }
        if(datas.password !== datas.confirmPassword){
            setErrorMsg('Passwords are not match')
            return
        }
        if(datas.confirmPassword !== user.confirmPassword){
            setErrorMsg('Incorrect password')
            return
        }
        setIsSuccess(true)
        localStorage.setItem('currentUser',JSON.stringify(user));
        setErrorMsg('Login is successfully completed')
        dispatch(logedIn())
        setTimeout(()=>{navigate('/userDash')},1000)
    }

    return(
        <>
        <MainHeader />
        <section className="signup row navbar-expand-xl">

            <div id="container collapsediv" className="collapse navbar-collapse custom-form2">
                <div>
                    <img src="/src/assets/download (1).gif" className="focusing" alt="" />
                    <h1 className="image-title text-2xl text-light mt-5">Are You Crazy About The Work Load, Make It Easy</h1>
                </div>
                
            </div>

            <div id="container" className="custom-form signin-form" >
            <form action=""  id="form" onSubmit={handleSubmit}>

                <label for="email">Email : </label><br />
                <input type="email" name="email" onChange={handleChange}/><br />

                <label for="password">Password : </label><br />
                <input type="password" name="password" onChange={handleChange}/><br />

                <label for="confirm_password">Confirm Password : </label><br />
                <input type="password" name="confirmPassword" onChange={handleChange}/><br /><br />
                <span className={isSuccess?'success':'error'}>{errorMsg}</span><br />

                <button type="reset" className="btn btn-form">clear</button>
                <button type="submit" className="btn btn-form">Sign In</button>
                <br />
                <p className="mt-5">You don't have an account, Creat new account <Link className="non " to='/SignUp'><u>Sign Up</u></Link>.</p>
            </form>
            </div>
        </section>
        <MainFooter />
        </>
    )
}