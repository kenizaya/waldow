import React from 'react'
import styles from '../styles/HighScoreModal.module.css'
import { useNavigate } from 'react-router-dom'
import HIghScoreList from './HIghScoreList'
import ScoreForm from './ScoreForm'

const HighScoreModal = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* <ScoreForm /> */}
        <HIghScoreList />
        <button className={styles['btn-restart']} onClick={() => navigate('/')}>
          Restart
        </button>
      </div>
    </div>
  )
}

export default HighScoreModal
