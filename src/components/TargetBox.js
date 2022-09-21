import React from 'react'

import { characters } from '../data/data'
import styles from '../styles/TargetBox.module.css'
import { useState } from 'react'

const TargetBox = ({ xPos, yPos, handleMenuClick }) => {
  const handleCLick = (event) => {
    const clickedItem = event.target.textContent
    handleMenuClick(xPos, yPos, clickedItem)
  }
  return (
    <>
      <div
        className={styles.root}
        style={{
          top: `calc(${yPos}% + 1.5rem)`,
          left: `calc(${xPos}% + 1.66rem)`,
        }}
      >
        <ul className={styles.list}>
          {characters.map((character) => (
            <li className={styles['list-item']} onClick={handleCLick}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TargetBox
