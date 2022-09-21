import React from 'react'
import { Link } from 'react-router-dom'
import theLocNar from '../assets/theLocNar.jpg'
import universe113 from '../assets/universe-113.jpg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Link to='play'>
          <img className={styles.img} src={theLocNar} alt='The LOC Nar' />
        </Link>
        <img className={styles.img} src={universe113} alt='Universe 113' />
      </div>
    </>
  )
}

export default Home
