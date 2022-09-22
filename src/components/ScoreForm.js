import React from 'react'
import styles from '../styles/ScoreForm.module.css'

const ScoreForm = () => {
  return (
    <div>
      <form action='/' className={styles.form}>
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
