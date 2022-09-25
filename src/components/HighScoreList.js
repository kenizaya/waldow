import React from 'react'
import { v4 as uuid } from 'uuid'
import { sortHighScore } from '../util/sortHighScore'
import { formatDuration } from './Timer'
import styles from '../styles/HighScoreList.module.css'

const HighScoreList = ({ scores }) => {
  const highScores = sortHighScore(scores)
  console.log(scores)
  return (
    <div className={styles['high-scores']}>
      <h2 className={styles.h2}>Highscores</h2>
      <ol>
        {highScores.map((item) => {
          return (
            <li className={styles.item} key={uuid()}>{`${
              item[0]
            }  -  ${formatDuration(item[1])}`}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default HighScoreList
