import React from 'react'
import styles from '../styles/Footer.module.css'

const Info = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>
        Made by{' '}
        <a href='https://github.com/kenizaya/waldow' className={styles.a}>
          kenizaya
        </a>
      </p>
    </footer>
  )
}

export default Info
