import Navbar from './component/navbar/Navbar'
import './App.css'
import Footer from './component/Footer/Footer'
import Layout from './component/Layout/Layout'
import Employees from './component/Employes/Employees'
import Employeepopup from './component/employee popup/Employeepopup'
import DeletePopup from './component/delete popup/DeletePopup'
import { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { getEmployee } from './Reducers/employeeThunk'
import Highlight from './highlited/Highlight'
function App() {
  const dispatch=useDispatch()
 useEffect(()=>{
dispatch(getEmployee())
 },[])

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <Employeepopup/>
      <DeletePopup/>
     
  
       <Navbar/>
      
<div className='flex-1 py-10'>
  <Layout>
 <Highlight/>
 <Employees/>
  </Layout>
</div>
      <Footer/>
    </div>
    </>
  )
}

export default App
