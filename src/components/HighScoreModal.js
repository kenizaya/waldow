import React from 'react'
import styles from '../styles/HighScoreModal.module.css'
import ScoreForm from './ScoreForm'

const HighScoreModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.div}>
        <ScoreForm />
        <button>Restart</button>
      </div>
    </div>
  )
}

export default HighScoreModal
