import React from 'react'
import styles from '../styles/Snackbar.module.css'

function Snackbar({ text, bgColor }) {
  return (
    <div className={styles.snackbar} style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  )
}

export default Snackbar
