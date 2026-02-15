import { useState } from "react"
import axios from 'axios'

export const AddTask = ()=>{
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [datas, setDatas] = useState({
            id:user.email,
            taskDetails:{
                taskName:'',
                taskDescription:'',
                dueDate:'',
                reminderTime:'',
                priority:'',
                category:'study',
                status:'pending'
            }
            
        })
        const [errorMsg,setErrorMsg] = useState('')
        const[isSuccess,setIsSuccess] = useState(false)

        const handleChange = (e) => {
                setDatas({
                    ...datas,
                    taskDetails: {
                    ...datas.taskDetails,
                    [e.target.name]: e.target.value
                    }
                });
            console.log(datas)
            };

        const handleSubmit =(e)=>{
        e.preventDefault();
            if(!datas.taskDetails.taskName || !datas.taskDetails.taskDescription || !datas.taskDetails.dueDate || !datas.taskDetails.reminderTime || !datas.taskDetails.priority || !datas.taskDetails.category){
                setIsSuccess(false)
                setErrorMsg('Please fill all the fields')
                return
            }
            axios.post("http://localhost:3000/add-task",datas)
            .then(response =>{
                console.log(response.data)
                setIsSuccess(true)
                setErrorMsg('Your task is added')
                setDatas({
                    id:user.email,
                    taskDetails:
                        {taskName:'',
                        taskDescription:'',
                        dueDate:'',
                        reminderTime:'',
                        priority:'',
                        category:'study',
                        status:'pending'}})
            })
            .catch(() => {
            console.log("something went wrong");
        });
        }

    return(
        <div className="tab-content user-profile container-fluid col-md-8" id="addTask">
            <div className="add-task">
                <form action="" className="add-task-form" onSubmit={handleSubmit}>

                    <label htmlFor="title">Task Name</label><br />
                    <input type="text" name="taskName" id="title" value={datas.taskDetails.taskName} onChange={handleChange} /><br /><br />


                    <label htmlFor="description">Task Description</label><br />
                    <textarea name="taskDescription" id="description" value={datas.taskDetails.taskDescription} onChange={handleChange}></textarea><br /><br />


                    <label htmlFor="date">Due Date</label><br />
                    <input type="date" name="dueDate" id="date" value={datas.taskDetails.dueDate} onChange={handleChange}/><br /><br />


                    <label htmlFor="time">Reminder Time</label><br />
                    <input type="time" name="reminderTime" id="time" value={datas.taskDetails.reminderTime} onChange={handleChange}/><br /><br />


                    <label htmlFor="priority">Priority</label><br />
                    <input  type="radio" name="priority" value="high" checked={datas.taskDetails.priority === "high"} onChange={handleChange}/><span className="label-priority">High</span>
                    <input  type="radio" name="priority" value="medium" checked={datas.taskDetails.priority === "medium"} onChange={handleChange}/><span className="label-priority">Medium</span>
                    <input  type="radio" name="priority" value="low" checked={datas.taskDetails.priority === "low"} onChange={handleChange}/><span className="label-priority">Low</span> <br /><br />


                    <label htmlFor="category">Category</label><br />
                    <select name="category" id="category" value={datas.taskDetails.category} onChange={handleChange}>
                        <option value="study">Study</option>
                        <option value="assignment">Assignment</option>
                        <option value="project">Project</option>
                        <option value="personal">Personal</option>
                    </select><br /><br />

                    <span className={isSuccess?'success':'error'}>{errorMsg}</span><br />
                    <button type="reset" className="btn btn-form">clear</button>
                    <button type='submit' className="btn btn-form">Add Task</button>
                </form>
            </div>
        </div>
    )
}