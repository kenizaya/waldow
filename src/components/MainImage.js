import React, { useState } from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'
import { useRef } from 'react'

function MainImage() {
  const [showTargetBox, setShowTargetBox] = useState(false)
  const mainImageRef = useRef()
  return (
    <>
      <div className={styles['target-box']}>
        {showTargetBox && <TargetBox ref={mainImageRef} />}
      </div>

      <img
        className={styles.img}
        src={image}
        alt='Game'
        onClick={() => setShowTargetBox(!showTargetBox)}
      />
    </>
  )
}

export default MainImage
