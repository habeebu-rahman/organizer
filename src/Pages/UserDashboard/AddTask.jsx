import { useState } from "react"

export const AddTask = ()=>{
    const [datas, setDatas] = useState({
            taskName:'',
            taskDescription:'',
            dueDate:null,
            reminderTime:null,
            priority:'',
            category:''
        })
        // const [errorMsg,setErrorMsg] = useState('')
        // const[isSuccess,setIsSuccess] = useState(false)

        const handleChange = (e)=>{
        setDatas({...datas,[e.target.name]:e.target.value})
        }

        const handleSubmit =(e)=>{
        e.preventDefault();
            if(!datas.taskname || !datas.taskDescription || !datas.dueDate || !datas.reminderTime || !datas.priority || !datas.category){
                // setErrorMsg('Please fill all the fields')
                return
            }
        }

    return(
        <div className="tab-content user-profile container-fluid col-md-8" id="addTask">
            <div className="add-task">
                <form action="" className="add-task-form" onSubmit={handleSubmit}>

                    <label htmlFor="title">Task Name</label><br />
                    <input type="text" name="taskName" id="title" onChange={handleChange} /><br />
                    <span className="error" id="title_error"></span><br />


                    <label htmlFor="description">Task Description</label><br />
                    <textarea name="taskDescription" id="description" onChange={handleChange}></textarea><br />
                    <span className="error" id="description_error"></span><br />


                    <label htmlFor="date">Due Date</label><br />
                    <input type="date" name="dueDate" id="date" onChange={handleChange}/><br />
                    <span className="error" id="date_error"></span><br />


                    <label htmlFor="time">Reminder Time</label><br />
                    <input type="time" name="reminderTime" id="time" onChange={handleChange}/><br />
                    <span className="error" id="time_error"></span><br />


                    <label htmlFor="priority">Priority</label><br />
                    <input type="radio" name="priority" value="high" onChange={handleChange}/>High
                    <input type="radio" name="priority" value="medium" onChange={handleChange}/>Medium
                    <input type="radio" name="priority" value="low" onChange={handleChange}/>Low <br />
                    <span className="error" id="priority_error"></span><br />


                    <label htmlFor="category">Category</label><br />
                    <select name="category" id="category" onChange={handleChange}>
                        <option value="study">Study</option>
                        <option value="assignment">Assignment</option>
                        <option value="project">Project</option>
                        <option value="personal">Personal</option>
                    </select><br />
                    <span className="error" id="category_error"></span><br />
                    <button type="reset" className="btn btn-form">clear</button>
                    <button type='submit' className="btn btn-form">Add Task</button>
                </form>
            </div>
        </div>
    )
}