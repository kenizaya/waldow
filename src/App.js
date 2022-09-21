import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainImage from './components/MainImage'
import HighScoreModal from './components/HighScoreModal'
import { characters } from './data/data'

function App() {
  const [isGameFinished, setIsGameFinished] = useState(false)
  // const [filteredItems, setFilteredItems] = useState([])
  const [characterList, setCharacterList] = useState(characters)

  // useEffect(() => {
  //   // setIsGameFinished(characters.every((character) => character.found === true))
  // setFilteredItems(characters.filter((character) => !character.found))
  //   console.log(filteredItems)
  // }, [])
  console.log(isGameFinished)
  return (
    <div className='App'>
      <Header />
      {isGameFinished && <HighScoreModal />}
      <MainImage setIsGameFinished={setIsGameFinished} />
    </div>
  )
}

export default App
