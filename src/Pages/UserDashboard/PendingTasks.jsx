import axios from "axios";
import { useEffect, useState } from "react"


export const PendingTaks = ()=>{
    const [allTasks,setAllTasks] = useState([])
    const URL_API = 'http://localhost:3000/tasks'

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const fetchTasks = async () => {
        const res = await axios.get(`${URL_API}/${user.email}/`);
        setAllTasks(res.data.tasks.reverse());
        };

    useEffect(()=>{
        const fetchData = async () => {
            fetchTasks()
        };

        fetchData();
    },[])

    return(
        <div className="tab-content user-profile container-fluid col-md-8 col-sm-10 col-11" id="pendingTask">
            <div className="all-tasks">

                <div className="all-task-table mb-4 mt-5 row">
                    <h1 className="field-label text-xl mb-3">All Tasks</h1>
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
                            return tasks.status==='pending' &&
                        (
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
                                    Pending...
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                    
                </table>
                <p id="noresult-found" style={{textAlign: 'center',color:'rgb(120, 120, 121)'}} className="text-xl"></p>
                </div>

                
            </div>
        </div>
    )
}