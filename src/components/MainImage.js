import React, { useState } from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import Snackbar from './Snackbar'

function MainImage() {
  const [showTargetBox, setShowTargetBox] = useState(false)
  const [menuLoc, setMenuLoc] = useState({ x: 0, y: 0 })
  const [snackbar, setSnackbar] = useState({
    text: '',
    bgColor: 'red',
    show: false,
  })
  const [isGameFinished, setIsGameFinished] = useState(false)
  const characterLoc = {
    Bowser: {
      x: 82,
      y: 40.5,
      hasFound: false,
    },

    Yubaba: {
      x: 50.39,
      y: 5.42,
      hasFound: false,
    },
    'The Knight': {
      x: 57.95,
      y: 91.67,
      hasFound: false,
    },
  }

  const imageRef = useRef()

  const handleClick = (event) => {
    setMenuLoc({
      x: (event.pageX / imageRef.current.offsetWidth) * 100,
      y: (event.pageY / imageRef.current.offsetHeight) * 100,
    })
    setShowTargetBox(!showTargetBox)
  }

  const isClickValid = (x, y, charX, charY) => {
    return x > charX - 2 && x < charX + 2 && y > charY - 2 && y < charY + 2
  }

  const handleMenuClick = (xPos, yPos, name) => {
    if (isClickValid(xPos, yPos, characterLoc[name].x, characterLoc[name].y)) {
      setSnackbar({
        text: `Congrats! You found ${name}!`,
        bgColor: 'green',
        show: true,
      })
      characterLoc[name].hasFound = true
    } else {
      setSnackbar({
        text: `You chose wrong. Keep Looking!`,
        bgColor: 'red',
        show: true,
      })
    }

    setTimeout(
      () =>
        setSnackbar({
          text: ``,
          bgColor: '',
          show: false,
        }),
      1800
    )
  }

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
        />
      )}

      <img className={styles.img} src={image} alt='Game' />
    </div>
  )
}

export default MainImage
