export const sortHighScore = (scores, n = 10) => {
  return Object.entries(scores)
    .sort(([, a], [, b]) => a - b)
    .slice(0, n)
}

export const scores = {
  OK: 5678,
  test: 6565,
  Hmmm: 9089,
  Hloo: 1020,
  OKk: 56178,
  tes1t: 65615,
  Hm2mm: 90819,
  Hl1oo: 10220,
  LOLO: 9029,
  DOO: 2092,
  HUU: 1019,
  ioswj: 1283,
}
