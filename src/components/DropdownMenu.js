import React from 'react'
import { characters } from '../data/data'

import styles from '../styles/DropdownMenu.module.css'

function DropdownMenu() {
  return (
    <div className={styles['dropdown-menu']}>
      {characters.map((character) => (
        <div>
          <h3 className={styles.dif}>{character.difficulty}</h3>
          <div className={styles.item}>
            <img src={character.image} alt='' className={styles.img} />
            <div className={styles.info}>
              <h3>{character.name}</h3>
              <h5>{character.from}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DropdownMenu
