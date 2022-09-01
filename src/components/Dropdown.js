import React from 'react'
import DropdownMenu from './DropdownMenu'
import styles from '../styles/Dropdown.module.css'

function Dropdown() {
  return (
    <>
      <button className={styles.dropdown}>3</button>
      <DropdownMenu />
    </>
  )
}

export default Dropdown
