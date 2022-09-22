import React, { useEffect, useState } from 'react'
import styles from '../styles/HighScoreModal.module.css'
import { useNavigate } from 'react-router-dom'
import HighScoreList from './HighScoreList'
import { scores, sortHighScore } from '../data/scores'
import ScoreForm from './ScoreForm'
import { time, formatDuration } from './Timer'

const HighScoreModal = () => {
  const [showForm, setShowForm] = useState(false)
  const [showHighScores, setShowHighScores] = useState(false)
  const highScores = sortHighScore(scores)

  useEffect(() => {
    if (time < highScores[highScores.length - 1][1]) setShowForm(true)
  }, [])

  const navigate = useNavigate()
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showForm && (
          <ScoreForm
            setShowHighScores={setShowHighScores}
            setShowForm={setShowForm}
            time={time}
          />
        )}
        {showHighScores && <HighScoreList />}

        <div className={styles['right-container']}>
          <span>Your Time</span>
          <span className={styles.time}>{formatDuration(time)}</span>
          <button
            className={styles['btn-restart']}
            onClick={() => navigate('/')}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  )
}

export default HighScoreModal
