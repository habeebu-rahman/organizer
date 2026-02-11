

export const AddTask = ()=>{
    return(
        <div className="tab-content user-profile container-fluid col-md-8" id="addTask">
            <div className="add-task">
                <form action="" className="add-task-form">

                    <label htmlFor="title">Task Name</label><br />
                    <input type="text" name="title" id="title" /><br />
                    <span className="error" id="title_error"></span><br />


                    <label htmlFor="description">Task Description</label><br />
                    <textarea name="description" id="description"></textarea><br />
                    <span className="error" id="description_error"></span><br />


                    <label htmlFor="date">Due Date</label><br />
                    <input type="date" name="date" id="date" /><br />
                    <span className="error" id="date_error"></span><br />


                    <label htmlFor="time">Reminder Time</label><br />
                    <input type="time" name="time" id="time" /><br />
                    <span className="error" id="time_error"></span><br />


                    <label htmlFor="priority">Priority</label><br />
                    <input type="radio" name="priority" value="high" />High
                    <input type="radio" name="priority" value="medium" />Medium
                    <input type="radio" name="priority" value="low" />Low <br />
                    <span className="error" id="priority_error"></span><br />


                    <label htmlFor="category">Category</label><br />
                    <select name="category" id="category">
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