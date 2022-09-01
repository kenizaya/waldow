import React from 'react'
import image from '../assets/default.jpg'

import styles from '../styles/MainImage.module.css'

function MainImage() {
  return <img className={styles.img} src={image} alt='' />
}

export default MainImage
