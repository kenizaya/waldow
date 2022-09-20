import React, { useState } from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function MainImage() {
  const [showTargetBox, setShowTargetBox] = useState(false)
  const [menuLoc, setMenuLoc] = useState({ x: 0, y: 0 })
  const characterLoc = {
    bowser: {
      x: 82,
      y: 40.5,
      hasFound: false,
    },

    yubaba: {
      x: 50.39,
      y: 5.42,
      hasFound: false,
    },
    theKnight: {
      x: 57.95,
      y: 91.67,
      hasFound: false,
    },
  }
  const imageRef = useRef()

  const handleClick = (event) => {
    setMenuLoc({
      x: (event.pageX / imageRef.current.offsetWidth) * 100,
      y: ((event.pageY - 72) / imageRef.current.offsetHeight) * 100,
    })
    setShowTargetBox(!showTargetBox)

    console.log(menuLoc)
    handleMenuClick()
  }

  const isClickValid = (x, y, charX, charY) => {
    console.log(x, charX - 2, charX + 2, y, charY - 2, charY + 2)
    return x > charX - 2 && x < charX + 2 && y > charY - 2 && y < charY + 2
  }

  const handleMenuClick = () => {
    const height = imageRef.current.offsetHeight
    const width = imageRef.current.offsetWidth

    for (const character in characterLoc) {
      if (
        isClickValid(
          menuLoc.x,
          menuLoc.y,
          characterLoc[character].x,
          characterLoc[character].y
        )
      )
        console.log('true')
      else console.log('false')
    }
  }

  return (
    <div className={styles.container} onClick={handleClick} ref={imageRef}>
      {showTargetBox && (
        <TargetBox xPos={menuLoc.x} yPos={menuLoc.y} ref={imageRef} />
      )}

      <img className={styles.img} src={image} alt='Game' />
    </div>
  )
}

export default MainImage
