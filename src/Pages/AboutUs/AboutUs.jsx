import { MainFooter } from '../../Components/Footer'
import { MainHeader } from '../../Components/Header'
import './AboutUs.css'

export const AboutUs = () =>{
    return(
        <>
        <MainHeader />
        <section className="row all-custom-form">
            <div className="custom-form col-md-10 col-sm-10 col-8">
                <h1 className="text-2xl text-loose">Who We Are</h1><br/>
                <p>The Study Planner Dashboard is a simple and effective web application built to help students stay organized, focused, and productive. In a world full of distractions, keeping track of daily tasks, assignments, study goals, and deadlines can be difficult. This project was created to solve that problem by giving students a clear, easy-to-use platform to manage their study plans.</p>
            </div>

            <div className="custom-form col-md-10 col-sm-10 col-8">
                <h1 className="text-2xl ">What We Do</h1><br/>
                <p>Our system allows users to:</p>
                <ul className="list-disc ps-4">
                    <li>Create and manage tasks</li>
                    <li>View all tasks in one place</li>
                    <li>Track completed and pending tasks</li>
                    <li>See today’s tasks instantly</li>
                    <li>Organize tasks based on priority</li>
                    <li>View study statistics and progress</li>
                    <li>Save data using local storage so nothing is lost</li>
                    <li>Navigate everything easily from a single dashboard</li>
                </ul>
                <p>Every feature is designed to help students plan better and stay consistent with their goals.</p>
            </div>

            <div className="custom-form col-md-10 col-sm-10 col-8">
                <h1 className="text-2xl text-loose">Our Mission</h1><br/>
                <p>Our mission is to make study planning simple, smart, and accessible for everyone.
                <br/>We believe that:</p>
                <ul className="list-disc ps-4">
                    <li>Better planning leads to better learning</li>
                    <li>Even small daily tasks improve long-term growth</li>
                    <li>A clear structure reduces stress and increases productivity</li>
                </ul>
                <p>This project aims to provide a digital space where students can stay motivated, organized, and confident in their academic journey.</p>
            </div>

            <div className="custom-form col-md-10 col-sm-10 col-8">
                <h1 className="text-2xl text-loose">Why This Project</h1><br/>
                <p>This Study Planner was developed as part of a web development project to demonstrate the use of:</p>
                <ul className="list-disc ps-4">
                    <li>HTML5, CSS3, Bootstrap, TailwindCSS</li>
                    <li>JavaScript for interactivity</li>
                    <li>Local Storage for saving data</li>
                    <li>EmailJS for contact communication</li>
                    <li>Responsive design principles</li>
                    <li>Dynamic filtering, searching, and task management</li>
                </ul>
                <p>It is not just a project—it's a helpful tool that real students can actually use.</p>
            </div>

            <div className="custom-form col-md-10 col-sm-10 col-8">
                <h1 className="text-2xl text-loose" >Our Vision</h1><br />
                <p>We want to continue improving this dashboard by adding features like:</p>
                <ul className="list-disc ps-4">
                    <li>Calendar view</li>
                    <li>Dark/Light mode</li>
                    <li>Reminders and notifications</li>
                    <li>Cloud-based account sync</li>
                    <li>AI-based study suggestions</li>
                </ul>
                <p>The goal is to build a complete, smart planner system for students of all ages.</p>
            </div>

            <div className="custom-form-image col-md-6 col-sm-10 col-10">
                <img src="/src/assets/download (3).jpeg" width="300px" alt="" />
            </div>

        </section>
        <MainFooter />
        </>
    )
}