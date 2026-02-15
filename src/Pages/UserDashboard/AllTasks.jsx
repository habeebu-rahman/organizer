import { useEffect} from "react"
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { fetchTasks } from "../../Functions/ApiFetching";


export const AllTasks = ()=>{

    const URL_API = 'http://localhost:3000/tasks'

    const dispatch = useDispatch()
    const { tasks, loading, error } = useSelector(state => state.tasks);

    const user = JSON.parse(localStorage.getItem('currentUser'));


    const deleteTask = async(delete_id)=>{
        await axios.delete(`${URL_API}/${user.email}/${delete_id}`)
        dispatch(fetchTasks(user.email))
    }
    const completeTask =async (status_id)=>{
        await axios.put(`${URL_API}/${user.email}/${status_id}`,{status:'completed'})
        dispatch(fetchTasks(user.email))
    }
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchTasks(user.email))
        };

        fetchData();
    }, [dispatch,user.email]);
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
                        {tasks.length > 0 && tasks.map((task)=>{
                            return(
                                <tr key={task.taskId} className="task-detail">
                                    <td>{task.taskName}
                                        <span className="tooltip">
                                            <span style={{fontWeight:'600'}}>Description: </span>{task.taskDescription}<br />
                                            <span style={{fontWeight:'600'}}>Reminder: </span>{task.reminderTime}
                                        </span>
                                    </td>
                                    <td>{task.dueDate}</td>
                                    <td ><span className="custom-priority" style={{backgroundColor:task.priority==='high'?'#ff1414d1':task.priority==='medium'?'#ff8a00f2':'#00e800d6'}}>{task.priority}</span></td>
                                    <td>
                                        {task.status==='pending'?
                                            <><button className="btn completed-btn" onClick={()=>completeTask(task.taskId)}>Completed</button>
                                            <button className="btn delete-btn" onClick={()=>deleteTask(task.taskId)}>Delete</button></>
                                            :<>completed...<button className="btn delete-btn" style={{marginLeft:'26px'}} onClick={()=>deleteTask(task.taskId)}>Delete</button></>
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