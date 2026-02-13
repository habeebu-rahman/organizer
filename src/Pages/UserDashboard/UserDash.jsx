import './UserDash.css'
import { Profile } from './Profile'
import { AddTask } from './AddTask'
import { AllTasks } from './AllTasks'
import { PendingTaks } from './PendingTasks'
import { MainHeader } from '../../Components/Header'
import { MainFooter } from '../../Components/Footer'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const UserDash = ()=>{
    const [activeTab, setActiveTab] = useState('profile')
    const logInStatus = localStorage.getItem('isLogedIn')
    const navigate = useNavigate()

    const [allTaskCount,setAllTaskCount] = useState('')

    const user = JSON.parse(localStorage.getItem('currentUser'));
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/tasks/${user.email}`);
            setAllTaskCount(res.data.tasks.length);
        };

        fetchData();
    }, [user]);

    if(!logInStatus){
        Swal.fire({
                    title: 'Please logIn',
                    text: "You can't use this page, please login then you can use this page",
                    icon: 'error',
                    timer:2000,
                    timerProgressBar:true,
                    showConfirmButton:false,
                })
        setTimeout(() => {navigate('/SignIn')});
    }else
    return(
        <>
        <MainHeader />
        <section className="user-dash row">
        <div className="filter-btn col-md-4">
            <button className={`item tab  ${activeTab === "profile" ? "active" : ""}`} onClick={() => setActiveTab("profile")}>Profile</button>
            <button className={`item tab ${activeTab === 'addTask'?'active':''}`} onClick={()=>setActiveTab('addTask')}>Add Task</button>
            <button className={`item tab ${activeTab ==='allTask'?'active':''}`} onClick={()=>setActiveTab('allTask')}>All Tasks</button>
            <button className={`item tab ${activeTab ==='pendingTask'?'active':''}`} onClick={()=>setActiveTab('pendingTask')}>Pending Tasks</button>
        </div>
            {activeTab === 'profile' && <Profile allTaskCount={allTaskCount}/>}
            {activeTab === 'addTask' && <AddTask />}
            {activeTab === 'allTask' && <AllTasks />}
            {activeTab === 'pendingTask' && <PendingTaks />}
        </section>
        <MainFooter />
        </>
    )
}