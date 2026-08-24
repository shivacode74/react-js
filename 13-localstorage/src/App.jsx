import React from 'react'

const App = () => {

 const storeUser={
    age:22,
    name:"react",
    work:"local storage"
  }
 localStorage.setItem('user1',JSON.stringify(storeUser))

const user=JSON.parse(localStorage.getItem('user1'))
console.log(user);

  return (
    <div>
      App
    </div>
  )
}

export default App
