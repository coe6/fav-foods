
let movieArray = []

function createDeleteBttn(list) {
    const bttn = document.createElement('button')
    bttn.textContent = 'Remove'

    list.appendChild(bttn)
}

function deleteItem(ev) {
    
}

function renderListItem(type, value) {
    const item = document.createElement('li')
    item.textContent = `${type} ${value}`

    return item
}

function renderList(form) {
    const list = document.createElement('ul')

    const movieItem = {
        'Title: ': form.movie.value,
        'Genre: ': form.genres.value,
        'Currently: ': form.watch.value,
    }
    const tempArray = Object.keys(movieItem).map(value => {
         const item = renderListItem(value, movieItem[value])
         list.appendChild(item)

        return movieItem[value]
     })

     createDeleteBttn(list)

     tempArray.map(value => {
         movieArray.push(value)
     })

     return list;

}

function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const movies = document.querySelector('#movies')

    movies.appendChild(renderList(form))

    form.reset()
    form.movie.focus()
}

const form = document.querySelector('form#movieInput')
form.addEventListener('submit', handleSubmit)