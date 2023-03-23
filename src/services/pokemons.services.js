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
export { getPokemons, getPokemonInfo }
