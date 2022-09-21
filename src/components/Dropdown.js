import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import { characters } from '../data/data'
import styles from '../styles/Dropdown.module.css'

function Dropdown() {
  const filteredCharacters = characters.filter((character) => !character.found)

  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={styles.root}>
      <button
        className={styles.dropdown}
        onClick={() => setIsVisible(!isVisible)}
      >
        {filteredCharacters.length}
      </button>
      {isVisible && <DropdownMenu characters={filteredCharacters} />}
    </div>
  )
}

export default Dropdown
