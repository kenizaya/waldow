import bowser from '../assets/bowser.png'
import yubaba from '../assets/yubaba.png'
import knight from '../assets/the-knight.webp'

import cacodemon from '../assets/cacodemon.png'
import billCypher from '../assets/bill-cipher.png'
import courage from '../assets/courage.png'

export const locCharacters = [
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
]

export const uniCharacters = [
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
]
