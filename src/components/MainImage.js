import React, { useState } from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'
import { useRef } from 'react'

function MainImage() {
  const [showTargetBox, setShowTargetBox] = useState(true)
  const [coords, setCoords] = useState({ xPos: 0, yPos: 0 })
  const mainImageRef = useRef()

  const handleClick = (event) => {
    setCoords({
      xPos: event.pageX,
      yPos: event.pageY,
    })
    setShowTargetBox(!showTargetBox)
  }

  return (
    <>
      {showTargetBox && (
        <TargetBox xPos={coords.xPos} yPos={coords.yPos} ref={mainImageRef} />
      )}

      <img
        className={styles.img}
        src={image}
        alt='Game'
        onClick={handleClick}
      />
    </>
  )
}

export default MainImage
