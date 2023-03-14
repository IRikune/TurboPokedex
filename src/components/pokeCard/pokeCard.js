export function pokeCard (id, name, types) {
  return (`
    <li>
      <article>
        <h3>${name[0].toUpperCase() + name.slice(1)}</h3>
        ${types.map(type => `<h4>${type.type.name}</h4>`).join('')}
        <img 
        async
        lazy
        src=${`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}>
        </img>
        </article>
    </li>
  `)
}
