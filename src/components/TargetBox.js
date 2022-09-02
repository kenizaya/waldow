import React from 'react'

import { characters } from '../data/data'
import bigCursor from '../assets/custom-cursor.svg'
import styles from '../styles/TargetBox.module.css'

function TargetBox() {
  return (
    <>
      <img className={styles.cursor} src={bigCursor} alt='big cursor' />
      <div className={styles.container}>
        <ul className={styles.list}>
          {characters.map((character) => (
            <li className={styles['list-item']}>{character.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TargetBox
