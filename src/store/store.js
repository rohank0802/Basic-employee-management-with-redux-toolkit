import {configureStore} from '@reduxjs/toolkit'
import  popupReducer  from '../Reducers/popupSlice'
import employeeReducer from '../Reducers/employeeSlice'
const store=configureStore({
    reducer:{
     popupReducer,
     employeeReducer
    }
})
export default store