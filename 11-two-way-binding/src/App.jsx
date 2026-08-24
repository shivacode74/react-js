import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const subimtForm = (elem) => {
    elem.preventDefault();
    console.log("form submited by",title);
    setTitle('')

  }

  return (
    <div>
      <form onSubmit={(elem) => {
        subimtForm(elem)
      }}>
        <input
          type="text"
          placeholder='Enter your name'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
        <button>sumbmit</button>
      </form>
    </div>
  )
}

export default App
