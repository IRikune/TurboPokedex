const statusNotOk = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
const getPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const data = await response.json()
  return data
}
const getPokemonInfo = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json()
  return data
}
const getPokemonNews = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=pokemon&pageSize=6&apiKey=b6cd10218f214a06899135b1b28c4612')
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
  getPokemons,
  getPokemonInfo,
  formatDate,
  getPokemonNews,
  statusNotOk
}
