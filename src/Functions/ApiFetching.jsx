import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_API = 'http://localhost:3000/tasks'

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTask',
    async(email)=>{
        const response = await axios.get(`${URL_API}/${email}`);
        return response.data
        }
    )

export const taskSlice = createSlice({
    name:'tasks',
    initialState:{
        tasks:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder

            .addCase(fetchTasks.pending,(state)=>{
                state.loading=true
            })

            .addCase(fetchTasks.fulfilled,(state,action)=>{
                state.loading=false
                state.tasks=action.payload.tasks.reverse()
            })

            .addCase(fetchTasks.rejected,(state)=>{
                state.loading=false
                state.error='API fetching had an issue'
            })
    }
})
export default taskSlice.reducer