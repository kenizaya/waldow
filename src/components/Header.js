import React from 'react'
import Timer from './Timer'
import Dropdown from './Dropdown'

import styles from '../styles/Header.module.css'

function Header({ characters, isGameFinished }) {
  return (
    <header className={styles.header}>
      <h1>
        <a href='/'>waldow</a>
      </h1>
      <Timer isGameFinished={isGameFinished} />
      <Dropdown characters={characters} />
    </header>
  )
}

export default Header
