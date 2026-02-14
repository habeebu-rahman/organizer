import { useEffect, useState } from "react"
import axios from "axios";


export const AllTasks = ()=>{

    const [allTasks,setAllTasks] = useState([])
    const URL_API = 'http://localhost:3000/tasks'

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const fetchTasks = async () => {
        const res = await axios.get(`${URL_API}/${user.email}`);
        setAllTasks(res.data.tasks.reverse());
        };

    const deleteTask = async(delete_id)=>{
        await axios.delete(`${URL_API}/${user.email}/${delete_id}`)
        fetchTasks()
    }
    const completeTask =async (status_id)=>{
        await axios.put(`${URL_API}/${user.email}/${status_id}`,{status:'completed'})
        fetchTasks()
    }
    
    useEffect(() => {
        const fetchData = async () => {
            fetchTasks()
        };

        fetchData();
    }, [user.email]);
    // console.log(allTasks)


    return(
        <div className="tab-content user-profile container-fluid col-md-8 col-sm-10 col-11" id="allTask">
            <div className="all-tasks">
                <div className="row search-filter-bar mt-3 mb-4 ml-5">
                    <input type="text" id="search-bar" className="d-flex flex-wrap p-1 col-md-8 col-sm-8 col-8" placeholder="Search" />
                        <select name="search-filter" id="filter-bar" className="col-md-3 col-sm-3 col-3 ml-2">

                            <option value="filter">Filer</option>
                            <option value="completed" >Completed</option>
                            <option value="pending">Pending</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                </div>

                <div className="all-task-table mb-4 row">
                    <h1 className="field-label text-xl mb-3">All Tasks</h1>
                    <div className="task-table">
                <table className="table table-radius border table-hr-bordered table-hover table-custom">
                    <thead className="table-head table-secondary">
                    <tr>
                        <th>Task Name</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Completion</th>
                    </tr>
                    </thead>
                    <tbody id="task-table-body">
                    {allTasks.map((tasks)=>{
                        return(
                            <tr key={tasks.taskId} className="task-detail">
                                <td>{tasks.taskName}
                                    <span className="tooltip">
                                        <span style={{fontWeight:'600'}}>Description: </span>{tasks.taskDescription}<br />
                                        <span style={{fontWeight:'600'}}>Reminder: </span>{tasks.reminderTime}
                                    </span>
                                </td>
                                <td>{tasks.dueDate}</td>
                                <td ><span className="custom-priority" style={{backgroundColor:tasks.priority==='high'?'#ff1414d1':tasks.priority==='medium'?'#ff8a00f2':'#00e800d6'}}>{tasks.priority}</span></td>
                                <td>
                                    {tasks.status==='pending'?
                                        <><button className="btn completed-btn" onClick={()=>completeTask(tasks.taskId)}>Completed</button>
                                        <button className="btn delete-btn" onClick={()=>deleteTask(tasks.taskId)}>Delete</button></>
                                        :<>completed...<button className="btn delete-btn" style={{marginLeft:'26px'}} onClick={()=>deleteTask(tasks.taskId)}>Delete</button></>
                                    }
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
                <p id="noresult-found" style={{textAlign: 'center',color:'rgb(120, 120, 121)'}} className="text-xl"></p>
                </div>


            </div>
        </div>
    )
}