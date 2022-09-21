import React from 'react'
import styles from '../styles/HighScoreModal.module.css'

const HighScoreModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.div}>
        <p>High</p>
      </div>
    </div>
  )
}

export default HighScoreModal
