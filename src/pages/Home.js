import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

const Home = () => {
  const [levels, setLevels] = useState({})
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    db.collection('levels')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load')
          setIsPending(false)
        } else {
          let results = {}
          snapshot.docs.forEach((doc) => {
            results[doc.id] = doc.data()
          })
          setLevels(results)
          setIsPending(false)
        }
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }, [])
  return (
    <>
      <header className={styles.header}>
        <h1>waldow</h1>
      </header>
      {isPending && <h2>Loading...</h2>}
      {error && <p className={styles.error}>{error}</p>}
      <p className={styles.p}>Find the characters as fast as possible</p>
      <div className={styles.container}>
        {Object.keys(levels).map((level) => {
          return (
            <div className={styles['img-container']} key={uuid()}>
              <Link to='play' state={levels[level]}>
                <img
                  className={styles.img}
                  src={levels[level].homeImage}
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
      <Footer />
    </>
  )
}

export default Home
