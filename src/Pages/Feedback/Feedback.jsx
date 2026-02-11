import './Feedback.css'
import { MainHeader } from '../../Components/Header'
import { MainFooter } from '../../Components/Footer'

export const Feedback = ()=>{
    return(
        <>
        <MainHeader />
        <section className="signup row navbar-expand-xl">
            <div id="container collapsediv" className="collapse navbar-collapse custom-form2">
                <div>
                    <img src="/src/assets/Lovely Animations of the Month — December 2017.gif" className="focusing" alt="" />
                    <h1 className="image-title text-2xl text-light mt-5">Drop Your Feedback Hear, It Will Make Us Perfect</h1>
                </div>
                
            </div>

            <div id="container" className="custom-form signin-form" >
            <form action=""  id="form">

                <label for="from_name">Full Name : </label><br/>
                <input type="text" name="from_name" id="from_name"  required/><br/>
                <span className="error" id="username_error"></span><br/>

                <label for="from_email">Email : </label><br/>
                <input type="email" name="from_email" id="from_email" required/><br/>
                <span className="error" id="email_error"></span><br/>

                <label for="message">Feedback : </label><br/>
                <textarea name="message" id="message" required></textarea>
                <span className="error" id="password_error"></span><br/>

                <button type="reset" className="btn btn-form">clear</button>
                <button type="submit" className="btn btn-form">submit</button>
                <br/>
                <div id="feedback" className="msg"></div>
            </form>
            </div>
        </section>
        <MainFooter />
        </>
    )
}