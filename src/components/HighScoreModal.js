import React, { useEffect, useState } from 'react'
import styles from '../styles/HighScoreModal.module.css'
import { useNavigate } from 'react-router-dom'
import HighScoreList from './HighScoreList'
import { sortHighScore } from '../util/sortHighScore'
import ScoreForm from './ScoreForm'
import { time, formatDuration } from './Timer'

const HighScoreModal = ({ id, scores }) => {
  const [showForm, setShowForm] = useState(false)
  const [showHighScores, setShowHighScores] = useState(false)
  const [currentUserScore, setCurrentUserScore] = useState({})
  const highScores = sortHighScore(scores)

  useEffect(() => {
    if (
      highScores.length === 0 ||
      time < highScores[highScores.length - 1][1] ||
      highScores.length < 10
    )
      setShowForm(true)
  }, [])

  const navigate = useNavigate()
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {showForm && (
          <ScoreForm
            setShowHighScores={setShowHighScores}
            setCurrentUserScore={setCurrentUserScore}
            setShowForm={setShowForm}
            time={time}
            id={id}
          />
        )}
        {showHighScores && (
          <HighScoreList scores={{ ...scores, ...currentUserScore }} />
        )}

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
