import { PokemonNew } from './PokemonNew'
import { getPokemonNews, statusNotOk } from './../../services/pokemons.services'
const { articles, status } = await getPokemonNews()
export const News = () => {
  if (status !== 'ok') {
    return `
    <section class='news'>
        <header>
            <h2>Pokemon News</h2>
            <a>View News</a>
        </header>
        <main>
            <p>Sorry, we can't show you the news right now</p>
            <image src=${statusNotOk}></image>
        </main>
    </section>
      `
  }
  return `
    <section class='news'>
        <header>
            <h2>Pokemon News</h2>
            <a href='#' >View News</a>
        </header>
        <main>
        ${articles.map(({ title, publishedAt, urlToImage }) => {
          return PokemonNew({
             title,
            publishedAt,
            image: urlToImage,
            statusNotOk
})
        }).join('')}
        </main>
    </section>
      `
}
