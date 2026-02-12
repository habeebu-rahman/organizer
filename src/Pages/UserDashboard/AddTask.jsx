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
                category:''
            }
            
        })
        const [errorMsg,setErrorMsg] = useState('')
        const[isSuccess,setIsSuccess] = useState(false)

        const handleChange = (e)=>{
        if(datas.id === user.email){
            setDatas({...datas.taskDetails,[e.target.name]:e.target.value})
            console.log(datas)
            
        }else{
            setDatas({...datas,[e.target.name]:e.target.value})
            console.log(datas)
        }
    }

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
                setDatas({taskDetails:
                    {taskName:'',
                    taskDescription:'',
                    dueDate:'',
                    reminderTime:'',
                    priority:'',
                    category:''}})
            })
            .catch(() => {
            alert("something went wrong");
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
                    <input type="date" name="dueDate" id="date" value={datas.taskDetails.dueDate} onSelect={handleChange}/><br /><br />


                    <label htmlFor="time">Reminder Time</label><br />
                    <input type="time" name="reminderTime" id="time" value={datas.taskDetails.reminderTime} onChange={handleChange}/><br /><br />


                    <label htmlFor="priority">Priority</label><br />
                    <input type="radio" name="priority" value="high" onSelect={handleChange}/>High
                    <input type="radio" name="priority" value="medium" onSelect={handleChange}/>Medium
                    <input type="radio" name="priority" value="low" onSelect={handleChange}/>Low <br /><br />


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