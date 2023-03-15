import './styles/styles.css'
import { pokemonPromises } from './components/PokeList/PokeList.js'
import { category } from './components/category/category.js'

const pokemonList = await Promise.all(pokemonPromises)

const renderApp = async () => {
  document.querySelector('#app').innerHTML = `
      <h1>What Pokemon are you looking for?</h1>
      <section class='categories'>
      ${category('Pokedex', '/Pokedex', '#1abc9c')}
      ${category('Moves', '/Moves', '#e74c3c')}
      ${category('Abilities', '/Abilities', '#3498db')}
      ${category('Items', '/Items', '#f1c40f')}
      ${category('Locations', '/Locations', '#8e44ad')}
      ${category('Type Charts', '/types', '#d35400')}
      </section>
      ${pokemonList.join('')}
  `
}

renderApp()
