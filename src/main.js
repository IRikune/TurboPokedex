import './styles/styles.css'
import { Categories } from './components/categories/Categories'
import { Pokedex } from './components/pokedex/Pokedex'
import { News } from './components/news/News'
const renderApp = () => {
  document.querySelector('#app').innerHTML = `
  <h1>What Pokemon are you looking for?</h1>
  ${Categories()}
  ${News()}
  ${Pokedex()}
  `
}
renderApp()
