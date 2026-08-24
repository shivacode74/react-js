import React, { useState } from 'react'

const App = () => {
  const [value, setvalue] = useState(0)
  function increaseVal(){
    setvalue(value+1);
  }
  function decreaseVal(){
    setvalue(value-1);
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={decreaseVal}>Decrease</button>
      <button onClick={increaseVal}>Increase</button>
    </div>
  )
}

export default App
