import { getData } from '../../services/pokemons.services'
import { PokeCard } from './PokeCard'
const { results } = await getData('https://pokeapi.co/api/v2/pokemon?limit=9')
const dataResults = results.map(({ url }) => {
  return getData(url).then(({ name, id, types }) => {
    return { name, id, types }
  })
})
const pokedexData = await Promise.all(dataResults)
export const Pokedex = () => {
  return `
  <section>
    <header>
        <h2>Pokedex</h2>
    <header>
    <main>
        ${pokedexData.map(({ name, id, types }) => {
            return `
            ${PokeCard({
                name,
                id,
                types
            })}
            `
        }).join('')}
    </main>
  </section>
  `
}
