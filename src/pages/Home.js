import React from 'react'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import { levels } from '../data/levels'

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>waldow</h1>
      </header>
      <p className={styles.p}>Find the characters as fast as possible</p>
      <div className={styles.container}>
        {Object.keys(levels).map((level) => {
          return (
            <div className={styles['img-container']} key={uuid()}>
              <Link to='play' state={levels[level]}>
                <img
                  className={styles.img}
                  src={levels[level].board}
                  alt={level}
                />
              </Link>
              <div className={styles.characters}>
                {levels[level].data.map((character) => {
                  return (
                    <img src={character.image} alt={character} key={uuid()} />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
