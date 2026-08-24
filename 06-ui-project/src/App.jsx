import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
  {
    img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I am happy with the financial services I receive. Everything is simple, reliable, and meets my daily needs.',
    tag: 'Satisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I have limited access to financial products and wish there were more affordable and flexible options available.',
    tag: 'Underserved'
  },
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I use basic banking services but still lack access to the full range of financial products that I need.',
    tag: 'Underbanked'
  }
];


  return (
    <div >
      <Section1 users={users}/>
    </div>
  )
}

export default App
