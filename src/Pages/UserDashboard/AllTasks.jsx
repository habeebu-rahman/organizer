

export const AllTasks = ()=>{
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