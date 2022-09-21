import { useState, useEffect } from 'react'
import Header from './components/Header'
import GameImage from './components/GameImage'
import HighScoreModal from './components/HighScoreModal'
import { locCharacters, uniCharacters } from './data/data'
import theLocNar from './assets/theLocNar.jpg'
import universe113 from './assets/universe-113.jpg'

function App() {
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [characterList, setCharacterList] = useState(locCharacters)

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
        image={theLocNar}
      />
    </div>
  )
}

export default App
