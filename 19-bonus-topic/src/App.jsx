/* Trick send data child to parent */



import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar setTheme={setTheme} />
    </div>
  )
}

export default App
