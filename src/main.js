import './styles/styles.css'
import { pokemonPromises } from './components/PokeList/PokeList.js'
import { Categories } from './components/categories/Categories'

const pokemonList = await Promise.all(pokemonPromises)

const renderApp = async () => {
  document.querySelector('#app').innerHTML = `
      <h1>What Pokemon are you looking for?</h1>
      ${Categories()}
      ${pokemonList.join('')}
  `
}

renderApp()
