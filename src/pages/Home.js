import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import { locData, uniData } from '../data/levels'

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Link to='play' state={locData}>
          <img className={styles.img} src={locData.board} alt='The LOC Nar' />
        </Link>

        <Link to='play' state={uniData}>
          <img className={styles.img} src={uniData.board} alt='Universe 113' />
        </Link>
      </div>
    </>
  )
}

export default Home
