import robotCity from '../assets/robotCity/robot-city.jpg'
import goku from '../assets/robotCity/goku.png'
import mrPoopybutthole from '../assets/robotCity/mrPoopybutthole.png'
import childEmperor from '../assets/robotCity/childEmperor.png'

import theLocNar from '../assets/theLocNar/theLocNar.jpg'
import bowser from '../assets/theLocNar/bowser.png'
import yubaba from '../assets/theLocNar/yubaba.png'
import knight from '../assets/theLocNar/the-knight.webp'

import universe113 from '../assets/universe113/universe-113.jpg'
import cacodemon from '../assets/universe113/cacodemon.png'
import billCypher from '../assets/universe113/bill-cipher.png'
import courage from '../assets/universe113/courage.png'

export const robotCityData = {
  board: robotCity,
  data: [
    {
      name: 'Goku',
      from: 'Dragon Ball Z',
      image: goku,
      difficulty: 'easy',
      x: 63.86,
      y: 64.15,
      delta: 3,
      found: false,
    },
    {
      name: 'Mr. PB',
      from: 'Rick and Morty',
      image: mrPoopybutthole,
      difficulty: 'medium',
      x: 70.63,
      y: 39.1,
      delta: 2,
      found: false,
    },
    {
      name: 'Child Emperor',
      from: 'One Punch Man',
      image: childEmperor,
      difficulty: 'hard',
      x: 43.75,
      y: 39.46,
      delta: 1,
      found: false,
    },
  ],
}

export const locData = {
  board: theLocNar,
  data: [
    {
      name: 'Bowser',
      from: 'Super Mario Bros',
      image: bowser,
      difficulty: 'easy',
      x: 82,
      y: 40.5,
      delta: 4,
      found: false,
    },
    {
      name: 'Yubaba',
      from: 'Spirited Away',
      image: yubaba,
      difficulty: 'medium',
      x: 50.39,
      y: 5.42,
      delta: 2,
      found: false,
    },
    {
      name: 'The Knight',
      from: 'Hollow Knight',
      image: knight,
      difficulty: 'hard',
      x: 57.95,
      y: 91.67,
      delta: 1,
      found: false,
    },
  ],
}

export const uniData = {
  board: universe113,
  data: [
    {
      name: 'Cacodemon',
      from: 'DOOM',
      image: cacodemon,
      difficulty: 'easy',
      x: 50.26,
      y: 26.03,
      delta: 4,
      found: false,
    },
    {
      name: 'Bill Cypher',
      from: 'Gravity Falls',
      image: billCypher,
      difficulty: 'medium',
      x: 69.42,
      y: 65.17,
      delta: 2,
      found: false,
    },
    {
      name: 'Courage',
      from: 'Courage the Cowardly Dog',
      image: courage,
      difficulty: 'hard',
      x: 29.76,
      y: 52.23,
      delta: 1,
      found: false,
    },
  ],
}
