import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import GameImage from './components/GameImage'
import HighScoreModal from './components/HighScoreModal'

function App() {
  const [isGameFinished, setIsGameFinished] = useState(false)
  const location = useLocation()
  const [characterList, setCharacterList] = useState(location.state.data)

  useEffect(() => {
    setIsGameFinished(
      characterList.every((character) => character.found === true)
    )
  }, [characterList])

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
    </div>
  )
}

export default App
