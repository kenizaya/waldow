import React from 'react'
import { highScores } from '../data/scores'
import { formatDuration } from './Timer'
import styles from '../styles/HighScoreList.module.css'

const HIghScoreList = () => {
  return (
    <div className={styles['high-scores']}>
      <h2 className={styles.h2}>Highscores</h2>
      <ol>
        {highScores.map((item) => {
          return <li>{`${item[0]} - ${formatDuration(item[1])}`}</li>
        })}
      </ol>
    </div>
  )
}

export default HIghScoreList
