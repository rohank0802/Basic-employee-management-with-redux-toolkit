import {createAsyncThunk} from '@reduxjs/toolkit'
import api from '../config/axiosInstance'
 export const getEmployee=createAsyncThunk(
    "employee/getEmployee",
    async(_,{rejectWithValue})=>{
        try{

            const response=await api.get('employee')
           
            return response.data
        }
        catch (error){
          return rejectWithValue('something went wrong while fetching data')
        }
    }
)

 export const postEmployee=createAsyncThunk(
    "employee/postEmployee",
    async(details,{rejectWithValue,dispatch})=>{
        try{
            const response=await api.post('employee',details)
           dispatch(getEmployee())
            return response.data
        }
        catch (error){
          return rejectWithValue('something went wrong while fetching data')
        }
    }
)
export const deleteEmployee=createAsyncThunk(
    "employee/deleteEmployee",
    async(id,{rejectWithValue,dispatch})=>{
        try{
            const response=await api.delete(`employee/${id}`)
           dispatch(getEmployee())
            return response.data
        }
        catch (error){
          return rejectWithValue('something went wrong while fetching data')
        }
    }
)
export const updateEmployee=createAsyncThunk(
    "employee/updateEmployee",
    async({id,details},{rejectWithValue,dispatch})=>{
        try{
            const response=await api.put(`employee/${id}`,details)
           dispatch(getEmployee())
            return response.data
        }
        catch (error){
          return rejectWithValue('something went wrong while fetching data')
        }
    }
)

//employee/getEmployee/pending
//employee/getEmployee/fulfilled
//employee/getEmployee/rejected