import { getPokemonInfo } from '../pokemons.services.js'

export const pokeList = async (pokemons) => {
  const pokemonPromises = pokemons.map(async pokemon => {
    const { name, id } = await getPokemonInfo(pokemon.name)
    return `
    <li>${name[0].toUpperCase() + name.slice(1)}</li>
    <img src=${`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}></img>
    `
  })
  return pokemonPromises
}
