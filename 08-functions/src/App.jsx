import React from 'react'

const App = () => {
  return (
    <div>
      <div 
      onMouseMove={(elem)=>{
        console.log(elem);
      }} className='box'>
        
      </div>
    </div>
  )
}

export default App
