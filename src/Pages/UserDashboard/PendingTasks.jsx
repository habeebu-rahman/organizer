

export const PendingTaks = ()=>{
    return(
        <div className="tab-content user-profile container-fluid col-md-8 col-sm-10 col-11" id="pendingTask">
            <div className="all-tasks">

                <div className="all-task-table mb-4 mt-5 row">
                    <h1 className="field-label text-xl mb-3">All Tasks</h1>
                <table className="table table-radius border table-hr-bordered table-hover table-custom">
                    <thead className="table-dark">
                    <tr>
                        <th>Task Name</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Completion</th>
                    </tr>
                    </thead>
                    <tbody id="task-table-body">
                    
                    </tbody>
                    
                </table>
                <p id="noresult-found" style={{textAlign: 'center',color:'rgb(120, 120, 121)'}} className="text-xl"></p>
                </div>

                
            </div>
        </div>
    )
}