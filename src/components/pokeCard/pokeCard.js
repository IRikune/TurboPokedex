export function pokeCard (id, name, types) {
  return (`
    <li>
      <article>
        <h3>${name[0].toUpperCase() + name.slice(1)}</h3>
        ${types.map(type => `<h4>${type.type.name}</h4>`).join('')}
        <img 
        async
        lazy
        src=${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}>
        </img>
        </article>
    </li>
  `)
}
