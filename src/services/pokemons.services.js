const statusNotOk = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
const formatDate = (date) => {
  const newDate = new Date(date)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = new Intl.DateTimeFormat('en', options).format(newDate)
  return formattedDate
}
export {
  formatDate,
  statusNotOk,
  getData
}
