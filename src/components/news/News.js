import { PokemonNew } from './PokemonNew'
import { getData, statusNotOk } from './../../services/pokemons.services'
const { articles, status } = await getData('https://newsapi.org/v2/everything?q=pokemon&pageSize=6&apiKey=b6cd10218f214a06899135b1b28c4612')
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
