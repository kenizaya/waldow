import React from 'react'

import { characters } from '../data/data'
import bigCursor from '../assets/custom-cursor.svg'
import styles from '../styles/TargetBox.module.css'
import { useState } from 'react'

const TargetBox = React.forwardRef(({ xPos, yPos }, ref) => {
  return (
    <>
      <div
        className={styles.root}
        style={{ backgroundColor: 'red', top: `${yPos}px`, left: `${xPos}px` }}
      >
        <img className={styles.cursor} src={bigCursor} alt='big cursor' />
        <div className={styles.container}>
          <ul className={styles.list}>
            {characters.map((character) => (
              <li className={styles['list-item']}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
})

export default TargetBox
