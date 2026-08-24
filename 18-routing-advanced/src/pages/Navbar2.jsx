import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate=useNavigate()
    

  return (
    <div>
      <button onClick={()=>{
        navigate('/')} }
        className='font-medium bg-green-800 px-5 py-2 active:scale-95 m-2'>return to Home Page</button>
        <button className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={()=>{
          navigate(-1)
        }}>Back</button>

        <button className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={()=>{
          navigate(+1)
        }}>Next</button>
    </div>
  )
}

export default Navbar2
