import React from 'react'

const App = () => {

  const subimtForm=(elem)=>{
    elem.preventDefault();
    console.log("form submited");
    
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        subimtForm(elem)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>sumbmit</button>
      </form>
    </div>
  )
}

export default App
