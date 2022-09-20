import React, { useState } from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function MainImage() {
  const [showTargetBox, setShowTargetBox] = useState(false)
  const [menuLoc, setMenuLoc] = useState({ top: 0, left: 0 })
  const characterLoc = {
    bowser: {
      x: 82,
      y: 40.5,
    },
    yubaba: {
      x: 50.39,
      y: 5.42,
    },
    theKnight: {
      x: 57.95,
      y: 91.67,
    },
  }
  const imageRef = useRef()

  const handleClick = (event) => {
    setMenuLoc({
      top: ((event.pageY - 72) / imageRef.current.offsetHeight) * 100,
      left: (event.pageX / imageRef.current.offsetWidth) * 100,
    })
    setShowTargetBox(!showTargetBox)

    console.log(menuLoc)
  }

  const handleMenuClick = () => {
    const height = imageRef.current.offsetHeight
    const width = imageRef.current.offsetWidth
  }

  return (
    <div className={styles.container} onClick={handleClick} ref={imageRef}>
      {showTargetBox && (
        <TargetBox xPos={menuLoc.left} yPos={menuLoc.top} ref={imageRef} />
      )}

      <img className={styles.img} src={image} alt='Game' />
    </div>
  )
}

export default MainImage
