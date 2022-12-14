export const getCount = (count: number) => {
  if (count < 0) return "0"

  if (count < 10000) return `${count}`
  else if (Math.floor(count / 10000) < 1000)
    return Math.floor(count / 1000) / 10 + "万"
  else return Math.floor(count / 10000000) / 10 + "亿"
}
