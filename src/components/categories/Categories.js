import { Category } from './Category.js'

export const Categories = () => {
  return `
  <section class='categories'>
      ${Category('Pokedex', '/Pokedex', '#1abc9c')}
      ${Category('Moves', '/Moves', '#e74c3c')}
      ${Category('Abilities', '/Abilities', '#3498db')}
      ${Category('Items', '/Items', '#f1c40f')}
      ${Category('Locations', '/Locations', '#8e44ad')}
      ${Category('Type Charts', '/types', '#d35400')}
      </section>
    `
}
