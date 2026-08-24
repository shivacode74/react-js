import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.header}>
      <h3>This is header</h3>
      <button className={Styles.btn}>click me</button>
    </div>
  )
}

export default Header
