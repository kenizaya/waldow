import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import { levels } from '../data/levels'

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>waldow</h1>
      </header>

      <div className={styles.container}>
        {Object.keys(levels).map((level) => {
          return (
            <div className={styles['img-container']}>
              <Link to='play' state={levels[level]}>
                <img
                  className={styles.img}
                  src={levels[level].board}
                  alt={level}
                />
              </Link>
              <div className={styles.characters}>
                {levels[level].data.map((character) => {
                  return <img src={character.image} alt={character} />
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
