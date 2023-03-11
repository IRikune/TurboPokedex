export const PokeList = (pokemons) => {
  return (`
  <ul>${
    pokemons.map(pokemon => {
        return `<li>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</li>`
    }).join('')
  }</ul>
  `
  )
}
