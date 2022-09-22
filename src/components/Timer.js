import React, { useState, useEffect } from 'react'
import styles from '../styles/Timer.module.css'

export const formatDuration = (interval) => {
  const seconds = `0${Math.round(interval % 60)}`.slice(-2)
  const minutes = `0${Math.floor(interval / 60) % 60}`.slice(-2)
  const hours = `0${Math.round(interval / 3600)}`.slice(-2)

  return `${hours}:${minutes}:${seconds}`
}

export let time = 0

function Timer({ isGameFinished }) {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval
    if (!isGameFinished) {
      interval = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000)
      time = timer
    } else {
      return () => {
        setTimer(0)
        clearInterval(interval)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [isGameFinished, timer])

  return <span className={styles.timer}>{formatDuration(timer)}</span>
}

export default Timer
