import { getPokemons, getPokemonInfo } from './components/pokemons.services.js'

const renderPokemonList = async () => {
  const { results } = await getPokemons()
  const pokemonPromises = results.map(async pokemon => {
    const { name } = await getPokemonInfo(pokemon.name)
    return `<li>${name}</li>`
  })
  const pokemonList = await Promise.all(pokemonPromises)
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>What Pokemon are you looking for?</h1>
      <ul>${pokemonList.join('')}</ul>
    </div>
  `
}

renderPokemonList()
