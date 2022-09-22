import React from 'react'
import { scores, sortHighScore } from '../data/scores'
import { formatDuration } from './Timer'
import styles from '../styles/HighScoreList.module.css'

const HighScoreList = () => {
  const highScores = sortHighScore(scores)
  return (
    <div className={styles['high-scores']}>
      <h2 className={styles.h2}>Highscores</h2>
      <ol>
        {highScores.map((item) => {
          return (
            <li className={styles.item}>{`${item[0]}  -  ${formatDuration(
              item[1]
            )}`}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default HighScoreList
