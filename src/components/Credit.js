import React from 'react'
import styles from '../styles/Credit.module.css'

const Credit = ({ position, text, author, link }) => {
  return (
    <div className={`${styles.credit} ${styles[position]}`}>
      {text} <a href={link}>{author}</a>{' '}
    </div>
  )
}

export default Credit
