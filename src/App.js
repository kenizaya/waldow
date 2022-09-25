import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import GameImage from './components/GameImage'
import HighScoreModal from './components/HighScoreModal'
import Loader from './components/Loader'

function App() {
  const [isGameFinished, setIsGameFinished] = useState(false)
  const location = useLocation()
  const [characterList, setCharacterList] = useState(location.state.data)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsGameFinished(
      characterList.every((character) => character.found === true)
    )
  }, [characterList])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='App'>
      <Header characters={characterList} isGameFinished={isGameFinished} />
      {isGameFinished && <HighScoreModal />}
      <GameImage
        characters={characterList}
        setIsGameFinished={setIsGameFinished}
        setCharacters={setCharacterList}
        image={location.state.board}
      />
      {isLoading && <Loader />}
    </div>
  )
}

export default App
