// import axios from "axios";
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { fetchTasks } from "../../Functions/ApiFetching";


export const PendingTaks = ()=>{

    const URL_API = 'http://localhost:3000/tasks'

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch()
    const { tasks, loading, error } = useSelector(state => state.tasks);

    useEffect(()=>{
        const fetchData = async () => {
            dispatch(fetchTasks(user.email))
        };

        fetchData();
    },[dispatch])

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
                        {loading && (
                            <tr>
                            <td colSpan="4">Loading...</td>
                            </tr>
                        )}

                        {error && (
                            <tr>
                            <td colSpan="4">{error}</td>
                            </tr>
                        )}
                        {tasks.length > 0 && tasks.map((tasks)=>{
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