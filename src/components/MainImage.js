import React from 'react'
import TargetBox from './TargetBox'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'

function MainImage() {
  return (
    <>
      <div>
        <TargetBox />
      </div>

      <img className={styles.img} src={image} alt='Game' />
    </>
  )
}

export default MainImage
