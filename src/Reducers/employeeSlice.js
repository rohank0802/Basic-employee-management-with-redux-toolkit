import {createSlice} from '@reduxjs/toolkit'
import { deleteEmployee, getEmployee, postEmployee, updateEmployee } from './employeeThunk'
const initialState={
    employees:[],
    loading:false,
    error:null
}

 const employeeSlice=createSlice({
    name:"employee",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getEmployee.pending,(state,action)=>{
         state.loading=true
         state.error=null
        })
         builder.addCase(getEmployee.fulfilled,(state,action)=>{
         state.employees=action.payload
         state.loading=false
        })
         builder.addCase(getEmployee.rejected,(state,action)=>{
          state.loading=false
          state.error=action.payload
        })
        //post employees

         builder.addCase(postEmployee.pending,(state,action)=>{
         state.loading=true
         state.error=null
        })
         builder.addCase(postEmployee.fulfilled,(state,action)=>{
         
         state.loading=false
        })
         builder.addCase(postEmployee.rejected,(state,action)=>{
          state.loading=false
          state.error=action.payload
        })
        // delerte employee
         builder.addCase(deleteEmployee.pending,(state,action)=>{
         state.loading=true
         state.error=null
        })
         builder.addCase(deleteEmployee.fulfilled,(state,action)=>{
         
         state.loading=false
        })
         builder.addCase(deleteEmployee.rejected,(state,action)=>{
          state.loading=false
          state.error=action.payload
        })
        // put employee
         builder.addCase(updateEmployee.pending,(state,action)=>{
         state.loading=true
         state.error=null
        })
         builder.addCase(updateEmployee.fulfilled,(state,action)=>{
         
         state.loading=false
        })
         builder.addCase(updateEmployee.rejected,(state,action)=>{
          state.loading=false
          state.error=action.payload
        })
    }
})
 export const {}=employeeSlice.actions
export default employeeSlice.reducer