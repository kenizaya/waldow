const sortHighScore = (scores) => {
  return Object.entries(scores).sort(([, a], [, b]) => a - b)
}

const scores = {
  OK: 5678,
  test: 6565,
  Hmmm: 9089,
  Hloo: 1020,
  OKk: 56178,
  tes1t: 65615,
  Hm2mm: 90819,
  Hl1oo: 10220,
}
export const highScores = sortHighScore(scores)

console.log(highScores)
