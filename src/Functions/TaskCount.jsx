// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const user = JSON.parse(localStorage.getItem('currentUser'));
// axios.get(`http://localhost:3000/tasks/${user.email}`)
//     .then(response => {
//         const data = response.data;
//         const allTasks = data.tasks.length
//     });


// // const user = users.find(user=>user.email === currentUser.email)


// const taskCountSlice = createSlice({
//     name:'taskCount',
//     initialState:{
//         allTaskCount:0,
//         completedTaskCount:0,
//         todayTaskCount:0
//     },
//     reducers:{
//         taskAdding:(state)=>{
//             state.allTaskCount = ;
//         },
//         taskCompleting:(state)=>{
//             state.completedTaskCount +=1;
//         }
//     }
// })

// export const {taskAdding, taskCompleting} = taskCountSlice.actions
// export default taskCountSlice.reducer