import './styles/styles.css'
import { getPokemons, getPokemonInfo } from './services/pokemons.services.js'
const { results } = await getPokemons()
const renderApp = async () => {
  const pokemonPromises = results.map(async pokemon => {
    const { name, id } = await getPokemonInfo(pokemon.name)
    return `
    <li>${name[0].toUpperCase() + name.slice(1)}</li>
    <img src=${`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}></img>
    `
  })
  const pokemonList = await Promise.all(pokemonPromises)
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>What Pokemon are you looking for?</h1>
      <ul>${pokemonList.join('')}</ul>
    </div>
  `
}

renderApp()
