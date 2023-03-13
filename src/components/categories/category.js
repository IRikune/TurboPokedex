export const category = (category, path = '#', className = '') => {
  return `
        <article class='category ${className}' >
            <h3>${category}</h3>
        </article>
    `
}
