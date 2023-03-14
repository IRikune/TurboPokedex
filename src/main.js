import './styles/styles.css'
import { pokemonPromises } from './components/PokeList/PokeList.js'
import { category } from './components/categories/category.js'

const pokemonList = await Promise.all(pokemonPromises)

const renderApp = async () => {
  document.querySelector('#app').innerHTML = `
      <h1>What Pokemon are you looking for?</h1>
      <section class='categories'>
      ${category('Pokedex', '/Pokedex', 'bgEmerald')}
      ${category('Moves', '/Moves', 'bgAlizarin')}
      ${category('Abilities', '/Abilities', 'bgPeterRiver')}
      ${category('Items', '/Items', 'bgSunFlower')}
      ${category('Locations', '/Locations', 'bgAmethist')}
      ${category('Type Charts', '/types', 'bgCarrot')}
      </section>
      ${pokemonList.join('')}
  `
}

renderApp()
