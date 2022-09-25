import React, { useState } from 'react'
import { db } from '../firebase'
import styles from '../styles/ScoreForm.module.css'

const ScoreForm = ({
  setCurrentUserScore,
  setShowHighScores,
  setShowForm,
  time,
  id,
}) => {
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowForm(false)
    try {
      await db
        .collection('levels')
        .doc(id)
        .update({ [`scores.${username}`]: time })
      setCurrentUserScore({ [username]: time })
      setShowHighScores(true)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form action='/' className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['input-container']}>
          <label htmlFor='username' className={styles.label}>
            Enter username to save your score
          </label>
          <input
            type='text'
            className={styles.input}
            name='username'
            id='username'
            placeholder='John'
            minLength={3}
            maxLength={20}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <button type='submit' className={styles['btn-submit']}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ScoreForm
