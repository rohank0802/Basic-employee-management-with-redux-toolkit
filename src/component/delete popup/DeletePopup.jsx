import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { closeDeletePopup } from '../../Reducers/popupSlice'
import { deleteEmployee } from '../../Reducers/employeeThunk'
const DeletePopup = () => {
  const statePopup=  useSelector((state=>state.popupReducer.deletePopup))
  
   const dispatch=useDispatch()
   if(!statePopup) return null;
    return (
      <div   className='fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-black/80'>
  
   <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Delete</h2>
    <p>Are you sure you want to delete this</p>
    <div className=" mt-3 justify-end card-actions">
      <button onClick={()=>dispatch(deleteEmployee(statePopup)
      ,dispatch(closeDeletePopup()))} className="btn btn-primary">yes</button>
       <button onClick={()=>dispatch(closeDeletePopup())} className="btn btn-primary">No</button>
    </div>
   
  </div>
</div>
      </div>
    )
}

export default DeletePopup
