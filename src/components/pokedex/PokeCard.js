export const PokeCard = ({ name, id, types }) => {
  return `
   <article>
    <header>
        <h3>${name}</h3>
    </header>
    <main>
        ${types.map(({ type }) => {
            console.log(type)
            return `
            <div>
            <span>${type.name}</span>
            </div>
            `
        }).join('')}
        <img
         src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg'
    </main>
   </article> 
  `
}
