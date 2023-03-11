// import './styles/style.css'
import { getPokedexData } from './components/getPokedexData.js'
import { PokeList } from './components/PokeList/PokeList.js'
const { results } = await getPokedexData()
document.querySelector('#app').innerHTML = `
  <div>
    <h1>What Pokemon are you locking for?</h1>
    ${PokeList(results)}
  </div>
`
