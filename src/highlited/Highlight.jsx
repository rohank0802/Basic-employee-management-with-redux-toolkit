import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeHighlightPopup } from '../Reducers/popupSlice'
function Highlight() {

    const statePopup=  useSelector((state=>state.popupReducer.highlightpopup))
    const employesDetails=useSelector((state=>state.employeeReducer.employees))
     const dispatch=useDispatch()
    if(!statePopup)return null
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
   <h1 className='text-center text-2xl font-medium'>Highlited Employee</h1>
   <div className='flex items-center justify-center p-3 shadow-md bg-base-100 '>
<span className='p-2.5 border-2 rounded-2xl '>
 <button  onClick={()=>dispatch(closeHighlightPopup())}>Go Back</button>
</span>
   </div>
        {employesDetails.filter((items)=>items.highlight===true).map((item)=>(  
                    <Highlitedcard key={item.id} item={item}/>
        )
            
            )
        }
        </ul>
  )
}
 const Highlitedcard=({item})=>{ 
    return(
<li className="list-row">
    <div><img className="size-10 rounded-box" src={item.profileUrl}/></div>
    <div>
      <div>{item.name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{item.email}</div>
    </div>
    <p className="list-col-wrap text-xs">
      {item.bio}
    </p>
   
  </li>
    )
 }
export default Highlight

