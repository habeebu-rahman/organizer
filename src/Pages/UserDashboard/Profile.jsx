// import { useSelector } from "react-redux";
import { Link } from "react-router"


export const Profile = ({allTaskCount, allTaskCompletedCount,allTaskTodayCount})=>{
    const user = JSON.parse(localStorage.getItem('currentUser'));
    // const allTaskCount = useSelector((state)=>state.taskCount.allTaskCount)

    
    return(
        <div className="tab-content user-profile container-fluid col-md-8" id="profile">
        
                <div className="user-details p-5">
                    <h5 className="mb-4 field-label text-xl">Personal Details</h5>

                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <p className="field-label">Name</p>
                        <p className="field-value" id="username">{user.name}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Email</p>
                        <p className="field-value"id="useremail">{user.email}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Phone</p>
                        <p className="field-value" id="userphone">{user.phone}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Age</p>
                        <p className="field-value" id="userage">{user.age}</p>
                    </div>

                    <div className="col-12">
                        <p className="field-label">Gender</p>
                        <p className="field-value" id="usergender">{user.gender}</p>
                    </div>
                    </div>
                </div>

                <div className="task-details row">
                    <div className="user-details col-md-3 ">
                        <p className="field-label text-xl">All Tasks</p>
                        <p className="text-xl field-label">{allTaskCount}</p>
                    </div>
                    <div className="user-details col-md-3">
                        <p className="field-label text-xl">Completed</p>
                        <p className="text-xl field-label">{allTaskCompletedCount}</p>
                    </div>
                    <div className="user-details col-md-3">
                        <p className="field-label text-xl">Today Tasks</p>
                        <p className="text-xl field-label">{allTaskTodayCount}</p>
                    </div>
                </div>

                <div className="user-details feedback row">
                    <h1 className="col-md-8 field-label">Drop Your Feedback It Will Make A Better Communication Between Us</h1>
                    <Link className="col-md-2" to='/Feedback'><button className="btn btn0 mt-1">Feedback</button></Link>
                </div>
        </div>
    )
}