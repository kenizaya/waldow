import React from 'react'
import Timer from './Timer'
import Dropdown from './Dropdown'

import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>waldow</h1>
      <Timer />
      <Dropdown />
    </header>
  )
}

export default Header
