import './styles/styles.css'
import { Categories } from './components/categories/Categories'
import { News } from './components/news/News'
const renderApp = async () => {
  document.querySelector('#app').innerHTML = `
  <h1>What Pokemon are you looking for?</h1>
  ${Categories()}
  ${News()}
  `
}
renderApp()
