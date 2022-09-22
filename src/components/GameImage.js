import React, { useState } from 'react'
import TargetBox from './TargetBox'
import Credit from './Credit'
import styles from '../styles/GameImage.module.css'
import { useRef } from 'react'
import Snackbar from './Snackbar'
import { useEffect } from 'react'

function GameImage({ characters, setCharacters, image }) {
  const [showTargetBox, setShowTargetBox] = useState(false)
  const [menuLoc, setMenuLoc] = useState({ x: 0, y: 0 })
  const [snackbar, setSnackbar] = useState({
    text: '',
    bgColor: 'red',
    show: false,
  })

  const imageRef = useRef()

  const handleClick = (event) => {
    setMenuLoc({
      x: (event.pageX / imageRef.current.offsetWidth) * 100,
      y: (event.pageY / imageRef.current.offsetHeight) * 100,
    })
    setShowTargetBox(!showTargetBox)
    console.log(menuLoc)
  }

  const isClickValid = (x, y, charX, charY, delta = 4) => {
    return (
      x > charX - delta &&
      x < charX + delta &&
      y > charY - delta &&
      y < charY + delta
    )
  }

  const handleMenuClick = (xPos, yPos, name) => {
    setCharacters((prevCharacters) => {
      const updatedCharacterList = prevCharacters.map((character) => {
        if (character.name === name) {
          if (isClickValid(xPos, yPos, character.x, character.y)) {
            setSnackbar({
              text: `Congrats! You found ${name}!`,
              bgColor: '#63921A',
              show: true,
            })
            return { ...character, found: true }
          } else {
            setSnackbar({
              text: `You chose wrong. Keep Looking!`,
              bgColor: '#BA2525',
              show: true,
            })
          }
        }
        return character
      })
      return updatedCharacterList
    })
  }

  useEffect(() => {
    const delay = setTimeout(
      () =>
        setSnackbar({
          text: ``,
          bgColor: '',
          show: false,
        }),
      1800
    )

    return () => clearTimeout(delay)
  }, [characters])

  return (
    <div className={styles.container} onClick={handleClick} ref={imageRef}>
      {snackbar.show && (
        <Snackbar text={snackbar.text} bgColor={snackbar.bgColor} />
      )}
      {showTargetBox && (
        <TargetBox
          xPos={menuLoc.x}
          yPos={menuLoc.y}
          handleMenuClick={handleMenuClick}
          characters={characters.filter((character) => !character.found)}
        />
      )}

      <img className={styles.img} src={image} alt='Game' />
      <Credit
        position='left'
        text='by'
        author='kenizaya'
        link='https://github.com/kenizaya/'
      />
      <Credit
        position='right'
        text='Image by'
        author='Egor Klyuchnyk'
        link='https://www.instagram.com/ad.2.222/'
      />
    </div>
  )
}

export default GameImage
