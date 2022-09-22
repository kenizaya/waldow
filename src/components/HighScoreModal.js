import React from 'react'
import styles from '../styles/HighScoreModal.module.css'
import HIghScoreList from './HIghScoreList'
import ScoreForm from './ScoreForm'

const HighScoreModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.div}>
        {/* <ScoreForm /> */}
        <HIghScoreList />
        <button>Restart</button>
      </div>
    </div>
  )
}

export default HighScoreModal
