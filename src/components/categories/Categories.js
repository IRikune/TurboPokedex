import { Category } from './Category.js'

export const Categories = () => {
  return `
  <section class='categories'>
      ${Category({
        category: 'Pokedex',
        path: '/Pokedex',
        color: '#1abc9c'
      })}
      ${Category({
        category: 'Moves',
        path: '/Moves',
        color: '#e74c3c'
      })}
      ${Category({
        category: 'Abilities',
        path: '/Abilities',
        color: '#3498db'
      })}
      ${Category({
        category: 'Items',
        path: '/Items',
        color: '#f1c40f'
      })}
      ${Category({
        category: 'Locations',
        path: '/Locations',
        color: '#8e44ad'
      })}
      ${Category({
        category: 'Type Charts',
        path: '/TypeCharts',
        color: '#d35400'
      })}
      </section>
    `
}
