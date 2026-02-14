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
import { Bell } from "lucide-react";


export const UserDash = ()=>{
    const [activeTab, setActiveTab] = useState('profile')
    const logInStatus = localStorage.getItem('isLogedIn')
    const navigate = useNavigate()

    const today = new Date().toISOString().split("T")[0];
    const [allTaskCount,setAllTaskCount] = useState('')
    const [allTaskCompletedCount,setAllTaskCompletedCount] = useState('')
    const [allTaskPendingCount,setAllTaskPendingCount] = useState('')
    const [allTaskTodayCount,setAllTaskTodayCount] = useState('')

    const user = JSON.parse(localStorage.getItem('currentUser'));
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3000/tasks/${user.email}`);
            setAllTaskCount(res.data.tasks.length);
            setAllTaskCompletedCount(res.data.tasks.filter(task=>task.status === 'completed').length)
            setAllTaskPendingCount(res.data.tasks.filter(task=>task.status === 'pending').length)
            setAllTaskTodayCount(res.data.tasks.filter(task=>task.dueDate === today).length)
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
            <button className={`item tab ${activeTab ==='allTask'?'active':''}`} onClick={()=>setActiveTab('allTask')}>All Tasks{allTaskCount > 0 && <span className="badge">{allTaskCount}</span>}</button>
            <button className={`item tab ${activeTab ==='pendingTask'?'active':''}`} onClick={()=>setActiveTab('pendingTask')}>Pending Tasks{allTaskPendingCount > 0 && <span className="badge">{allTaskPendingCount}</span>}</button>
        </div>
            {activeTab === 'profile' && <Profile allTaskCount={allTaskCount} allTaskCompletedCount={allTaskCompletedCount} allTaskTodayCount={allTaskTodayCount}/>}
            {activeTab === 'addTask' && <AddTask />}
            {activeTab === 'allTask' && <AllTasks />}
            {activeTab === 'pendingTask' && <PendingTaks />}
        </section>
        <MainFooter />
        </>
    )
}