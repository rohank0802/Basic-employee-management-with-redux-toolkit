import {createSlice} from '@reduxjs/toolkit'
const initialState={
employeePopup:false,
deletePopup:false,
highlightpopup:false
}
export const popupSlice=createSlice({
    name:'popup',
    initialState,
    reducers:{
        openEmployeePopup:(state,action)=>{
          state.employeePopup=action.payload??true
        },
        closeEmployeePopup:(state,action)=>{
           state.employeePopup=false
        },
         openDeletePopup:(state,action)=>{
          state.deletePopup=action.payload??true
        },
        closeDeletePopup:(state,action)=>{
           state.deletePopup=false
        },
          openHighlightpopup:(state,action)=>{
          state.highlightpopup=action.payload??true
        },
        closeHighlightPopup:(state,action)=>{
           state.highlightpopup=false
        },
    },
})

export const {openEmployeePopup,closeEmployeePopup,openDeletePopup,closeDeletePopup,openHighlightpopup,closeHighlightPopup}=popupSlice.actions
export default popupSlice.reducer
