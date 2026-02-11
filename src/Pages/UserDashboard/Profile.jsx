import { Link } from "react-router"


export const Profile = ()=>{
    return(
        <div className="tab-content user-profile container-fluid col-md-8" id="profile">
        
                <div className="user-details p-5">
                    <h5 className="mb-4 field-label text-xl">Personal Details</h5>

                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <p className="field-label">Name</p>
                        <p className="field-value" id="username"></p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Email</p>
                        <p className="field-value"id="useremail"></p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Phone</p>
                        <p className="field-value" id="userphone"></p>
                    </div>

                    <div className="col-md-6 mb-3">
                        <p className="field-label">Age</p>
                        <p className="field-value" id="userage"></p>
                    </div>

                    <div className="col-12">
                        <p className="field-label">Gender</p>
                        <p className="field-value" id="usergender"></p>
                    </div>
                    </div>
                </div>

                <div className="task-details row">
                    <div className="user-details col-md-3 ">
                        <p className="field-label text-xl">All Tasks</p>
                        <p className="text-xl">45</p>
                    </div>
                    <div className="user-details col-md-3">
                        <p className="field-label text-xl">Completed</p>
                        <p className="text-xl">23</p>
                    </div>
                    <div className="user-details col-md-3">
                        <p className="field-label text-xl">Today Tasks</p>
                        <p className="text-xl">6</p>
                    </div>
                </div>

                <div className="user-details feedback row">
                    <h1 className="col-md-8">Drop Your Feedback It Will Make A Better Communication Between Us</h1>
                    <Link className="col-md-2" to='/Feedback'><button className="btn btn0 mt-1">Feedback</button></Link>
                </div>
        </div>
    )
}