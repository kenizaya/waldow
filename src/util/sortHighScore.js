export const sortHighScore = (scores, n = 10) => {
  return Object.entries(scores)
    .sort(([, a], [, b]) => a - b)
    .slice(0, n)
}
