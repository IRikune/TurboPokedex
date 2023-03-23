import { formatDate } from './../../services/pokemons.services'
export const PokemonNew = ({ title, publishedAt, image, statusNotOk }) => {
  return `
  <article>
    <h3>${title}</h3>
    <img src=${image || statusNotOk}>
    <time datetime=${publishedAt}>${formatDate(publishedAt)}</time>
  </article>
  `
}
