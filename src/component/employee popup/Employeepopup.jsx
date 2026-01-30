
import {useSelector,useDispatch} from 'react-redux'
import { closeEmployeePopup } from '../../Reducers/popupSlice';
import { useEffect, useState } from 'react';
import { postEmployee, updateEmployee } from '../../Reducers/employeeThunk';
function Employeepopup() {
    const [formdetail,setformdetail]=useState({
        profileUrl:'',
        name:'',
        email:'',
        bio:'',
        highlight:false
    })
    // setting form input detsils in formdetails state
    
    const handleinputchange=(e)=>{

    const {name,value}=e.target
    setformdetail({
        ...formdetail,[name]:value
    })
    }
    const dispatch=useDispatch()
    const statePopup=  useSelector((state=>state.popupReducer.employeePopup))
    
 
    // post form detsils data to the sevrver by dispatch postemployee (formdetils)
    const handlesubmit= async ()=>{
      if(statePopup.id){
        await dispatch(updateEmployee({
          id:statePopup.id,
          details:formdetail
        }))
      }
      else{

        await dispatch(postEmployee(formdetail))
      }
       dispatch(closeEmployeePopup())
    }
 // for edit functionality
 useEffect(()=>{
  if(!statePopup){
    setformdetail({
       profileUrl:'',
        name:'',
        email:'',
        bio:'',
        highlight:false
    })
  }
   else if(statePopup.id){
     setformdetail({
       profileUrl:statePopup.profileUrl,
       name:statePopup.name,
       email:statePopup.email,
       bio:statePopup.bio,
       highlight:false
      })
    }
  },[statePopup])
  if(!statePopup) return null;
  return (
    <div onClick={()=>dispatch(closeEmployeePopup())} className='fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-black/80'>

   <fieldset onClick={(e)=>e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Employee Details</legend>

  <label className="label">Profile Url</label>
  <input name='profileUrl'  type="text" className="input" placeholder="Profile Url"  onChange={handleinputchange} value={formdetail.profileUrl}/>
  <label className="label">Name</label>
  <input name='name' type="text" className="input" placeholder="Name" onChange={handleinputchange} value={formdetail.name}/>

  <label className="label">Email</label>
  <input  name='email' type="email" className="input" placeholder="Email" onChange={handleinputchange} value={formdetail.email} />

  <label className="label">Bio</label>
  <textarea name='bio' className="textarea h-24" placeholder="Bio" onChange={handleinputchange} value={formdetail.bio} ></textarea>
  

  <button onClick={handlesubmit} className="btn btn-neutral mt-4">Submit</button>
</fieldset>
    </div>
  )
}

export default Employeepopup
