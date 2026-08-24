import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const page1Content = (props) => {
  return (
    <div className='pb-16 pt-6  h-[90vh] flex  items-center px-18 gap-10'>
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default page1Content
