import './SignUp.css'
import { MainHeader } from '../../Components/Header'
import { MainFooter } from '../../Components/Footer'
import { Link, useNavigate} from 'react-router'
import { useState } from 'react'
import Swal from "sweetalert2";

export const SignUp = ()=>{

    const [datas, setDatas] = useState({
        name:'',
        email:'',
        phone:'',
        gender:null,
        age:null,
        password:'',
        confirmPassword:''
    })
    const [errorMsg,setErrorMsg] = useState('')
    const[isSuccess,setIsSuccess] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!datas.name || !datas.email || !datas.phone || !datas.gender || !datas.age || !datas.password){
            setErrorMsg('please fill the all fields')
            return
        }
        if(datas.name.length<3){
            setErrorMsg('Name must have at least 3 characters')
            return
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(!emailPattern.test(datas.email)){
            setErrorMsg('Enter a valid email address')
            return
        }
        const phonePattern = /^[0-9]{10}$/;
        if(!phonePattern.test(datas.phone)){
            setErrorMsg('Phone number must have 10 digits')
            return
        }
        if (datas.age < 8 || datas.age > 80){
            setErrorMsg('Age must be between 8 and 80')
            return
        }
        if (datas.password.length < 8){
            setErrorMsg('Password must be at least 8 characters')
            return
        }
        if(datas.confirmPassword !== datas.password){
            setErrorMsg("Password are didn't match")
            return
        }

        const users = JSON.parse(localStorage.getItem('users')) || []

        if (users.find(user=>user.email===datas.email)){
            setErrorMsg('This email is already exist')
            return
        }
        // users.push(datas)
        // localStorage.setItem('users',JSON.stringify(users))
        setIsSuccess(true)
        setErrorMsg('Registration successfully completed')

        Swal.fire({
            title: 'Registration completed',
            text: 'Your registration is successfully completed, we are stored the data into the database',
            icon: 'success'
        })
        setTimeout(() => {navigate('/SignIn')},2000);


    }

    return(
        <>
        <MainHeader />
        <section className="signup row navbar-expand-xl">
            <div id="container" className=" custom-form">
                <form action=""  id="form" onSubmit={handleSubmit}>

                    <label for="username">Full Name : </label><br/>
                    <input type="text" name="name" onChange={handleChange}/><br/>

                    <label for="email">Email : </label><br/>
                    <input type="email" name="email" onChange={handleChange}/><br/>

                    <label for="phone">Phone Number : </label><br/>
                    <input type="text" name="phone" onChange={handleChange}/><br/>

                    <label for="gender">Gender : </label><br/>
                    <input type="radio" name="gender" value="Male" onChange={handleChange}/>Male
                    <input type="radio" name="gender" value="Female" onChange={handleChange}/>Female <br/>

                    <label for="age">Age : </label><br/>
                    <input type="number" name="age" onChange={handleChange}/><br/>

                    <label for="password">Password : </label><br/>
                    <input type="password" name="password" onChange={handleChange}/><br/>

                    <label for="confirm_password">Confirm Password : </label><br/>
                    <input type="password" name="confirmPassword" onChange={handleChange}/><br/><br/>
                    <span className={isSuccess?'success':"error"}>{errorMsg}</span><br/>

                    <button type="reset" className="btn btn-form">clear</button>
                    <button type="submit" className="btn btn-form">Sign Up</button>
                    <br/>
                    <p className="mt-5">Do you have an account already then <Link className="non "  to='/SignIn'><u>Log-In</u></Link>.</p>
                </form>
            </div>


            <div id="container collapsediv" className="collapse navbar-collapse custom-form2">
                <div>
                    <img src="/src/assets/giphy_gif (800×600).gif" className="focusing" alt="" />
                    <h1 className="image-title text-2xl text-light mt-5">Are You Ready To Work Like A Professional</h1>
                </div>
                
            </div>
        </section>
        <MainFooter />
        </>
    )
}