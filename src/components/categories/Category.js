import '../../../public/pokeball.svg'
export const Category = ({ color, category, path = '#' }) => {
  return `
        <article 
        style='
        background-color: ${color};
        box-shadow: ${color + 50} 0px 4px 16px, ${color + 30} 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
        '
        class='category' >
            <h3>${category}</h3>
            <img
            src='../../../public/pokeball.svg'>
            </img>
        </article>
    `
}
