import { getPokemonInfo, getPokemons } from '../../services/pokemons.services.js'
import { pokeCard } from '../pokeCard/pokeCard.js'
const { results } = await getPokemons()
export const pokemonPromises = results.map(async pokemon => {
  const { name, id, types } = await getPokemonInfo(pokemon.name)
  return `
    ${pokeCard(id, name, types)}
  `
})
